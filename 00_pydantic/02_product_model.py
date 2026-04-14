from pydantic import BaseModel


class product(BaseModel):
    productId: str
    productValue: int
    inStock: bool = True

product_one = product(productId='abgtsbbpita', productValue= 500, inStock= False )
print(product_one)