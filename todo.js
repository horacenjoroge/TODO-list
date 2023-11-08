// Event listener for the "Add Project" button
addProjectBtn.addEventListener("click", () => {
    // Get the project name entered by the user
    const projectName = newProjectName.value;

    if (projectName) {
        // Create a project item
        const projectItem = document.createElement("div");
        projectItem.classList.add("project-item");

        // Create a delete button for the project
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-project-btn");

        // Create a text element to display the project name
        const projectText = document.createElement("span");
        projectText.textContent = projectName;
        projectText.classList.add("project-text");

        // Append the delete button and project text to the project item
        projectItem.appendChild(deleteBtn);
        projectItem.appendChild(projectText);

        // Append the project item to the project list
        projectList.appendChild(projectItem);

        // Event listener for the delete button
        deleteBtn.addEventListener("click", () => {
            projectList.removeChild(projectItem);
        });

        // Clear the new project name input field
        newProjectName.value = "";
    }
});
// Event listener for the "Add Task" button
createTaskBtn.addEventListener("click", () => {
    // Create a form element
    const taskForm = document.createElement("form");
    taskForm.id = "taskForm";

    // Create a title input field
    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title:";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.name = "title";
    titleLabel.appendChild(titleInput);

    // Create a description input field
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description:";
    const descriptionInput = document.createElement("textarea");
    descriptionInput.name = "description";
    descriptionLabel.appendChild(descriptionInput);

    // Create a due date input field
    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date:";
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.name = "dueDate";
    dueDateLabel.appendChild(dueDateInput);

    // Create a submit button
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";

    // Append form elements to the task form
    taskForm.appendChild(titleLabel);
    taskForm.appendChild(descriptionLabel);
    taskForm.appendChild(dueDateLabel);
    taskForm.appendChild(submitButton);

    // Append the task form to the app
    app.appendChild(taskForm);

    // Event listener for the form submission
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // Create a list item with task details
        const taskItem = document.createElement("li");
        taskItem.textContent = `Title: ${titleInput.value}, Description: ${descriptionInput.value}, Due Date: ${dueDateInput.value}`;

        // Append the task item to the task list (assuming you have a task list)
        const taskList = document.getElementById("taskList");
        taskList.appendChild(taskItem);

        // Clear the form
        taskForm.reset();
    });
});