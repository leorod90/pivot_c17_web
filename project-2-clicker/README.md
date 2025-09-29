# Project 3 – Clicker Game

## 📝 Introduction
In this project, we will learn about the **DOM (Document Object Model)** and how JavaScript can interact with HTML on a webpage.  

The DOM is like a "map" of your webpage. Every element (like `<p>`, `<button>`, `<h1>`) becomes an object in the DOM that we can find and change using JavaScript.

For example:
- We can **find** a button by its ID.
- We can **change** text on the page with `.innerText`.
- We can **react to events** like button clicks with `onclick`.

---

## 🎯 Learning Goals
By the end of this project, you should be able to:
1. Understand what the DOM is and why it’s important.
2. Use `document.getElementById` to find elements.
3. Use `.innerText` to update text on the page.
4. Add **event listeners** (`onclick`) to respond to user actions.
5. Combine variables + functions with DOM updates.

---

## 🕹️ The Clicker Project
We’re building a **click counter game**:
- Start with a counter set to `0`.
- Every time you click the button, the counter increases by `1`.
- The page updates to show the new number.

---

## 📂 Files
- `index.html` → The webpage structure (HTML).
- `style.css` → The page styling (CSS).
- `script.js` → The logic of the clicker game (JavaScript).

---

## 💻 Example Code

**HTML**
```html
<h1>Click Counter</h1>
<p id="count">0</p>
<button onclick="increase()">Click Me!</button>
