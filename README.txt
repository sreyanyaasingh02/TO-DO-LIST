MY TO-DO LIST - STUDENT WEB DEVELOPMENT PROJECT

ABOUT
This is a simple, beginner-friendly To-Do List application made using
HTML, CSS and JavaScript. It uses JavaScript DOM manipulation to update
the task list without refreshing the page.

FEATURES
1. Add a new task.
2. Mark a task as completed using the checkbox.
3. Delete a task.
4. See the total number of tasks and completed tasks.
5. Tasks stay saved in the same browser using localStorage.
6. Responsive layout for smaller screens.

PROJECT FILES
- index.html  : Page structure and form.
- style.css   : Colours, spacing and layout.
- script.js   : Adding, deleting, completing and saving tasks.

HOW TO RUN
1. Extract the ZIP file.
2. Keep all three files in the same folder.
3. Open index.html in a web browser.
4. Type a task and click "Add Task".

JAVASCRIPT CONCEPTS USED
- getElementById() to select HTML elements.
- addEventListener() to respond to form submissions and button clicks.
- createElement() to create task elements.
- appendChild() to add elements to the page.
- classList.add() to style completed tasks.
- filter() and map() to update the task array.
- localStorage to save tasks in the browser.

HOW TO EXPLAIN THE PROJECT
"When the user enters a task, JavaScript reads the input and adds it to
an array. The renderTasks() function creates HTML elements for each task
and adds them to the page using DOM manipulation. The checkbox changes
the completed status, while the Delete button removes a task. The
application also uses localStorage so that tasks remain after refreshing
the page."

NOTE
Tasks are saved only in the browser where you use the application.
Clearing that browser's site data may remove the saved tasks.
