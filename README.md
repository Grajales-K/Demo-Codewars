# CodeWars Katas - JavaScript 🚀

This repository is a collection of my solutions to various CodeWars challenges. I've set up a professional development environment using **Node.js** and **Jest** to test my solutions locally before submitting them.

---

## 🛠️ Tech Stack

- **Language:** JavaScript (ES6+)
- **Test Runner:** [Jest](https://jestjs.io/)
- **Assertion Library:** [Chai](https://www.chaijs.com/) (Version 4 for CommonJS support)
- **Environment:** Node.js

---

---

## ⚙️ Setup & Installation

To run these tests on your local machine, follow these steps:

### 1. Initialize the project
If you are starting from scratch, you'll need to create the `package.json`:

```bash
npm init -y
```

### 2. Install Development Dependencies

We use Jest to run the tests and Chai to use the same assertion style as CodeWars:

```bash
npm install --save-dev jest chai@4
```

### 3. Configure Test Scripts

In your `package.json`, make sure the test script is set to use Jest:

```json
"scripts": {
  "test": "jest"
}
```

### 4. Setup `.gitignore`

To keep the repository clean and avoid uploading heavy dependency folders, create a `.gitignore` file:

```plaintext
node_modules/
```

---

## 🧪 How to Run Tests

You can run all tests in the repository or target a specific kata.

### Run all tests
```bash
npm test
```

### Run a specific test file
```bash
npx jest unusualFive
```

### Watch Mode

Highly recommended while coding:

```bash
npx jest --watchAll
```

---

## 📂 Project Structure

```plaintext
Demo-Codewars/
├── 8kyu/                    # Beginner level katas
│   ├── unusualFive.js       # The solution
│   └── unusualFive.test.js  # The test file
├── .gitignore               # Files to ignore in Git
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

---

## 🏆 Current Highlights

### Unusual Five (8 kyu)

**Challenge:**  
Return `5` without using numbers `0–9` or operators `+ - * /`.

**Solution:**
```js
function unusualFive() {
  let word = "apple";
  return word.length;
}

module.exports = unusualFive;
```

---

Happy Coding! 💻
