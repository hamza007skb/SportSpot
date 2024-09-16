from .models import BookingRequestModel
from Database.async_tables import get_bookings_table
from fastapi import HTTPException
from sqlalchemy import select, insert
from sqlalchemy.ext.asyncio import AsyncSession


async def book_ground(booking: BookingRequestModel, db: AsyncSession):
    start_time_naive = booking.start_time.replace(tzinfo=None)
    bookings = await get_bookings_table()
    query = select(bookings).where(
        bookings.c.pitch_id == booking.pitch_id,
        bookings.c.start_time == booking.start_time
    )
    result = await db.execute(query)
    if result.scalar():
        raise HTTPException(
            status_code=400, detail="Pitch already booked"
        )
    insert_statement = insert(bookings).values(
        pitch_id=booking.pitch_id,
        ground_id=booking.ground_id,
        user_email=booking.user_email,
        start_time=start_time_naive,
        duration=booking.duration,
        payment_status=booking.payment_status,
    )
    await db.execute(insert_statement)
    await db.commit()

    return {"status": "booked"}
