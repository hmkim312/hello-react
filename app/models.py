from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from .database import Base

class Item(Base):
    __tablename__ = "items"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), index=True)
    vote = Column(Integer, index=True)
    
    messages = relationship("VoteMessage", back_populates="item")
    
class VoteMessage(Base):
    __tablename__ = "votemsgs"
    
    id = Column(Integer, primary_key=True, index=True)
    message = Column(String(250), index=True)
    item_id = Column(Integer, ForeignKey("items.id"))
    
    item = relationship("Item", back_populates="messages")
    
