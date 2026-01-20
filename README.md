# 🧠 Memory Card Game

A **Memory Card Game** built with **React** where players must avoid clicking the same image more than once.
The game challenges memory by **shuffling cards after every click**, and images are fetched dynamically from a **third-party API**.

---

## 🎮 How the Game Works

* A set of image cards is displayed
* Clicking a **new image** increases the score
* Clicking the **same image again** resets the score to **0**
* Cards **shuffle after every click**
* The goal is to achieve the highest possible score without repeating clicks

---

## 🚀 Features

* Dynamic image fetching from a third-party API
* Real-time score tracking
* High score tracking
* Card shuffle logic after every interaction
* Responsive and interactive UI
* State-driven gameplay using React

---

## 🛠 Tech Stack

* **Frontend:** React
* **State Management:** React Hooks (`useState`, `useEffect`)
* **API:** Third-party image API
* **Logic:** Shuffle algorithm for cards
* **Styling:** CSS / CSS Modules 

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Card.jsx
│   ├── ScoreBoard.jsx
├── services/
│   └── api.js
├── utils/
│   └── shuffle.js
├── App.jsx
└── main.jsx
```

---

## 🧑‍💻 Getting Started

### Prerequisites

* Node.js (v16+ recommended)
* npm or yarn

### Installation

```bash
git clone https://github.com/your-username/memory-card-game.git
cd memory-card-game
npm install
npm run dev
```

---

## 📌 Learning Outcomes

* Managing complex state in React
* Implementing game logic with hooks
* Fetching and handling API data
* Writing efficient shuffle algorithms
* Building interactive UI experiences

---

## 🔮 Future Improvements

* Difficulty levels
* Timer-based gameplay
* Animations and transitions
* Persistent high scores
* Mobile-first enhancements

---

## 📜 License

This project is open-source and available under the **MIT License**.
