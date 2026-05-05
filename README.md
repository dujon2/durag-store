# Durag Store

This is a full-stack e-commerce project I built to practice connecting a React frontend to a Python backend.

The idea is simple: a small durag store where users can browse products, add them to a cart, and see the total update in real time.

---

## What this project does

* Displays durag products from a FastAPI backend
* Lets users search for products by name
* Allows adding items to a cart
* Calculates the cart total dynamically
* Keeps the frontend and backend fully separated

---

## Tech stack

**Frontend**

* React (with Vite)
* JavaScript
* CSS

**Backend**

* Python
* FastAPI
* Uvicorn

---

## How to run it

You’ll need **two terminals open** — one for the backend and one for the frontend.

---

### 1. Clone the repo

```bash
git clone https://github.com/dujon2/durag-store.git
cd durag-store
```

---

### 2. Start the backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install fastapi uvicorn
uvicorn main:app --reload
```

If everything worked, you should see:

```text
Uvicorn running on http://127.0.0.1:8000
```

You can also check this in your browser:

```
http://127.0.0.1:8000/products
```

---

### 3. Start the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Then go to:

```
http://localhost:5173
```

---

## Important

Both servers need to be running at the same time:

* Backend → http://127.0.0.1:8000
* Frontend → http://localhost:5173

If the backend isn’t running, products won’t load.

---

## How it works (quick explanation)

When the page loads, the React app calls:

```js
fetch("http://127.0.0.1:8000/products")
```

The FastAPI backend returns product data, and React stores it in state and renders it.

From there:

* Search filters the product list
* Clicking “Add to Cart” updates cart state
* The total is calculated using `reduce`

---

## What I focused on

* Understanding how frontend ↔ backend communication works
* Managing state in React (especially cart logic)
* Structuring a simple full-stack project
* Writing cleaner, more readable code

---

## Things I’d add next

* Quantity controls in the cart
* Remove/update cart items
* Product detail pages
* Stripe checkout
* Database instead of hardcoded products
* Deployment

---

## Notes

This project is meant to be simple but realistic. I focused more on understanding the flow of data and structure rather than adding a lot of features at once.
