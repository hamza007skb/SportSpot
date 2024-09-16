from sqlalchemy import create_engine, MetaData, Table
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.automap import automap_base
from typing import Annotated
from fastapi import Depends
from .database_url import DB_URL

###################################################################################
# creating engine
engine = create_engine(DB_URL)

###################################################################################
# reflecting database schema as metadata
metadata = MetaData()
metadata.reflect(bind=engine)

###################################################################################
# preparing the mapping
Automap_Base = automap_base(metadata=metadata)
Automap_Base.prepare()
print(Automap_Base.classes.keys())

###################################################################################
# making session for transactions
Session = sessionmaker(bind=engine, autocommit=False, autoflush=False)


###################################################################################
#for db transaction and closing it after transacted
def get_session():
    session = Session()
    try:
        yield session
    finally:
        session.close()


###################################################################################
DB_dependency = Annotated[Session, Depends(get_session)]

###################################################################################
