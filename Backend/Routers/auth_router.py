from fastapi import APIRouter, Form, Depends
from fastapi.security import OAuth2PasswordRequestForm
from starlette import status
from Services.Auth.SignUp.sign_up import create_user
from Services.Auth.LogIn.log_in import login_user
from Services.Auth.auth import get_current_user
from Services.Auth.models import UserRequestModel, UserSignUpModel, TokenModel

router = APIRouter(
    prefix="/auth",
    tags=["Auth"],
)


@router.post("/signup", status_code=status.HTTP_201_CREATED)
async def signup_user(username: str = Form(...), email: str = Form(...), password: str = Form(...)):
    return create_user(UserSignUpModel(username=username, email=email, password=password))


@router.post("/login", response_model=TokenModel)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    return login_user(UserRequestModel(email=form_data.username, password=form_data.password))


@router.post("/me", response_model=TokenModel)
async def get_profile(current_user: str = Depends(get_current_user)):
    return {"user": current_user}
