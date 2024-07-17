let formData = {
    email: "",
    message: ""
  };

const form = document.querySelector(".feedback-form");

populateForm();

form.addEventListener("submit", handleFormSubmit);
form.addEventListener("input", handleFormInput);

// function handleFormSubmit(event) {
//   event.preventDefault();

//   localStorage.removeItem('feedback-form-state');

//   event.currentTarget.reset();
// }

function handleFormSubmit(event) {
    event.preventDefault();
    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
    
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
}

function handleFormInput(event) {
  const value = event.target.value.trim();
  const key = event.target.name;

//   let savedFeedbackData = {};

  try {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  } catch (err) {
    console.log(err);
    return;
  }

  if (formData) {
    formData[key] = value;
  } else {
    formData = {
      [key]: value,
    };
  }

  try {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  } catch (err) {
    console.log(err);
    return;
  }
}

function populateForm() {
//   let savedFeedbackData = {};

  try {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  } catch (err) {
    console.log(err);
    return;
  }

  if (!formData) {
    return;
  }

  for (const key in formData) {
    form.elements[key].value = formData[key];
  }
}
