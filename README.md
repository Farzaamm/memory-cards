# Memory Cards

A simple memory card game built with React. The goal of the game is to flip cards and match pairs, testing the player's memory and concentration.

## 🚀 Features

* Interactive card flipping
* Match pairs of cards
* Track game progress
* Restart / new game functionality
* Dynamic UI updates using React state

Memory games follow a classic pattern where players flip two cards at a time and check if they match; matched cards stay visible while unmatched ones flip back ([GeeksforGeeks][1])

---

## 🛠️ Tech Stack

* React
* JavaScript (ES6+)
* CSS

---

## 📁 Project Structure

```bash
.
├── src/
│   ├── components/   # Card and game components
│   ├── assets/       # Images or icons for cards
│   ├── App.jsx       # Main component
│   └── main.jsx      # Entry point
├── public/
├── package.json
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Farzaamm/memory-cards.git
cd memory-cards
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run the app

```bash
npm run dev
```

---

## 📌 How It Works

* Cards are shuffled at the start of the game
* The player selects two cards:

  * If they match → they stay flipped
  * If they don’t → they flip back
* The game ends when all pairs are matched ([GeeksforGeeks][1])

---

## ⚠️ Limitations

* No backend or database
* No persistent score tracking
* Basic styling and animations
* Not production-ready

---

## 📄 License

MIT License

[1]: https://www.geeksforgeeks.org/reactjs/memory-game-from-scratch-using-react/?utm_source=chatgpt.com "Memory Game from scratch using React - GeeksforGeeks"
