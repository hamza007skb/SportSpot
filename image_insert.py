from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy import Column, Integer, ForeignKey, LargeBinary, TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import io
import asyncio

# Define the database URL (note the correct usage of asyncpg)
DATABASE_URL = "postgresql+asyncpg://postgres:1234@localhost:5432/test"

# Create the async SQLAlchemy engine and session
engine = create_async_engine(DATABASE_URL, echo=True)
AsyncSessionLocal = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)

# Define the Base class
Base = declarative_base()

# Define the GroundImages model
class GroundImages(Base):
    __tablename__ = 'groundimages'
    id = Column(Integer, primary_key=True, autoincrement=True)
    ground_id = Column(Integer, ForeignKey('grounds.id', ondelete='CASCADE'))
    image_data = Column(LargeBinary, nullable=False)
    created_at = Column(TIMESTAMP, server_default='CURRENT_TIMESTAMP')

# Define the Grounds model
class Grounds(Base):
    __tablename__ = 'grounds'
    id = Column(Integer, primary_key=True, autoincrement=True)
    # Add more columns as needed

# Create the table (if it does not exist)
async def init_db():
    async with engine.begin() as conn:
        # Create the tables if they don't exist
        await conn.run_sync(Base.metadata.create_all)

# Function to insert an image asynchronously
async def insert_image(ground_id: int, image_path: str):
    async with AsyncSessionLocal() as session:
        # Read the image file
        with open(image_path, 'rb') as f:
            image_data = f.read()

        # Create a new GroundImages instance
        new_image = GroundImages(ground_id=ground_id, image_data=image_data)

        # Add and commit the new image to the database
        session.add(new_image)
        await session.commit()

# Example usage
async def main():
    # Initialize the database
    await init_db()

    # Insert images
    # await insert_image(15, '/Users/aukte/Desktop/images/1.jpg')
    await insert_image(15, '/assets/1.jpg')
    await insert_image(15, '/assets/2.jpg')
    await insert_image(15, '/assets/3.jpg')
    await insert_image(15, '/assets/4.jpg')
    await insert_image(15, '/assets/5.jpg')

    await insert_image(16, '/assets/1.jpg')
    await insert_image(16, '/assets/2.jpg')
    await insert_image(16, '/assets/3.jpg')
    await insert_image(16, '/assets/4.jpg')
    await insert_image(16, '/assets/5.jpg')
    
    await insert_image(17, '/assets/1.jpg')
    await insert_image(17, '/assets/2.jpg')
    await insert_image(17, '/assets/3.jpg')
    await insert_image(17, '/assets/4.jpg')
    await insert_image(17, '/assets/5.jpg')
    
    await insert_image(18, '/assets/1.jpg')
    await insert_image(18, '/assets/2.jpg')
    await insert_image(18, '/assets/3.jpg')
    await insert_image(18, '/assets/4.jpg')
    await insert_image(18, '/assets/5.jpg')
    
    await insert_image(19, '/assets/1.jpg')
    await insert_image(19, '/assets/2.jpg')
    await insert_image(19, '/assets/3.jpg')
    await insert_image(19, '/assets/4.jpg')
    await insert_image(19, '/assets/5.jpg')
    
    await insert_image(20, '/assets/1.jpg')
    await insert_image(20, '/assets/2.jpg')
    await insert_image(20, '/assets/3.jpg')
    await insert_image(20, '/assets/4.jpg')
    await insert_image(20, '/assets/5.jpg')
    
    await insert_image(21, '/assets/1.jpg')
    await insert_image(21, '/assets/2.jpg')
    await insert_image(21, '/assets/3.jpg')
    await insert_image(21, '/assets/4.jpg')
    await insert_image(21, '/assets/5.jpg')
    
    await insert_image(22, '/assets/1.jpg')
    await insert_image(22, '/assets/2.jpg')
    await insert_image(22, '/assets/3.jpg')
    await insert_image(22, '/assets/4.jpg')
    await insert_image(22, '/assets/5.jpg')

    await insert_image(23, '/assets/1.jpg')
    await insert_image(23, '/assets/2.jpg')
    await insert_image(23, '/assets/3.jpg')
    await insert_image(23, '/assets/4.jpg')
    await insert_image(23, '/assets/5.jpg')
    
    await insert_image(24, '/assets/1.jpg')
    await insert_image(24, '/assets/2.jpg')
    await insert_image(24, '/assets/3.jpg')
    await insert_image(24, '/assets/4.jpg')
    await insert_image(24, '/assets/5.jpg')


# Run the main function
asyncio.run(main())

# Example usage



