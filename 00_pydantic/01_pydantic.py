from pydantic import BaseModel

class user(BaseModel):
    id: int
    name: str
    is_active: bool

input_data = {'id': 101, 'name':'nitish', 'is_acitve': True}
user = user(**input_data)
print(user)