# All source files from src/

> This file contains the full contents of every source file under `src/`.

---

## src/main.jsx
```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
```

## src/index.css
```css
@import "tailwindcss";

/************* GENERAL STYLES ************/

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: sans-serif;
}

body {
  padding-left: 2rem;
  padding-right: 2rem;
}

#root {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h1 {
  font-size: 8rem;
  font-weight: 900;
  color: #101828;
  text-align: center;
}

h2 {
  font-size: 2rem;
  font-weight: 900;
  color: #101828;
  text-align: center;
}

button:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}

.checkmark {
  font-size: 0.95rem;
}


ol{
  list-style: decimal;
}

/********** LANDING PAGE **************/

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #4a5565;
  padding-top: 1.5rem;
  margin-bottom: 3rem;
}

.navigation {
  display: flex;
  gap: 1rem;
}

.navigation-button {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem;
  width: 4em;
  cursor: pointer;
}

.navigation-button:hover {
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem;
  color: #101828;
  background-color: #f9fafb;
  width: 4em;
  cursor: pointer;
  border-radius: 0.5em;
}

.highlight {/*gray bubble around date and question-number*/
  background-color: #f3f4f6;
  padding: 0.5rem 1.2rem;
  border-radius: 1.5em;
  /*font-size: 1.1em;*/
}

.date {
  font-weight: 600;
  /*background-color: #f3f4f6;*/
  /*padding: 0.5rem 1.2rem;*/
  /*border-radius: 1.5em;*/
  font-size: 1.1em;
}

.hero-wrapper {
  position: relative;
  height: -webkit-fill-available;
}

.background-bubbles {
  display: flex;
  justify-content: space-around;
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  flex-direction: column;
}

.top-bubble-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 4em;
}

.middle-bubble-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8em;
}

.bottom-bubble-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 4em;
}

.top-bubble {
  background-color: #cdf9e3;
  display: flex;
  border-radius: 100%;
  min-width: 8rem;
  height: 8rem;
}

.middle-bubble {
  background-color: #fff4cc;
  width: 2rem;
  border-radius: 100%;
  min-width: 6rem;
  height: 6rem;
}

.bottom-bubble {
  background-color: #dcecff;
  width: 10rem;
  border-radius: 100%;
  min-width: 10rem;
  height: 10rem;
}

.landing-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  z-index: 1;
  height: 100%;
}

.main-title {
  font-size: clamp(3rem, 17vw, 8rem);
}

.main-text{
  max-width: 900px;
}

.start-button {
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
  border-radius: 1rem;
  background-color: #00d969;
  cursor: pointer;
  width: 14rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
}

.start-button:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
  background-color: #00c54f;
}

footer {
  display: flex;
  justify-content: space-between;
  color: #727a89;
  padding: 1rem 0;
  font-size: 0.875rem;
  margin-top: 1rem;
}


/************* Role Selection *******************/
.select-role-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title{
  font-size: clamp(2rem, 10vw, 4rem);
  font-weight: 900;
}
.role-list{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.5rem;
}
.role-option-wrapper{
  display: flex;
  align-items: center;
  border: #e6e6e6 solid 3px;
  width: 90%;
  max-width: 800px;
  min-height: 4rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
  margin: 0.4rem 0rem;
  gap: 1rem;
  padding: 1.25rem;
  border: 2px solid #d1d5dc;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
}
.role-option-wrapper--selected{
  background-color: #f0fdf4;
  display: flex;
  align-items: center;
  padding: 1.25rem;
  border: 2px solid #10b981;
  border-radius: 1rem;
  cursor: pointer;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.role-checkbox-container {
  min-width: 2rem;
  min-height: 2rem;
  border: 3px solid #d1d5dc;
  border-radius: 1rem;
}

.role-checkbox-container--selected {
  min-width: 2rem;
  min-height: 2rem;
  border: 3px solid #00c950;
  border-radius: 1.5rem;
  background-color: #00c950;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.checkbox{
  margin: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
}
.button{
  padding: 0.8rem 1.8rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  border-radius: 1rem;
  background-color: #00d969;
  cursor: pointer;
  width: 14rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
}

/***************** Popup******************/
.popup{
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.popup .popuptext{
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
}

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.popup.show .popuptext {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s
}

@-webkit-keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}


/******************* QUESTIONS *******************/

.question-main {
  display: flex;
  align-items: center;
  flex-direction: column;
  /*height: -webkit-fill-available;*/
}

.question-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;
}

.question-number {
  font-weight: 700;
  background-color: #f3f4f6;

  border-radius: 1.5em;
  font-size: 1.25em;
  color: #364153;
}

.question-and-answer-wrapper {
  width: 100%;
  color: #263140;
}

.display-question {
  background-color: #eff6ff;
  border: #bedbff 2px solid;
  border-radius: 1.5rem;
  text-align: center;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.answer-wrapper {
  /*display: flex;
  flex-direction: column;*/
  margin-bottom: 1.5rem;
}

.answer-bubble {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  border: 2px solid #d1d5dc;
  border-radius: 1rem;
  cursor: pointer;
  margin-bottom: 0.75rem;
  gap: 1rem;
  font-size: 1.125rem;

}

.answer-bubble-active {   /* after an answer is selected */
  background-color: #f0fdf4;
  display: flex;
  align-items: center;
  padding: 1.25rem;
  border: 2px solid #10b981;
  border-radius: 1rem;
  cursor: pointer;
  margin-bottom: 0.75rem;
  gap: 1rem;
  font-size: 1.125rem;
}

.checkbox-container {
  min-width: 2rem;
  min-height: 2rem;
  border: 3px solid #d1d5dc;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.answer-bubble-active .checkbox-container{   /* after an answer is selected */
  background-color: #10b981;
  border-color: #10b981;
  cursor: pointer;
}

.checkbox-container-active { /* after an answer is selected */
  min-width: 2rem;
  min-height: 2rem;
  border: 3px solid #00c950;
  border-radius: 0.25rem;
  background-color: #00c950;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.answer-text-wrapper {
  display: flex;
  align-items: center;
}

.answer-bubble p {
  /*font-size: 1.125rem;*/
}

.question-letter{
  margin-right: 0.5rem;
  font-size: 1.25rem;
  font-weight: 800;
}

.question-navigation {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.next, .previous {
  cursor: pointer;
  font-size: 1.125rem;

}

.next {
  padding: 0.75rem 2rem;
  font-weight: 700;
  color: white;
  border-radius: 1rem;
  background-color: #00d969;
  cursor: pointer;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);
}

.previous {
  padding: 0.75rem 2rem;
  font-weight: 700;
  color: #364153;
  border-radius: 1rem;
  background-color: #f3f4f6;
  cursor: pointer;
}


/**************** SUMMARY **********************/
.summary-main {
  display: flex;
  align-items: center;
  justify-content: center;
}

.result-container {
  height: -webkit-fill-available;
  max-width: 48rem;
  width: 100%
}

.medium-title {
  color: #101828;
  font-weight: 800;
  font-size: 3rem;
  margin-bottom: 3rem;

}

.summary-container {
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 3rem;
  background: linear-gradient(180deg, rgb(173, 246, 167) 0%, rgb(219, 234, 254) 100%);
  border: 2px solid #b9f8cf;
}

.score-explanation {
  text-align: center;
}

.retry {
  /*font-family: 1.875rem; */
}

.attempt-number {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 3rem;
}

.attempt-icon, .active-attempt-icon {
  min-width: 1.25rem;
  min-height: 1.25rem;
  border-radius: 100%;
}

.attempt-icon {
  background-color: #d1d5dc;
}

.active-attempt-icon {
  background-color: #00d969;
}

.ending-message {
  margin-top: 1.5rem;
  text-align: center;
  color: #364153;
  font-weight: 700;
  font-size: 1.25rem;
}
```

## src/flashcards.js
```javascript
const questions = {
  "scrum-product-owner":{
    "role": "Scrum Product Owner",
    "focus": "Backlog management, maximizing value, stakeholder management (Aligns with CSPO)",
    "flashcards": [
      {
        "id": 1,
        "question": "You have a long list of features stakeholders want, but the team can only finish three this sprint. How do you decide which ones to build?",
        "options": {
          "A": "Ask the Lead Developer which ones are the easiest to code.",
          "B": "Choose the features that deliver the highest value to the customer right now.",
          "C": "Pick the features requested by the most senior manager.",
          "D": "Randomly select three to keep it fair."
        },
        "answer": "B",
        "rationale": "The Product Owner's main responsibility is to maximize the value of the product. You prioritize based on business value and user needs, not just ease or authority."
      },
      {
        "id": 2,
        "question": "A developer asks you to clarify a requirement for a user story during the Sprint. What is the best immediate action?",
        "options": {
          "A": "Tell them to wait until the next Sprint Planning meeting.",
          "B": "Write a formal document and email it to the whole company.",
          "C": "Collaborate with them immediately to clarify the acceptance criteria.",
          "D": "Ask the Scrum Master to answer the question."
        },
        "answer": "C",
        "rationale": "Agile emphasizes collaboration. The PO should be available to clarify details so the team is not blocked."
      },
      {
        "id": 3,
        "question": "What is the primary purpose of the Product Backlog?",
        "options": {
          "A": "To track every hour the developers work.",
          "B": "To serve as a fixed contract that cannot be changed.",
          "C": "To be a dynamic list of everything that might be needed in the product.",
          "D": "To record the minutes of the Daily Scrum."
        },
        "answer": "C",
        "rationale": "The backlog is a living document. It contains all desired work but is constantly updated (refined) as new information is learned."
      },
      {
        "id": 4,
        "question": "\"Acceptance Criteria\" are important because they:",
        "options": {
          "A": "Tell the developers exactly how to write the code (e.g., which variable names to use).",
          "B": "Define the specific conditions that must be met for a user story to be considered complete.",
          "C": "Allow the Scrum Master to punish the team if they fail.",
          "D": "List the names of the stakeholders who requested the feature."
        },
        "answer": "B",
        "rationale": "Acceptance criteria provide the \"definition of done\" for a specific item, ensuring everyone agrees on what the final output should look like."
      },
      {
        "id": 5,
        "question": "If the Development Team says they cannot finish all the work selected for the Sprint, who decides which items to remove?",
        "options": {
          "A": "The Scrum Master.",
          "B": "The Product Owner, in consultation with the Development Team.",
          "C": "The CEO.",
          "D": "No one; the team must work overtime to finish everything."
        },
        "answer": "B",
        "rationale": "The Developers know how much they can do, but the Product Owner decides what is most important. They work together to adjust the scope while protecting the Sprint Goal."
      }
    ]
  },
  "scrum-master" :{
    "role": "Scrum Master",
    "focus": "Servant leadership, coaching, removing impediments (Aligns with CSM)",
    "flashcards": [
      {
        "id": 6,
        "question": "During the Daily Scrum (Stand-up), two developers start a long technical debate that is dragging the meeting out. What should you do?",
        "options": {
          "A": "Let them finish; it’s important they solve it now.",
          "B": "Suggest they continue the discussion after the meeting so the rest of the team can get back to work.",
          "C": "Tell them to stop talking and move on to the next person without solving the issue.",
          "D": "Cancel the rest of the meeting."
        },
        "answer": "B",
        "rationale": "The Daily Scrum is for synchronization, not deep problem solving. A Scrum Master ensures the meeting stays within the 15-minute timebox."
      },
      {
        "id": 7,
        "question": "What is the main accountability of a Scrum Master regarding the team’s impediments (blockers)?",
        "options": {
          "A": "To write the code to fix the blocker.",
          "B": "To complain to management about the team.",
          "C": "To cause the removal of impediments that the team cannot resolve themselves.",
          "D": "To ignore them and hope the team figures it out."
        },
        "answer": "C",
        "rationale": "The Scrum Master is a servant-leader whose job is to clear the path for the team so they can focus on their work."
      },
      {
        "id": 8, 
        "question": "Who is responsible for hiring and firing members of the Scrum Team?",
        "options": {
          "A": "The Scrum Master.",
          "B": "The Product Owner.",
          "C": "The Scrum Team manages itself, but hiring/firing is typically an external management function, not a Scrum Master responsibility.", 
          "D": "The Senior Developer." 
        }, 
        "answer": "C",
        "rationale": "A Scrum Master is a coach, not a manager or boss. They do not typically have hiring/firing power." 
      },
      {
        "id": 9,
        "question": "A stakeholder walks into the team room and asks a developer to work on a \"super urgent\" task that is not in the Sprint Backlog. What should the Scrum Master do?",
        "options": {
          "A": "Tell the developer to stop their current work and do the urgent task.",
          "B": "Intervene and explain that new requests must go through the Product Owner to protect the team's focus.",
          "C": "Add the task to the Sprint Backlog immediately.",
          "D": "Do the task themselves."
        },
        "answer": "B", 
        "rationale": "The Scrum Master protects the team from outside interference. All work should be prioritized by the Product Owner." 
      },
      {
        "id": 10,
        "question": "Which Scrum event is primarily designed for the team to inspect their own processes and improve how they work together?",
        "options": {
          "A": "Sprint Planning.",
          "B": "Daily Scrum.",
          "C": "Sprint Review.",
          "D": "Sprint Retrospective."
        },
        "answer": "D", 
        "rationale": "The Retrospective is the \"improvement meeting\" where the team discusses what went well, what didn't, and how to work better next time."
      }
    ]
  },
  "ui-ux-designer": {
    "role": "UI/UX Designer",
    "focus": "Accessibility, Responsiveness, Design Thinking (No code)",
    "flashcards": [      
      {
        "id": 11,
        "question": "When designing a form, why is it important to have high contrast between the text color and the background color?",
        "options": {
          "A": "It makes the design look more expensive.",
          "B": "It ensures users with visual impairments can read the text easily.",
          "C": "It allows the form to load faster.",
          "D": "It helps the developers write better CSS."
        },
        "answer": "B",
        "rationale": "Contrast is a key Accessibility (A11y) concept. If text doesn't stand out from the background, many people cannot read it."
      },
      {
        "id": 12,
        "question": "What does \"Responsive Design\" mean?",
        "options": {
          "A": "The website responds quickly when you click a button.",
          "B": "The design automatically adjusts its layout to look good on phone, tablet, and desktop screens.",
          "C": "The designer responds to emails within 24 hours.",
          "D": "The colors change based on the time of day."
        },
        "answer": "B",
        "rationale": "Responsive design ensures a usable experience across all device sizes, which is standard for modern web design."
      },
      {
        "id": 13,
        "question": "You are designing a button. Why might you use a \"Wireframe\" before creating the final colorful version?",
        "options": {
          "A": "To figure out the layout and structure without getting distracted by colors and details.",
          "B": "Because wireframes are cheaper to sell to clients.",
          "C": "To test if the code works.",
          "D": "To pick the best font family."
        },
        "answer": "A",
        "rationale": "Wireframing is a low-fidelity step to validate the \"skeleton\" of the page and user flow before investing time in visual polish."
      },
      {
        "id": 14,   
        "question": "A user tells you, \"I can't find the 'Checkout' button.\" What is the best design solution?",  
        "options": {  
          "A": "Make the button bigger and use a more distinct color to improve visual hierarchy.",
          "B": "Add a pop-up that says \"Click here to buy.\"",
          "C": "Train the user on how to use the website.",
          "D": "Leave it as is; they will find it eventually."
        },
        "answer": "A",
        "rationale": "If a user can't find a primary action, it is a UI failure. Visual hierarchy (size, color, placement) guides the user's eye to the most important elements." 
      },
      {
        "id": 15,
        "question": "What is the purpose of \"Alt Text\" on images in your design specs?",
        "options": {
          "A": "To hide secret messages.",
          "B": "To describe the image for users using screen readers (blind or low-vision users).",
          "C": "To make the image file size smaller.",
          "D": "To label the image for the marketing team."
        },
        "answer": "B",
        "rationale": "Alt text is crucial for accessibility. It allows software to \"read\" the image to users who cannot see it."
      }
    ]
  },
  "web-developer": {
    "role": "Web Developer",
    "focus": "Web fundamentals + Data Structures & Algorithms (DSA)",
    "flashcards": [      
      {
        "id": 16,
        "question": "You need to look up a customer's order using their unique Order ID. Which data structure would likely be the fastest for this lookup?",
        "options": {
          "A": "An Array (List)",
          "B": "A Linked List",
          "C": "A Hash Map (or Object/Dictionary)",
          "D": "A Stack"
        },
        "answer": "C",
        "rationale": "A Hash Map allows for \"Key-Value\" lookups. Searching for a unique ID (Key) in a Hash Map is generally instantaneous (O(1) time complexity)."
      },
      {
        "id": 17,
        "question": "What is the difference between == and === in JavaScript?",
        "options": {
          "A": "They are exactly the same.",
          "B": "== checks for equality but allows type conversion (e.g., \"5\" equals 5), while === checks for strict equality (type must match).",
          "C": "=== is used for math, == is used for text.",
          "D": "== is a typo; only === is valid."
        },
        "answer": "B",
        "rationale": "This is a classic interview question. == performs type coercion (making it \"loose\"), whereas === is \"strict\" and safer to use to avoid bugs."
      },
      {
        "id": 18,
        "question": "Which HTML tag is used to create the largest heading on a page?",
        "options": {
          "A": "<head>",
          "B": "<h6>",
          "C": "<h1>",
          "D": "<header>"
        },
        "answer": "C",
        "rationale": "<h1> represents the main heading. <h6> is the smallest heading. <head> is for metadata, not visible text."
      },
      {
        "id": 19,
        "question": "In an algorithm, if you have a loop inside another loop (nested loops) that both iterate through a list of size N, what is the Time Complexity?",
        "options": {
          "A": "O(1) - Constant Time",
          "B": "O(N) - Linear Time",
          "C": "O(N^2) - Quadratic Time",
          "D": "O(log N) - Logarithmic Time"
        },
        "answer": "C",
        "rationale": "For every item in the first loop, you run the second loop N times. N * N = N^2. This is often considered slow for large datasets."
      },
      {
        "id": 20,
        "question": "You want to center a div both horizontally and vertically using CSS Flexbox. Which properties do you need on the parent container?",
        "options": {
          "A": "display: block; text-align: center;",
          "B": "display: flex; justify-content: center; align-items: center;",
          "C": "float: center; margin: auto;",
          "D": "position: absolute; left: 50%;"
        },
        "answer": "B",
        "rationale": "Flexbox is the modern standard for layout. justify-content handles the main axis (horizontal usually), and align-items handles the cross axis (vertical)."
      }
    ]
  },
  "python-developer": {
    "role": "Python Developer",
    "focus": "Python syntax + Data Structures & Algorithms (DSA)",
    "flashcards": [      
      {
        "id": 21,
        "question": "Which Python data structure is \"immutable\" (meaning it cannot be changed after it is created)?",
        "options": {
          "A": "List [1, 2]",
          "B": "Dictionary {'a': 1}",
          "C": "Tuple (1, 2)",
          "D": "Set {1, 2}"
        },
        "answer": "C",
        "rationale": "Tuples are immutable lists. Once defined, you cannot add, remove, or change items. This makes them faster and safer for fixed data."
      },
      {
        "id": 22,
        "question": "You have a list of 1,000 numbers and you need to sort them from smallest to largest. What is the average time complexity of Python's built-in sort() function?",
        "options": {
          "A": "O(N)",
          "B": "O(N log N)",
          "C": "O(N^2)",
          "D": "O(1)"
        },
        "answer": "B",
        "rationale": "Python uses \"Timsort,\" which is a very efficient sorting algorithm with an average complexity of O(N log N). This is much faster than O(N^2) bubble sort."
      },
      {
        "id": 23,
        "question": "What does the keyword def do in Python?",
        "options": {
          "A": "It defines a variable.",
          "B": "It defines a function.",
          "C": "It deletes a file.",
          "D": "It downloads a library."
        },
        "answer": "B",
        "rationale": "def function_name(): is the syntax used to create a reusable block of code called a function."
      },
      {
        "id": 24,
        "question": "You are writing a program to detect if a specific word exists in a large book. Which data structure is best to store the words of the book for fast searching?",
        "options": {
          "A": "A List",
          "B": "A Set",
          "C": "A Tuple",
          "D": "A String"
        },
        "answer": "B",
        "rationale": "Checking if an item exists in a Set is very fast (O(1) on average) because it uses hashing. Checking a List requires looking at every item one by one (O(N))."
      },
      {
        "id": 25,
        "question": "What is the purpose of a \"Virtual Environment\" (venv) in Python development?",
        "options": {
          "A": "To simulate a video game.",
          "B": "To run Python on a different computer.",
          "C": "To isolate the dependencies (libraries) for a specific project so they don't conflict with other projects.",
          "D": "To make the code run faster."
        },
        "answer": "C",
        "rationale": "Virtual environments are critical professional practice. They ensure that Project A can use version 1.0 of a library while Project B uses version 2.0 without breaking each other."
      }      
    ]
  }
}


export default questions;
```

## src/pages/Summary.jsx
```jsx
import React from 'react'
import {Link} from 'react-router-dom'

const Summary = () => {
  return (
    <div className='summary-main'>
      <div className='result-container'>
        <p className='medium-title'>Results</p>

        <div className="summary-container">
          <div className="score-explanation medium-title">You answered 1/3
          correctly!</div>

          <button className='button retry'>Try again?</button>

          <div className="attempt-number">
            <div className="active-attempt-icon"></div>
            <div className="attempt-icon"></div>
            <div className="attempt-icon"></div>
          </div>

          <p className='ending-message'>Keep practicing!</p>
        </div>
      </div>
    </div>
  )
}

export default Summary
```

## src/pages/Roles.jsx
```jsx
import React, { useState } from "react";
import RoleCheckbox from "../components/roleSelection/roleCheckbox";
import {Link} from 'react-router-dom'
import PopUp from "../components/Popup";

const RoleSelection = () => {
    const roles = [{label: "Scrum Master", value: "scrum-master"}, {label: "Scrum Product Owner", value: "scrum-product-owner"}, {label: "UI UX Designer", value: "ui-ux-designer"}, {label: "Web Developer", value: "web-developer"}, {label: "Python Developer", value: "python-developer"}]

    const [selectedOption, setSelectedOption] = useState(null)
    const handleSelection = (value) =>{
// This is a shorter way. 
            setSelectedOption(prev => prev === value ? null : value);

    }

    const validateRole = () => {
        console.log("MIasad");
        if(!selectedOption){
            
            let popup = document.getElementById('popup')
            popup.classList.add("show")
        }
    }

    return (
    <>
        <div className="select-role-wrapper">
            <h2 className="title">
                Select a Role
            </h2>
            <div className="role-list">
                {
                    roles.map(
                        role => <RoleCheckbox selected={role.value===selectedOption} key={role.value} option={role.label} handleSelection={()=>handleSelection(role.value)}/>
                    )
                }
            </div>
            <PopUp message={"Please select a Role before continuing"}/>
            <Link onClick={validateRole} to={selectedOption ? `/questions/${selectedOption}`: ""}><button className="button" >Continue</button></Link>
        </div>
    </>
    )
}

export default RoleSelection
```

## src/pages/Questions.jsx
```jsx
import React, { useEffect, useState } from 'react'
import Checkmark from '../components/checkmark'
import Answerbubble from '../components/question-page/answer-bubble'
import { useParams } from 'react-router-dom'
import questions from '../flashcards'

const Questions = () => {
    
  const {role} = useParams();
  
  const roleData = questions[role]
  const flashcards = roleData ? roleData.flashcards : [];

  const [currentSelection, setCurrentSelection] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [savedAnswers, setSavedAnswers] = useState(new Array(flashcards.length).fill(null));

    if (!flashcards || flashcards.length === 0) {
    return (
      <div className="question-main">
        <h2>No questions available for this role.</h2>
      </div>
    );
  }
  const currentCard = flashcards[currentQuestion];

  useEffect(() => {
  setSavedAnswers(new Array(flashcards.length).fill(null));
  setCurrentQuestion(0);
  setCurrentSelection(null);
}, [role]);



  const goToQuestion = (index) => {
    if(index >= 0 && index < flashcards.length ){
      saveAnswer()
      setCurrentQuestion(index)
      console.log(savedAnswers);
      setCurrentSelection(savedAnswers[index])
      console.log(currentSelection);
      
    }
  }

  const saveAnswer = () => {
    if(currentSelection){
      const currentAnswers = [...savedAnswers]
      currentAnswers[currentQuestion] = currentSelection
      setSavedAnswers(currentAnswers)
    }
  }

  const handleSelection = selected => {
    if(selected == currentSelection){
      setCurrentSelection()
    }else{
      setCurrentSelection(selected)
    }
  }

    const formattedRole = role?.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <>
      <div className="question-main">
        <div className="question-title">
          <h2 className="question-title-h2"> {formattedRole} Questions</h2>
          <div className="question-number highlight">{`${currentQuestion + 1} / ${flashcards.length}`}</div>
        </div>

        <div className="question-and-answer-wrapper">
          <div className="display-question">
            {currentCard?.question || "No question available"}
          </div>
          <div className="answer-wrapper">
            {currentCard?.options &&
              Object.entries(currentCard.options).map(([key, value]) => (
                <Answerbubble
                  key={key}
                  letter={key}
                  answer={value}
                  selected= {key === currentSelection}
                  selectorHandler={handleSelection}
                />
              ))}
          </div>
        </div>

        <div className="question-navigation">
          <button onClick={() => {goToQuestion(currentQuestion-1)}} className="previous">Previous</button>
          <button onClick={() => {goToQuestion(currentQuestion+1)}} className="next">Next</button>
        </div>
      </div>
    </>
  );
};

export default Questions;
```

## src/pages/Home.jsx
```jsx
import React from "react";
import BubbleBackground1 from "../backgrounds/bubblebackground-1";
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div className="hero-wrapper">
            <BubbleBackground1 />
            <div className="landing-hero">
                <h1 className="main-title">Interview Test</h1>
                <h2>
                    Practice for your Interview, One Flashcard at a Time
                </h2>
                <p className="main-text">
                    Welcome to Interview Prep Pro — questions for mastering role-specific interview questions. Whether you're aiming to become a Scrum Product Owner, Scrum Master, UI/UX Designer, Web Developer, or Python Developer, we will help you.
                </p>
                <h2>
                    How It Works
                </h2>
                <ol>
                    <li>Choose Your Role – Pick the position you're preparing for.</li>
                    <li>Answer Questions – You'll be shown questions related to  your role</li>
                    <li>Error Limit – If you miss a question, you’ll have up to three tries to get it right.</li>
                    <li>Track Your Progress – At the end a summary of how well you did will be shown to you</li>
                </ol>
                <h2>Ready to begin?</h2>
                <Link to="/roles"><button className="start-button">Start</button></Link>
            </div>
        </div>
        </>
    )
}

export default Home
```

## src/App.jsx
```jsx
import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-dom'
import RoleSelection from "./pages/Roles";
import Questions from "./pages/Questions";
import Summary from "./pages/Summary";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/roles" element={<RoleSelection/>}/>
        <Route path="/questions" element={<Questions/>}/>
        <Route path="/questions/:role" element={<Questions/>}/>
        <Route path="/summary" element={<Summary/>}/>        
      </Routes>

      <Footer />
      

    </>
  );
};

export default App;
```

## src/backgrounds/bubblebackground-1.jsx
```jsx
import React from "react";

const BubbleBackground1 = () => {
    return (
        <>
            <div className="background-bubbles">
            <div className="top-bubble-wrapper">
                <div className="top-bubble"></div>
            </div>
            <div className="middle-bubble-wrapper">
                <div className="middle-bubble"></div>
            </div>
            <div className="bottom-bubble-wrapper">
                <div className="bottom-bubble"></div>
            </div>
            </div>
        </>
    )
}
export default BubbleBackground1
```

## src/components/roleSelection/roleCheckbox.jsx
```jsx
import React from "react";
import Checkmark from "../checkmark";

const RoleCheckbox = ({handleSelection, option, selected}) => {
    return (
        <>
            <div onClick=
            {e => handleSelection(option)} 
            className={`role-option-wrapper ${selected? "role-option-wrapper--selected" : ""}`} >
                <div className={`role-checkbox-container ${selected? "role-checkbox-container--selected" : ""}`}>
                    {
                        (selected) ? <Checkmark /> : <></>
                    }
                </div>
                {option}
            </div>
        </>
    )
}

export default RoleCheckbox
```

## src/components/question-page/answer-bubble.jsx
```jsx
import React from 'react'
import Checkmark from '../checkmark'


const Answerbubble = ({letter, answer, selected, selectorHandler}) => {
    return (
        <>
            <div onClick={e => {
                selectorHandler(letter)
            }} className={`answer-bubble ${selected ? 'answer-bubble-active' : ''}`}>
                <div className="checkbox-container">
                    {
                        (selected)? <Checkmark></Checkmark> : <></>
                    }
                </div>
                <div className="answer-text-wrapper">
                <h3 className="question-letter">{letter}</h3>
                <p>{answer}</p>
                </div>
            </div>
        </>
    )
}

export default Answerbubble
```

## src/components/Popup.jsx
```jsx
import React from "react";

const PopUp = ({message}) => {
    return (
        <>
        <div id="popup" className="popup" onClick={
            () => {
                let popup = document.getElementById('popup')
                popup.classList.toggle("show")
            }
        }>
            <span className="popuptext">
                {message}
            </span>
        </div>
        </>
    )
} 

export default PopUp
```

## src/components/Header.jsx
```jsx
import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    
    function todaysDate() {
        const today = new Date();

        return <p>{today.toDateString()}</p>;
    }
  return (
    <header>
        <div className="navigation">
          <Link to="/"><button className="navigation-button">Home</button></Link>
          <Link to="/roles"><button className="navigation-button">Role</button></Link>
        </div>
        <div className="date highlight">{todaysDate()}</div>
      </header>
  )
}

export default Header
```

## src/components/Footer.jsx
```jsx
import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div>Made by: Valerie, Sebastian, and Timileyin</div>
        <a href="https://github.com/chingu-voyages/V59-tier1-team-03">Github</a>
      </footer>
  )
}

export default Footer
```

## src/components/checkmark.jsx
```jsx
import { FaCheck } from "react-icons/fa";

export default function Checkmark() {
  return (
    <div className="checkmark">
      <FaCheck />
    </div>
  );
}
```

---

Generated on 2026-02-15.
