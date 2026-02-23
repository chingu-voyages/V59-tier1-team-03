const questions = {
  "scrum-product-owner": {
    role: "Scrum Product Owner",
    focus:
      "Backlog management, maximizing value, stakeholder management (Aligns with CSPO)",
    flashcards: [
      {
        id: 1,
        question:
          "You have a long list of features stakeholders want, but the team can only finish three this sprint. How do you decide which ones to build?",
        options: {
          A: "Ask the Lead Developer which ones are the easiest to code.",
          B: "Choose the features that deliver the highest value to the customer right now.",
          C: "Pick the features requested by the most senior manager.",
          D: "Randomly select three to keep it fair.",
        },
        answer: "B",
        rationale:
          "The Product Owner's main responsibility is to maximize the value of the product. You prioritize based on business value and user needs, not just ease or authority.",
      },
      {
        id: 2,
        question:
          "A developer asks you to clarify a requirement for a user story during the Sprint. What is the best immediate action?",
        options: {
          A: "Tell them to wait until the next Sprint Planning meeting.",
          B: "Write a formal document and email it to the whole company.",
          C: "Collaborate with them immediately to clarify the acceptance criteria.",
          D: "Ask the Scrum Master to answer the question.",
        },
        answer: "C",
        rationale:
          "Agile emphasizes collaboration. The PO should be available to clarify details so the team is not blocked.",
      },
      {
        id: 3,
        question: "What is the primary purpose of the Product Backlog?",
        options: {
          A: "To track every hour the developers work.",
          B: "To serve as a fixed contract that cannot be changed.",
          C: "To be a dynamic list of everything that might be needed in the product.",
          D: "To record the minutes of the Daily Scrum.",
        },
        answer: "C",
        rationale:
          "The backlog is a living document. It contains all desired work but is constantly updated (refined) as new information is learned.",
      },
      {
        id: 4,
        question: '"Acceptance Criteria" are important because they:',
        options: {
          A: "Tell the developers exactly how to write the code (e.g., which variable names to use).",
          B: "Define the specific conditions that must be met for a user story to be considered complete.",
          C: "Allow the Scrum Master to punish the team if they fail.",
          D: "List the names of the stakeholders who requested the feature.",
        },
        answer: "B",
        rationale:
          'Acceptance criteria provide the "definition of done" for a specific item, ensuring everyone agrees on what the final output should look like.',
      },
      {
        id: 5,
        question:
          "If the Development Team says they cannot finish all the work selected for the Sprint, who decides which items to remove?",
        options: {
          A: "The Scrum Master.",
          B: "The Product Owner, in consultation with the Development Team.",
          C: "The CEO.",
          D: "No one; the team must work overtime to finish everything.",
        },
        answer: "B",
        rationale:
          "The Developers know how much they can do, but the Product Owner decides what is most important. They work together to adjust the scope while protecting the Sprint Goal.",
      },
      {
        id: 6,
        question:
          "During Sprint execution, you discover a better way to solve a problem that improves product value. What should you do?",
        options: {
          A: "Wait until the next Sprint Review before mentioning it.",
          B: "Immediately update and refine the Product Backlog if needed.",
          C: "Tell developers to ignore it since Sprint work is fixed.",
          D: "Ask the Scrum Master to decide.",
        },
        answer: "B",
        rationale:
          "The Product Backlog is dynamic. New insights can be added through backlog refinement.",
      },
      {
        id: 7,
        question: "What is the main purpose of backlog refinement (grooming)?",
        options: {
          A: "To remove all items from the backlog.",
          B: "To ensure backlog items are well understood, prioritized, and ready for future sprints.",
          C: "To assign developers to tasks.",
          D: "To rewrite the Scrum Guide.",
        },
        answer: "B",
        rationale:
          "Refinement helps improve clarity, estimation accuracy, and priority ordering.",
      },
      {
        id: 8,
        question: "Which statement best describes a good Product Owner?",
        options: {
          A: "Focuses only on technical implementation details.",
          B: "Maximizes product value by balancing stakeholder needs and user experience.",
          C: "Acts as team manager and controls developers.",
          D: "Avoids communication with stakeholders.",
        },
        answer: "B",
        rationale:
          "The Product Owner represents business value while collaborating with the team.",
      },
      {
        id: 9,
        question:
          "If stakeholders frequently request new features mid-Sprint, what is the Product Owner’s best response?",
        options: {
          A: "Immediately add them to the Sprint Backlog.",
          B: "Evaluate and prioritize them for future Sprint planning.",
          C: "Ask developers to multitask.",
          D: "Ignore stakeholders.",
        },
        answer: "B",
        rationale:
          "Sprint scope should remain stable during execution unless there is a critical emergency.",
      },
      {
        id: 10,
        question: "What is the purpose of Sprint Review?",
        options: {
          A: "To punish developers for unfinished work.",
          B: "To inspect product increment and gather stakeholder feedback.",
          C: "To assign tasks for next Sprint.",
          D: "To rewrite requirements.",
        },
        answer: "B",
        rationale:
          "Sprint Review is a feedback event focused on product progress.",
      },
      {
        id: 11,
        question: "Who owns the Product Backlog?",
        options: {
          A: "Scrum Master.",
          B: "Product Owner.",
          C: "Development Team Lead.",
          D: "CEO.",
        },
        answer: "B",
        rationale: "The Product Owner is accountable for backlog management.",
      },
      {
        id: 12,
        question:
          "What should the Product Owner do if two stakeholders have conflicting feature requests?",
        options: {
          A: "Choose the request from the loudest stakeholder.",
          B: "Prioritize based on product value and strategy.",
          C: "Implement both immediately.",
          D: "Ask developers to decide.",
        },
        answer: "B",
        rationale:
          "Product decisions should align with product vision and value.",
      },
      {
        id: 13,
        question: "What is a user story mainly used for?",
        options: {
          A: "Writing code documentation.",
          B: "Describing product functionality from the user perspective.",
          C: "Tracking developer hours.",
          D: "Storing system logs.",
        },
        answer: "B",
        rationale:
          "User stories help capture requirements in a user-centered format.",
      },
      {
        id: 14,
        question: "What is backlog prioritization mainly based on?",
        options: {
          A: "Developer preference.",
          B: "Business value, risk, and urgency.",
          C: "Alphabetical order.",
          D: "Task size only.",
        },
        answer: "B",
        rationale:
          "Effective prioritization balances value delivery and risk reduction.",
      },
      {
        id: 15,
        question: "What is Minimum Viable Product (MVP)?",
        options: {
          A: "The cheapest product possible.",
          B: "A product with just enough features to validate the idea.",
          C: "The final version of the product.",
          D: "A prototype that cannot be released.",
        },
        answer: "B",
        rationale:
          "MVP helps test assumptions quickly before full development.",
      },
      {
        id: 16,
        question: "What should a Product Owner focus on most?",
        options: {
          A: "Maximizing product value.",
          B: "Writing code.",
          C: "Managing developer salaries.",
          D: "Running daily meetings.",
        },
        answer: "A",
        rationale: "Value delivery is the core Product Owner responsibility.",
      },
      {
        id: 17,
        question:
          "What does 'Refactoring' mean in product development context?",
        options: {
          A: "Changing product color scheme.",
          B: "Improving internal structure without changing external behavior.",
          C: "Removing features randomly.",
          D: "Rewriting requirements.",
        },
        answer: "B",
        rationale:
          "Refactoring improves quality while preserving functionality.",
      },
      {
        id: 18,
        question: "When is it acceptable to change Sprint goals?",
        options: {
          A: "Whenever stakeholders request it.",
          B: "Only under exceptional circumstances with team agreement.",
          C: "Every day.",
          D: "Never.",
        },
        answer: "B",
        rationale:
          "Sprint goals are normally stable but may change in critical situations.",
      },
    ],
  },
  "scrum-master": {
    role: "Scrum Master",
    focus:
      "Servant leadership, coaching, removing impediments (Aligns with CSM)",
    flashcards: [
      {
        id: 19,
        question:
          "During the Daily Scrum (Stand-up), two developers start a long technical debate that is dragging the meeting out. What should you do?",
        options: {
          A: "Let them finish; it’s important they solve it now.",
          B: "Suggest they continue the discussion after the meeting so the rest of the team can get back to work.",
          C: "Tell them to stop talking and move on to the next person without solving the issue.",
          D: "Cancel the rest of the meeting.",
        },
        answer: "B",
        rationale:
          "The Daily Scrum is for synchronization, not deep problem solving. A Scrum Master ensures the meeting stays within the 15-minute timebox.",
      },
      {
        id: 20,
        question:
          "What is the main accountability of a Scrum Master regarding the team’s impediments (blockers)?",
        options: {
          A: "To write the code to fix the blocker.",
          B: "To complain to management about the team.",
          C: "To cause the removal of impediments that the team cannot resolve themselves.",
          D: "To ignore them and hope the team figures it out.",
        },
        answer: "C",
        rationale:
          "The Scrum Master is a servant-leader whose job is to clear the path for the team so they can focus on their work.",
      },
      {
        id: 21,
        question:
          "Who is responsible for hiring and firing members of the Scrum Team?",
        options: {
          A: "The Scrum Master.",
          B: "The Product Owner.",
          C: "The Scrum Team manages itself, but hiring/firing is typically an external management function, not a Scrum Master responsibility.",
          D: "The Senior Developer.",
        },
        answer: "C",
        rationale:
          "A Scrum Master is a coach, not a manager or boss. They do not typically have hiring/firing power.",
      },
      {
        id: 22,
        question:
          'A stakeholder walks into the team room and asks a developer to work on a "super urgent" task that is not in the Sprint Backlog. What should the Scrum Master do?',
        options: {
          A: "Tell the developer to stop their current work and do the urgent task.",
          B: "Intervene and explain that new requests must go through the Product Owner to protect the team's focus.",
          C: "Add the task to the Sprint Backlog immediately.",
          D: "Do the task themselves.",
        },
        answer: "B",
        rationale:
          "The Scrum Master protects the team from outside interference. All work should be prioritized by the Product Owner.",
      },
      {
        id: 23,
        question:
          "Which Scrum event is primarily designed for the team to inspect their own processes and improve how they work together?",
        options: {
          A: "Sprint Planning.",
          B: "Daily Scrum.",
          C: "Sprint Review.",
          D: "Sprint Retrospective.",
        },
        answer: "D",
        rationale:
          'The Retrospective is the "improvement meeting" where the team discusses what went well, what didn\'t, and how to work better next time.',
      },
      {
        id: 24,
        question:
          "What should a Scrum Master do if the team consistently fails to meet Sprint goals?",
        options: {
          A: "Force the team to work overtime.",
          B: "Investigate process problems and coach the team to improve.",
          C: "Replace underperforming developers immediately.",
          D: "Ignore the issue.",
        },
        answer: "B",
        rationale:
          "Scrum Masters help improve team effectiveness rather than punish individuals.",
      },
      {
        id: 25,
        question:
          "The Development Team feels overwhelmed by Sprint workload. What is the Scrum Master’s best action?",
        options: {
          A: "Tell them to try harder.",
          B: "Help facilitate discussion with the Product Owner to adjust scope or improve estimation.",
          C: "Add more developers without discussion.",
          D: "Cancel the Sprint.",
        },
        answer: "B",
        rationale:
          "Sprint scope should be realistic and negotiated while protecting team sustainability.",
      },
      {
        id: 26,
        question:
          "What is the role of the Scrum Master during Sprint Planning?",
        options: {
          A: "Assign tasks to developers.",
          B: "Ensure the Scrum process is followed and help remove planning obstacles.",
          C: "Choose Sprint Backlog items.",
          D: "Write user stories.",
        },
        answer: "B",
        rationale:
          "The Scrum Master facilitates, not controls, team decisions.",
      },
      {
        id: 27,
        question: "What leadership style is a Scrum Master expected to follow?",
        options: {
          A: "Command and control leadership.",
          B: "Servant leadership.",
          C: "Authoritarian leadership.",
          D: "Passive leadership.",
        },
        answer: "B",
        rationale:
          "Scrum Masters support and enable the team rather than control them.",
      },
      {
        id: 28,
        question: "What is the Scrum Master’s role in Daily Scrum?",
        options: {
          A: "Lead the meeting.",
          B: "Ensure the meeting happens but does not dominate discussion.",
          C: "Assign tasks.",
          D: "Write meeting minutes.",
        },
        answer: "B",
        rationale: "Daily Scrum is owned by the Development Team.",
      },
      {
        id: 29,
        question: "What is an impediment?",
        options: {
          A: "Anything that slows team progress.",
          B: "Only technical bugs.",
          C: "Developer laziness.",
          D: "Client feedback.",
        },
        answer: "A",
        rationale:
          "Impediments can be technical, organizational, or process-related.",
      },
      {
        id: 30,
        question: "Who is responsible for Scrum process effectiveness?",
        options: {
          A: "Scrum Master.",
          B: "Product Owner.",
          C: "Development Team.",
          D: "All Scrum Team members.",
        },
        answer: "D",
        rationale: "Scrum is a shared responsibility.",
      },
      {
        id: 31,
        question:
          "What should a Scrum Master do if stakeholders bypass the Product Owner?",
        options: {
          A: "Ignore them.",
          B: "Redirect them to follow proper communication channels.",
          C: "Immediately implement their request.",
          D: "Report them to management.",
        },
        answer: "B",
        rationale: "Process discipline protects team focus.",
      },
      {
        id: 32,
        question: "What is the purpose of coaching in Scrum?",
        options: {
          A: "To control developers.",
          B: "To help the team improve their own problem-solving ability.",
          C: "To assign work.",
          D: "To monitor working hours.",
        },
        answer: "B",
        rationale: "Scrum Masters help teams become self-organizing.",
      },
      {
        id: 33,
        question: "Which metric is Scrum Master most likely to monitor?",
        options: {
          A: "Team velocity trends.",
          B: "Employee salaries.",
          C: "Personal social media usage.",
          D: "Database schema.",
        },
        answer: "A",
        rationale: "Velocity helps understand team capacity over time.",
      },
      {
        id: 34,
        question: "What is a self-organizing team?",
        options: {
          A: "Team that needs constant orders.",
          B: "Team that decides how to accomplish work themselves.",
          C: "Team without a leader.",
          D: "Team that works alone.",
        },
        answer: "B",
        rationale: "Scrum promotes autonomy and accountability.",
      },
      {
        id: 35,
        question:
          "What should a Scrum Master do if meetings are consistently too long?",
        options: {
          A: "Cancel meetings.",
          B: "Help enforce timeboxing and meeting purpose.",
          C: "Allow meetings to continue indefinitely.",
          D: "Punish participants.",
        },
        answer: "B",
        rationale: "Timeboxing improves productivity.",
      },
      {
        id: 36,
        question: "Scrum Masters help teams by:",
        options: {
          A: "Removing organizational obstacles.",
          B: "Writing production code.",
          C: "Replacing team members.",
          D: "Managing product pricing.",
        },
        answer: "A",
        rationale:
          "The Scrum Master acts as a facilitator and obstacle remover.",
      },
    ],
  },
  "ui-ux-designer": {
    role: "UI/UX Designer",
    focus: "Accessibility, Responsiveness, Design Thinking (No code)",
    flashcards: [
      {
        id: 37,
        question:
          "When designing a form, why is it important to have high contrast between the text color and the background color?",
        options: {
          A: "It makes the design look more expensive.",
          B: "It ensures users with visual impairments can read the text easily.",
          C: "It allows the form to load faster.",
          D: "It helps the developers write better CSS.",
        },
        answer: "B",
        rationale:
          "Contrast is a key Accessibility (A11y) concept. If text doesn't stand out from the background, many people cannot read it.",
      },
      {
        id: 38,
        question: 'What does "Responsive Design" mean?',
        options: {
          A: "The website responds quickly when you click a button.",
          B: "The design automatically adjusts its layout to look good on phone, tablet, and desktop screens.",
          C: "The designer responds to emails within 24 hours.",
          D: "The colors change based on the time of day.",
        },
        answer: "B",
        rationale:
          "Responsive design ensures a usable experience across all device sizes, which is standard for modern web design.",
      },
      {
        id: 39,
        question:
          'You are designing a button. Why might you use a "Wireframe" before creating the final colorful version?',
        options: {
          A: "To figure out the layout and structure without getting distracted by colors and details.",
          B: "Because wireframes are cheaper to sell to clients.",
          C: "To test if the code works.",
          D: "To pick the best font family.",
        },
        answer: "A",
        rationale:
          'Wireframing is a low-fidelity step to validate the "skeleton" of the page and user flow before investing time in visual polish.',
      },
      {
        id: 40,
        question:
          "A user tells you, \"I can't find the 'Checkout' button.\" What is the best design solution?",
        options: {
          A: "Make the button bigger and use a more distinct color to improve visual hierarchy.",
          B: 'Add a pop-up that says "Click here to buy."',
          C: "Train the user on how to use the website.",
          D: "Leave it as is; they will find it eventually.",
        },
        answer: "A",
        rationale:
          "If a user can't find a primary action, it is a UI failure. Visual hierarchy (size, color, placement) guides the user's eye to the most important elements.",
      },
      {
        id: 41,
        question:
          'What is the purpose of "Alt Text" on images in your design specs?',
        options: {
          A: "To hide secret messages.",
          B: "To describe the image for users using screen readers (blind or low-vision users).",
          C: "To make the image file size smaller.",
          D: "To label the image for the marketing team.",
        },
        answer: "B",
        rationale:
          'Alt text is crucial for accessibility. It allows software to "read" the image to users who cannot see it.',
      },
      {
        id: 42,
        question: "What is visual hierarchy in UI design?",
        options: {
          A: "The order in which developers write CSS.",
          B: "The arrangement of design elements to guide user attention to important content.",
          C: "How many colors are used in a design.",
          D: "The size of the design team.",
        },
        answer: "B",
        rationale:
          "Visual hierarchy helps users quickly understand what matters most on the screen.",
      },
      {
        id: 43,
        question: "Why should clickable elements look interactive?",
        options: {
          A: "To confuse users.",
          B: "To give feedback that the element can be clicked.",
          C: "To make the website heavier.",
          D: "To please developers.",
        },
        answer: "B",
        rationale:
          "Users should easily identify interactive components through design cues.",
      },
      {
        id: 44,
        question: "What is the main goal of usability testing?",
        options: {
          A: "To check if developers wrote clean code.",
          B: "To observe real users interacting with the product to find usability problems.",
          C: "To test server performance.",
          D: "To select brand colors.",
        },
        answer: "B",
        rationale:
          "Usability testing focuses on user experience and practical product use.",
      },
      {
        id: 45,
        question: "What does 'User-Centered Design' mean?",
        options: {
          A: "Designing based on developer preferences.",
          B: "Designing products by focusing on user needs and behavior.",
          C: "Designing only for mobile devices.",
          D: "Designing without research.",
        },
        answer: "B",
        rationale: "Good design starts with understanding users.",
      },
      {
        id: 46,
        question: "What is a design prototype?",
        options: {
          A: "The final product.",
          B: "An early model used for testing ideas.",
          C: "Developer test code.",
          D: "Marketing material.",
        },
        answer: "B",
        rationale:
          "Prototypes help validate design concepts before development.",
      },
      {
        id: 47,
        question: "What is accessibility in UI design?",
        options: {
          A: "Making design look beautiful only.",
          B: "Ensuring products can be used by people with disabilities.",
          C: "Using many animations.",
          D: "Adding more pages.",
        },
        answer: "B",
        rationale: "Accessibility ensures inclusivity.",
      },
      {
        id: 48,
        question: "What is white space in design?",
        options: {
          A: "Unused space that improves readability and structure.",
          B: "Space reserved for ads.",
          C: "Background color only.",
          D: "Developer code space.",
        },
        answer: "A",
        rationale: "White space reduces visual clutter.",
      },
      {
        id: 49,
        question: "What is UX research used for?",
        options: {
          A: "Understanding user behavior and needs.",
          B: "Choosing programming languages.",
          C: "Writing backend code.",
          D: "Testing servers.",
        },
        answer: "A",
        rationale: "Research informs better design decisions.",
      },
      {
        id: 50,
        question: "What is a design system?",
        options: {
          A: "Collection of reusable design components and guidelines.",
          B: "Database design.",
          C: "Server architecture.",
          D: "Graphic driver software.",
        },
        answer: "A",
        rationale: "Design systems improve consistency.",
      },
      {
        id: 51,
        question: "What is information architecture?",
        options: {
          A: "Structuring content to help users find information easily.",
          B: "Server storage design.",
          C: "Graphic design only.",
          D: "Programming logic.",
        },
        answer: "A",
        rationale: "Good IA improves navigation and usability.",
      },
      {
        id: 52,
        question: "What is A/B testing in design?",
        options: {
          A: "Testing two design variations to see which performs better.",
          B: "Testing backend APIs.",
          C: "Color grading videos.",
          D: "Writing code twice.",
        },
        answer: "A",
        rationale: "A/B testing is used for optimization.",
      },
      {
        id: 53,
        question: "What is interaction design?",
        options: {
          A: "Designing how users interact with a product.",
          B: "Drawing logos.",
          C: "Writing database queries.",
          D: "Managing teams.",
        },
        answer: "A",
        rationale: "Interaction design focuses on user-product behavior.",
      },
      {
        id: 54,
        question: "What is usability?",
        options: {
          A: "How easy and efficient a product is to use.",
          B: "How fast the server runs.",
          C: "Number of pages in a website.",
          D: "Code quality.",
        },
        answer: "A",
        rationale: "Usability measures user experience quality.",
      },
    ],
  },
  "web-developer": {
    role: "Web Developer",
    focus: "Web fundamentals + Data Structures & Algorithms (DSA)",
    flashcards: [
      {
        id: 55,
        question:
          "You need to look up a customer's order using their unique Order ID. Which data structure would likely be the fastest for this lookup?",
        options: {
          A: "An Array (List)",
          B: "A Linked List",
          C: "A Hash Map (or Object/Dictionary)",
          D: "A Stack",
        },
        answer: "C",
        rationale:
          'A Hash Map allows for "Key-Value" lookups. Searching for a unique ID (Key) in a Hash Map is generally instantaneous (O(1) time complexity).',
      },
      {
        id: 56,
        question: "What is the difference between == and === in JavaScript?",
        options: {
          A: "They are exactly the same.",
          B: '== checks for equality but allows type conversion (e.g., "5" equals 5), while === checks for strict equality (type must match).',
          C: "=== is used for math, == is used for text.",
          D: "== is a typo; only === is valid.",
        },
        answer: "B",
        rationale:
          'This is a classic interview question. == performs type coercion (making it "loose"), whereas === is "strict" and safer to use to avoid bugs.',
      },
      {
        id: 57,
        question:
          "Which HTML tag is used to create the largest heading on a page?",
        options: {
          A: "<head>",
          B: "<h6>",
          C: "<h1>",
          D: "<header>",
        },
        answer: "C",
        rationale:
          "<h1> represents the main heading. <h6> is the smallest heading. <head> is for metadata, not visible text.",
      },
      {
        id: 58,
        question:
          "In an algorithm, if you have a loop inside another loop (nested loops) that both iterate through a list of size N, what is the Time Complexity?",
        options: {
          A: "O(1) - Constant Time",
          B: "O(N) - Linear Time",
          C: "O(N^2) - Quadratic Time",
          D: "O(log N) - Logarithmic Time",
        },
        answer: "C",
        rationale:
          "For every item in the first loop, you run the second loop N times. N * N = N^2. This is often considered slow for large datasets.",
      },
      {
        id: 59,
        question:
          "You want to center a div both horizontally and vertically using CSS Flexbox. Which properties do you need on the parent container?",
        options: {
          A: "display: block; text-align: center;",
          B: "display: flex; justify-content: center; align-items: center;",
          C: "float: center; margin: auto;",
          D: "position: absolute; left: 50%;",
        },
        answer: "B",
        rationale:
          "Flexbox is the modern standard for layout. justify-content handles the main axis (horizontal usually), and align-items handles the cross axis (vertical).",
      },
      {
        id: 60,
        question: "What is HTTP primarily used for?",
        options: {
          A: "Database storage.",
          B: "Communication between web clients and servers.",
          C: "CSS styling.",
          D: "Image compression.",
        },
        answer: "B",
        rationale:
          "HTTP is the protocol used to transfer web resources over the internet.",
      },
      {
        id: 61,
        question: "What does DOM stand for in web development?",
        options: {
          A: "Data Object Model.",
          B: "Document Object Model.",
          C: "Digital Operation Method.",
          D: "Dynamic Output Mechanism.",
        },
        answer: "B",
        rationale:
          "The DOM represents the structure of an HTML document as a tree that JavaScript can manipulate.",
      },
      {
        id: 62,
        question: "What is the purpose of caching in web applications?",
        options: {
          A: "To make websites darker.",
          B: "To store frequently used data for faster retrieval and reduced server load.",
          C: "To delete old files.",
          D: "To improve typography.",
        },
        answer: "B",
        rationale:
          "Caching improves performance by avoiding repeated expensive computations or network calls.",
      },
      {
        id: 63,
        question: "What is semantic HTML?",
        options: {
          A: "HTML that uses meaningful tags to describe content structure.",
          B: "Encrypted HTML.",
          C: "Compressed HTML.",
          D: "CSS-only pages.",
        },
        answer: "A",
        rationale: "Semantic HTML improves accessibility and SEO.",
      },
      {
        id: 64,
        question: "What does REST API mean?",
        options: {
          A: "Random Execution Service Technology.",
          B: "Architectural style for web communication using HTTP methods.",
          C: "Backend database.",
          D: "Frontend framework.",
        },
        answer: "B",
        rationale: "REST APIs are widely used for client-server communication.",
      },
      {
        id: 65,
        question: "What is JavaScript mainly used for?",
        options: {
          A: "Adding interactivity to websites.",
          B: "Database storage.",
          C: "Network hardware control.",
          D: "Operating system kernel.",
        },
        answer: "A",
        rationale: "JavaScript enables dynamic web behavior.",
      },
      {
        id: 66,
        question: "What is the purpose of version control?",
        options: {
          A: "Track code changes and collaborate safely.",
          B: "Run websites.",
          C: "Style webpages.",
          D: "Design logos.",
        },
        answer: "A",
        rationale: "Version control systems help manage code history.",
      },
      {
        id: 67,
        question: "What is frontend development?",
        options: {
          A: "Server database management.",
          B: "User interface and user experience implementation.",
          C: "Network routing.",
          D: "Hardware design.",
        },
        answer: "B",
        rationale: "Frontend focuses on what users interact with.",
      },
      {
        id: 68,
        question: "What is CSS used for?",
        options: {
          A: "Structuring webpage content.",
          B: "Styling HTML elements.",
          C: "Running backend logic.",
          D: "Database queries.",
        },
        answer: "B",
        rationale: "CSS controls presentation and layout.",
      },
      {
        id: 69,
        question: "What is debugging?",
        options: {
          A: "Finding and fixing errors in code.",
          B: "Writing new features only.",
          C: "Deleting old files.",
          D: "Designing UI.",
        },
        answer: "A",
        rationale: "Debugging is essential in software development.",
      },
      {
        id: 70,
        question: "What is asynchronous programming?",
        options: {
          A: "Code that runs sequentially only.",
          B: "Code that can execute tasks without blocking other operations.",
          C: "Offline programming.",
          D: "Synchronous hardware control.",
        },
        answer: "B",
        rationale: "Async programming improves performance.",
      },
      {
        id: 71,
        question: "What is DOM manipulation?",
        options: {
          A: "Changing webpage structure using JavaScript.",
          B: "Editing server files.",
          C: "Compressing images.",
          D: "Writing HTML comments.",
        },
        answer: "A",
        rationale: "DOM APIs allow dynamic webpage updates.",
      },
      {
        id: 72,
        question: "What is web performance optimization?",
        options: {
          A: "Making websites load faster and run efficiently.",
          B: "Adding more animations.",
          C: "Using more images.",
          D: "Increasing font sizes.",
        },
        answer: "A",
        rationale: "Performance directly affects user experience.",
      },
    ],
  },
  "python-developer": {
    role: "Python Developer",
    focus: "Python syntax + Data Structures & Algorithms (DSA)",
    flashcards: [
      {
        id: 73,
        question:
          'Which Python data structure is "immutable" (meaning it cannot be changed after it is created)?',
        options: {
          A: "List [1, 2]",
          B: "Dictionary {'a': 1}",
          C: "Tuple (1, 2)",
          D: "Set {1, 2}",
        },
        answer: "C",
        rationale:
          "Tuples are immutable lists. Once defined, you cannot add, remove, or change items. This makes them faster and safer for fixed data.",
      },
      {
        id: 74,
        question:
          "You have a list of 1,000 numbers and you need to sort them from smallest to largest. What is the average time complexity of Python's built-in sort() function?",
        options: {
          A: "O(N)",
          B: "O(N log N)",
          C: "O(N^2)",
          D: "O(1)",
        },
        answer: "B",
        rationale:
          'Python uses "Timsort," which is a very efficient sorting algorithm with an average complexity of O(N log N). This is much faster than O(N^2) bubble sort.',
      },
      {
        id: 75,
        question: "What does the keyword def do in Python?",
        options: {
          A: "It defines a variable.",
          B: "It defines a function.",
          C: "It deletes a file.",
          D: "It downloads a library.",
        },
        answer: "B",
        rationale:
          "def function_name(): is the syntax used to create a reusable block of code called a function.",
      },
      {
        id: 76,
        question:
          "You are writing a program to detect if a specific word exists in a large book. Which data structure is best to store the words of the book for fast searching?",
        options: {
          A: "A List",
          B: "A Set",
          C: "A Tuple",
          D: "A String",
        },
        answer: "B",
        rationale:
          "Checking if an item exists in a Set is very fast (O(1) on average) because it uses hashing. Checking a List requires looking at every item one by one (O(N)).",
      },
      {
        id: 77,
        question:
          'What is the purpose of a "Virtual Environment" (venv) in Python development?',
        options: {
          A: "To simulate a video game.",
          B: "To run Python on a different computer.",
          C: "To isolate the dependencies (libraries) for a specific project so they don't conflict with other projects.",
          D: "To make the code run faster.",
        },
        answer: "C",
        rationale:
          "Virtual environments are critical professional practice. They ensure that Project A can use version 1.0 of a library while Project B uses version 2.0 without breaking each other.",
      },
      {
        id: 78,
        question: "What is list comprehension in Python?",
        options: {
          A: "A way to compress Python lists.",
          B: "A concise syntax for creating lists using expressions.",
          C: "A method for encrypting lists.",
          D: "A debugging tool.",
        },
        answer: "B",
        rationale:
          "List comprehension is a Pythonic way to generate lists in a readable and efficient manner.",
      },
      {
        id: 79,
        question: "Which Python keyword is used to handle exceptions?",
        options: {
          A: "try/except",
          B: "catch/error",
          C: "handle/stop",
          D: "debug/fix",
        },
        answer: "A",
        rationale:
          "Python uses try and except blocks to manage runtime errors.",
      },
      {
        id: 80,
        question: "What is the purpose of the Python 'import' statement?",
        options: {
          A: "To remove modules.",
          B: "To include external libraries or modules in a program.",
          C: "To export data.",
          D: "To run scripts faster.",
        },
        answer: "B",
        rationale: "import allows code reuse by loading external modules.",
      },
      {
  id: 81,
  question: "What is the difference between a shallow copy and a deep copy in Python?",
  options: {
    A: "There is no difference.",
    B: "Shallow copy copies only references to nested objects, while deep copy creates independent copies of all nested objects.",
    C: "Deep copy only works for numbers.",
    D: "Shallow copy deletes the original object.",
  },
  answer: "B",
  rationale:
    "A shallow copy duplicates the top-level object but references nested objects. A deep copy recursively copies all nested objects, making them fully independent.",
},
{
  id: 82,
  question: "What is the purpose of the 'self' keyword in a Python class?",
  options: {
    A: "It refers to the current instance of the class.",
    B: "It defines a global variable.",
    C: "It creates a static method.",
    D: "It deletes the object.",
  },
  answer: "A",
  rationale:
    "'self' allows access to instance attributes and methods inside the class definition.",
},
{
  id: 83,
  question: "What are Python generators used for?",
  options: {
    A: "Generating random numbers only.",
    B: "Creating values one at a time using the 'yield' keyword for memory efficiency.",
    C: "Compiling Python to machine code.",
    D: "Handling database queries.",
  },
  answer: "B",
  rationale:
    "Generators allow iteration over large datasets without storing everything in memory at once.",
},
{
  id: 84,
  question: "What does the 'lambda' keyword do in Python?",
  options: {
    A: "Creates an anonymous function.",
    B: "Imports external modules.",
    C: "Stops program execution.",
    D: "Declares a class.",
  },
  answer: "A",
  rationale:
    "Lambda functions are small anonymous functions defined in a single expression.",
},
{
  id: 85,
  question: "What is the time complexity of checking if an element exists in a Python dictionary?",
  options: {
    A: "O(N)",
    B: "O(N log N)",
    C: "O(1) on average",
    D: "O(N^2)",
  },
  answer: "C",
  rationale:
    "Dictionaries use hashing, which allows average constant-time lookup.",
},
{
  id: 86,
  question: "What is the purpose of the '__init__' method in Python classes?",
  options: {
    A: "It deletes the object.",
    B: "It initializes object attributes when a new instance is created.",
    C: "It imports modules.",
    D: "It runs only once per file.",
  },
  answer: "B",
  rationale:
    "__init__ is the constructor method that runs when a new object is instantiated.",
},
{
  id: 87,
  question: "What does the 'with' statement help manage in Python?",
  options: {
    A: "Loops.",
    B: "Conditional logic.",
    C: "Context management like file handling, ensuring proper resource cleanup.",
    D: "Variable naming.",
  },
  answer: "C",
  rationale:
    "The 'with' statement ensures resources (like files) are properly opened and closed automatically.",
},
{
  id: 88,
  question: "What is the difference between a list and a set in Python?",
  options: {
    A: "Lists allow duplicates; sets do not.",
    B: "Sets allow duplicates; lists do not.",
    C: "Lists are immutable; sets are mutable.",
    D: "There is no difference.",
  },
  answer: "A",
  rationale:
    "Sets store only unique elements and are optimized for membership testing.",
},
{
  id: 89,
  question: "What is the Global Interpreter Lock (GIL) in CPython?",
  options: {
    A: "A lock that prevents file editing.",
    B: "A mechanism that allows only one thread to execute Python bytecode at a time.",
    C: "A database security feature.",
    D: "A web server setting.",
  },
  answer: "B",
  rationale:
    "The GIL limits true parallelism in multi-threaded Python programs in CPython.",
},
{
  id: 90,
  question: "What is recursion?",
  options: {
    A: "A loop that never ends.",
    B: "A function calling itself to solve smaller subproblems.",
    C: "A database query method.",
    D: "A debugging technique.",
  },
  answer: "B",
  rationale:
    "Recursion solves problems by breaking them into smaller instances of the same problem.",
}
    ],
  },
};

export default questions;
