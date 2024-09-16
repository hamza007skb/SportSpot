from datetime import datetime, timedelta
from pydantic import BaseModel
from typing import Literal

class BookingRequestModel(BaseModel):
    pitch_id: int
    ground_id: int
    user_email: str
    start_time: datetime
    duration: timedelta
    payment_status: Literal['pending', 'paid'] = 'pending'
