let formData = { email: "", message: "" };
const form = document.querySelector(".feedback-form");
const storageKey = "feedback-form-state";

const savedData = localStorage.getItem(storageKey);
if (savedData) {
  formData = JSON.parse(savedData);

  form.elements.email.value = formData.email || "";
  form.elements.message.value = formData.message || "";
}

form.addEventListener("input", evt => {
  const { name, value } = evt.target;

  if (name in formData) {
    formData[name] = value.trim();
    localStorage.setItem(storageKey, JSON.stringify(formData));
  }
});

 form.addEventListener("submit", evt => {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);
  localStorage.removeItem(storageKey);
  form.reset();
  formData = { email: "", message: "" };
});