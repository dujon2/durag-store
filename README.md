# Durag Store

Full-stack e-commerce application built with React (frontend) and FastAPI (backend). Users can browse durags, add items to a cart, and see totals update dynamically.

---

# 🚀 How to Run This Project

## 🧰 Prerequisites

Install these first:

* Node.js → https://nodejs.org/
* Python 3.9+ → https://www.python.org/

Verify installation:

```bash
node -v
python --version
```

---

# 📥 1. Clone the Repository

```bash
git clone https://github.com/dujon2/durag-store.git
cd durag-store
```

---

# 🐍 2. Run the Backend (FastAPI)

## Step 1: Go to backend folder

```bash
cd backend
```

## Step 2: Create virtual environment (first time only)

```bash
python -m venv venv
```

## Step 3: Activate virtual environment

### Windows:

```bash
venv\Scripts\activate
```

### Mac/Linux:

```bash
source venv/bin/activate
```

You should now see `(venv)` in your terminal.

---

## Step 4: Install dependencies

```bash
pip install fastapi uvicorn
```

---

## Step 5: Start backend server

```bash
uvicorn main:app --reload
```

Backend will run at:

```text
http://127.0.0.1:8000
```

---

## Step 6: Test backend

Open in browser:

```text
http://127.0.0.1:8000/products
```

You should see JSON product data.

---

# ⚛️ 3. Run the Frontend (React)

## Open a NEW terminal (keep backend running)

---

## Step 1: Go to frontend folder

```bash
cd frontend
```

---

## Step 2: Install dependencies

```bash
npm install
```

---

## Step 3: Start frontend

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

---

## Step 4: Open the app

Go to:

```text
http://localhost:5173
```

You should now see the durag store with products.

---

# 🔁 Important

You must run BOTH:

* Backend → http://127.0.0.1:8000
* Frontend → http://localhost:5173

If one is not running, the app will not work.

---

# ⚠️ Troubleshooting

## No products showing

* Make sure backend is running
* Visit `/products` directly in browser

## CORS error

Ensure backend includes:

```python
allow_origins=["http://localhost:5173"]
```

## Virtual environment not working

Make sure you activated it:

```bash
venv\Scripts\activate
```

## npm errors

Try reinstalling:

```bash
npm install
```

---

# 📂 Project Structure

```text
durag-store/
├── backend/
│   ├── main.py
│   └── venv/
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── README.md
```

---

# 🧠 What This Project Shows

* Full-stack development (React + Python)
* API integration (frontend ↔ backend)
* State management (cart logic)
* Basic e-commerce functionality

---

# 🔧 Future Improvements

* Stripe checkout
* Product filtering/search
* Database integration
* Deployment (live site)
