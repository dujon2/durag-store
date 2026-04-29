from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],#Allow my website to get data from this Python backend.Without CORS, your browser may block the request.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Durag Store API is running"}

@app.get("/products")
def get_products():
    return [
        {
            "id": 1,
            "name": "Black Velvet Durag",
            "price": 20,
            "material": "Velvet",
            "color": "Black",
            "image": "https://via.placeholder.com/300"
        },
        {
            "id": 2,
            "name": "Red Silky Durag",
            "price": 15,
            "material": "Silky",
            "color": "Red",
            "image": "https://via.placeholder.com/300"
        },
        {
            "id": 3,
            "name": "Blue Silky Durag",
            "price": 15,
            "material": "Silky",
            "color": "Blue",
            "image": "https://via.placeholder.com/300"
        }
    ]