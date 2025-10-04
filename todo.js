document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("a");
  const input = document.getElementById("s");
  const taskList = document.getElementById("list");
  const titleSection = document.getElementById("title");
  let heading = document.querySelector("h3");
  heading.classList.add("hide");
  titleSection.classList.add("hide")
  const maxTasks = 10;

  // Hide the list if empty
  function updateVisibility() {
    taskList.style.display = taskList.children.length ? "block" : "none";
  }

  // Create a new task item
  function createTask(text) {
    
    const li = document.createElement("li");
    li.className = "l";
    li.innerHTML = `
      <span>${text}</span>
      <button class="b">done</button>
      <button class="r">remove</button>
    `;

    // Done button
    li.querySelector(".b").addEventListener("click", () => {
      li.classList.toggle("cut");
    });

    // Remove button with fade effect
    li.querySelector(".r").addEventListener("click", () => {
      li.style.transition = "opacity 0.5s ease";
      li.style.opacity = "0";
      setTimeout(() => {
        li.remove();
        updateVisibility();
      }, 500);
    });

    // Add task to top
    taskList.insertBefore(li, taskList.firstChild);
    updateVisibility();
  }

  // Add button click event
  addBtn.addEventListener("click", () => {
    titleSection.classList.remove("hide")
    heading.classList.remove("hide");
    const text = input.value.trim();
    if (!text) return;

    if (taskList.children.length >= maxTasks) {
      alert("You can only enter up to 10 items!");
      return;
    }

    createTask(text);
    input.value = "";
  });

  // Initialize visibility
  updateVisibility();
});
