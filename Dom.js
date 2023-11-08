const app = document.getElementById("class");

// Create and append a header
const header = document.createElement("h1");
header.textContent = "Home";
app.appendChild(header);

// Create and append buttons
const allTasksBtn = document.createElement("button");
allTasksBtn.textContent = "All Tasks";
allTasksBtn.id = "allTasksBtn";
app.appendChild(allTasksBtn);

const todayBtn = document.createElement("button");
todayBtn.textContent = "Today";
todayBtn.id = "todayBtn";
app.appendChild(todayBtn);

const nextDayBtn = document.createElement("button");
nextDayBtn.textContent = "Next Day";
nextDayBtn.id = "nextDayBtn";
app.appendChild(nextDayBtn);

// Create and append a header for projects
const projectsHeader = document.createElement("h2");
projectsHeader.textContent = "Projects";
app.appendChild(projectsHeader);

// Create and append a div for project list
const projectList = document.createElement("div");
projectList.id = "projectList";
app.appendChild(projectList);

// Create and append an input field for adding new projects
const newProjectName = document.createElement("input");
newProjectName.type = "text";
newProjectName.id = "newProjectName";
newProjectName.placeholder = "New Project Name";
app.appendChild(newProjectName);

// Create and append a button for adding projects
const addProjectBtn = document.createElement("button");
addProjectBtn.textContent = "Add Project";
addProjectBtn.id = "addProjectBtn";
app.appendChild(addProjectBtn);

// Create and append a header for tasks
const TasksHeader = document.createElement("h3");
TasksHeader.textContent = "Tasks";
app.appendChild(TasksHeader);

//create task button
const createTaskBtn = document.createElement("button");
createTaskBtn.textContent = "Add task";
createTaskBtn.id = "createTaskBtn";
app.appendChild(createTaskBtn);

