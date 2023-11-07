// Event listener for the "All Tasks" button
allTasksBtn.addEventListener("click", () => {
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
    submitButton.textContent = "Add Task";

    // Append all form elements to the task form
    taskForm.appendChild(titleLabel);
    taskForm.appendChild(descriptionLabel);
    taskForm.appendChild(dueDateLabel);
    taskForm.appendChild(submitButton);

    // Append the task form to the app
    app.appendChild(taskForm);

    // Event listener for the form submission (you can add your logic here)
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(taskForm);
        const taskData = Object.fromEntries(formData.entries());

        // You can add your logic to handle the submitted task data here
        console.log("New Task:");
        console.log("Title: " + taskData.title);
        console.log("Description: " + taskData.description);
        console.log("Due Date: " + taskData.dueDate);

        // Clear the form
        taskForm.reset();
    });
});
// Event listener for the "Add Project" button
addProjectBtn.addEventListener("click", () => {
    // Create a project item
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");

    // Create a delete button for the project
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-project-btn");

    // Create a project title input field
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Project Name";
    titleInput.classList.add("project-title");

    // Append the delete button and title input to the project item
    projectItem.appendChild(deleteBtn);
    projectItem.appendChild(titleInput);

    // Append the project item to the project list
    projectList.appendChild(projectItem);

    // Event listener for the delete button
    deleteBtn.addEventListener("click", () => {
        projectList.removeChild(projectItem);
    });
});