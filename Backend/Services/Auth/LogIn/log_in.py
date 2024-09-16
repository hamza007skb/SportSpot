from fastapi import HTTPException
from Encryption.bcrypt_context import bcrypt_context
from Database.Sync_DB_Connection import DB_dependency
from starlette import status
from Database.tables import Users
from datetime import timedelta
from Services.Auth.auth import create_access_token
from Services.Auth.auth_credentials import ACCESS_TOKEN_EXPIRE
from Services.Auth.models import UserRequestModel, TokenModel


db = DB_dependency()


def login_user(user_request: UserRequestModel):
    try:
        user = db.query(Users).filter(Users.email == user_request.email).first()
        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="No user registered with this email",
            )
        if not bcrypt_context.verify(user_request.password, user.hashed_password):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect password",
            )
        access_token = create_access_token(
            data={"email": user.email},
            expires_delta=timedelta(
                minutes=ACCESS_TOKEN_EXPIRE
            )
        )
        return TokenModel(
            access_token=access_token,
            token_type="Bearer",
            message="Logged in successfully"
        )

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e),
        )
