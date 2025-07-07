const form = document.getElementById("feedback-form");
const display = document.getElementById("feedback-display");
const charCount = document.getElementById("char-count");

form.addEventListener("input", (e) => {
  if (e.target.id === "comments") {
    charCount.textContent = `${e.target.value.length} characters`;
  }
});

form.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
    const tooltip = e.target.nextElementSibling;
    if (tooltip) tooltip.style.display = "inline-block";
  }
});

form.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
    const tooltip = e.target.nextElementSibling;
    if (tooltip) tooltip.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopPropagation();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const comments = document.getElementById("comments").value.trim();

  if (!name || !email || !comments) {
    alert("All fields are required!");
    return;
  }

  const entry = document.createElement("div");
  entry.className = "feedback-entry";
  entry.innerHTML = `<strong>${name}</strong> (${email})<br/>${comments}`;
  display.appendChild(entry);

  form.reset();
  charCount.textContent = "0 characters";
});
