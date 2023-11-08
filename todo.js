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