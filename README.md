# Lab: Password Input

## 📌 Project Overview

This project demonstrates **event handling in React** by creating a password input field and a submit button that track user interactions. The goal is to log typing behavior and mouse movements to support future **anti-bot security measures**.

The application tracks:

* When a user types into a password field
* When the mouse enters the submit button
* When the mouse leaves the submit button

All interactions are logged to the browser console.

---

## 🧩 Component Structure

```
App
 ├── PasswordInput
 └── SubmitButton
```

### Components

* **App.jsx**

  * Root component
  * Renders `PasswordInput` and `SubmitButton`

* **PasswordInput.jsx**

  * Renders a password input field
  * Listens for typing using the `onChange` event
  * Logs a message when the user types

* **SubmitButton.jsx**

  * Renders a submit button
  * Detects mouse enter and mouse leave events
  * Logs messages for both interactions

---

## ⚙️ Technologies Used

* React
* JavaScript (ES6)
* Vite (development server)
* Jest & React Testing Library (for testing)

---

## ▶️ How to Run the Project

1. Clone the repository:

   git clone <your-repo-url>
   ```

2. Navigate into the project folder:

   cd password-input-lab
   ```

3. Install dependencies:

   npm install
   ```

4. Start the development server:

   npm run dev
   ```

5. Open your browser and visit:

   ```
   http://localhost:5173
   ```

---

## 🧪 Testing

This project supports testing with **Jest** and **React Testing Library**.

### What is tested:

* Input renders correctly
* Input type is `password`
* Typing triggers console output
* Button renders with correct text
* Mouse enter and leave events trigger console logs

Example events tested:

* `onChange`
* `onMouseEnter`
* `onMouseLeave`

---

## 📝 Notes

* Console logging is intentionally used to allow future security engineers to integrate advanced anti-bot logic.
* The project follows React best practices for event handling and component separation.

---

## ✅ Learning Outcomes Achieved

* Implemented React event handlers
* Used controlled user interactions
* Structured a simple React component tree
* Prepared codebase for testing and maintainability

---


