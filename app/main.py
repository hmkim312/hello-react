from typing import List

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)


# uvicorn app.main:app --reload --host 0.0.0.0 --port 8000 
origins = [
    "http://localhost:3000",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["Content-Type", "Authorization"]
)

def get_db():
    db = SessionLocal()
    try:
        yield db        
    finally:
        db.close()
        
@app.get("/items", response_model=schemas.ItemsResponse)
def items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = crud.get_items(db, skip=skip, limit=limit)
    data = []
    for item in items:
        data.append({
            "type" : "LOCATION",
            "link": f"/items/{item.id}",
            "id": item.id,
            "data":item
        })
    return {
        "link": {
            "current": "/items"
        },
        "data": data
    }
    
@app.post("/items", response_model=schemas.ItemResponse)
def create_item(item: schemas.ItemCreate, db: Session=Depends(get_db)):
    db_item = crud.create_item(db=db, item=item)
    return {
        "type": "LOCATION",
        "link": f"/items/{db_item.id}",
        "id": db_item.id,
        "data": db_item
    }
    
@app.get("/item/{item_id}", response_model=schemas.ItemResponse)
def get_item(item_id: int, db: Session=Depends(get_db)):
    db_item = crud.get_item(db=db, item_id=item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return {
        "type": "LOCATION",
        "link": f"/items/{db_item.id}",
        "id": db_item.id,
        "data": db_item
    }
    
@app.post("/item/{item_id}", response_model=schemas.ItemResponse)
def create_vote(item_id: int, vote: schemas.VoteMessageCreate, db: Session=Depends(get_db)):
    
    crud.create_vote_message(db=db, vote=vote, item_id=item_id)
    db_item = crud.get_item(db=db, item_id=item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    
    return {
        "type": "LOCATION",
        "link": f"/items/{db_item.id}",
        "id": db_item.id,
        "data": db_item
    }
        