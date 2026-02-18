// ================= DOM Selection =================

// Select input, button, and ordered list using querySelector
const input = document.querySelector("#taskInput");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");

// ================= Event Handling =================

// Add click event to button
button.addEventListener("click", function () {

    // Get user input value
    const taskText = input.value;

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // ================= Dynamic Element Creation =================

    // Create a new list item
    const li = document.createElement("li");

    // Set text based on user input
    li.innerText = taskText;

    // Apply styling using style.property
    li.style.color = "blue";
    li.style.fontWeight = "bold";

    // Add class using setAttribute()
    li.setAttribute("class", "task-item");

    // ================= Append =================

    // Append list item to ordered list
    list.append(li);

    // ================= Remove Task =================

    // Remove task when clicked
    li.addEventListener("click", function () {
        li.remove();
    });

    // ================= Input Handling =================

    // Clear input field after adding task
    input.value = "";
});

