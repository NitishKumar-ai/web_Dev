from pydantic import BaseModel
from typing import List, Dict, Optional

class Cart(BaseModel):
    userID: int
    items: List[str]
    quantities: Dict[str, int]

class BlogPost(BaseModel):
    title: str
    content: str
    imageURL: Optional[str]