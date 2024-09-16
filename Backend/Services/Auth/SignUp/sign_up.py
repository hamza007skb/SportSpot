from fastapi import HTTPException, Depends
from starlette import status
from Encryption.bcrypt_context import bcrypt_context
from sqlalchemy.exc import SQLAlchemyError
from Database.Sync_DB_Connection import DB_dependency
from Database.tables import Users
from Services.Auth.models import UserSignUpModel

db = DB_dependency()


def create_user(user: UserSignUpModel = Depends()):
    existing_user = db.query(Users).filter((Users.email == user.email) | (Users.username == user.username)).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="A user with this email or username already exists."
        )
    hashed_password = bcrypt_context.hash(user.password)
    new_user = Users(
        username=user.username,
        email=user.email,
        hashed_password=hashed_password
    )
    try:
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        return {"message": "User created successfully"}
    except SQLAlchemyError as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error occurred while creating the user."
        )
