window.onload = () => {
  // Add focus animation for input fields
  let inputContainers = document.getElementsByClassName("edit-value-container");
  for (var i = 0; i < inputContainers.length; i++) {
    let container = inputContainers[i];
    let tempInputValue;
    let newInputValue;
    container.addEventListener("focus", () => {
      tempInputValue = container.value;
      container.parentNode.style.borderBottom = ".5px solid #4BA070";
      container.style.color = "black";
      container.nextElementSibling.nextElementSibling.nextElementSibling.style.color =
        "grey";

      // Fade in buttons
      container.nextElementSibling.style.display = "block";
      container.nextElementSibling.nextElementSibling.style.display = "block";
      setTimeout(() => {
        container.nextElementSibling.style.opacity = "1";
        container.nextElementSibling.style.marginRight = "5px";
        container.nextElementSibling.nextElementSibling.style.marginRight =
          "25px";
        container.nextElementSibling.nextElementSibling.style.opacity = "1";
      }, 200);
    });

    container.addEventListener("focusout", () => {
      newInputValue = container.value;
      container.value = tempInputValue;
      container.parentNode.style.borderBottom = ".5px solid grey";
      container.style.color = "#808080";
      container.nextElementSibling.nextElementSibling.nextElementSibling.style.color =
        "#9f9d9e";

      // Fade out buttons
      container.nextElementSibling.style.opacity = "0";
      container.nextElementSibling.style.marginRight = "0";
      container.nextElementSibling.nextElementSibling.style.marginRight = "0";
      container.nextElementSibling.nextElementSibling.style.opacity = "0";
      setTimeout(() => {
        container.nextElementSibling.style.display = "none";
        container.nextElementSibling.nextElementSibling.style.display = "none";
      }, 250);
    });

    let cancelButton = container.nextElementSibling;
    cancelButton.addEventListener("click", () => {
      container.value = tempInputValue;
    });
    // Save current input value to database
    let confirmButton = container.nextElementSibling.nextElementSibling;
    confirmButton.addEventListener("click", () => {
      let refrenceProperty = container.classList[1].split("-")[1];
      axios.patch("", {
        prop: `companyInformation.${refrenceProperty}.value`,
        value: newInputValue
      });
      container.value = newInputValue;
    });
  }

  // Format phone number string
  let phoneNumber = document.querySelector(".company-phone-input");
  phoneNumber.value = formatPhoneNumber(phoneNumber.value);
  phoneNumber.addEventListener("keydown", enforceFormat);
  phoneNumber.addEventListener("keyup", formatToPhone);

  // Handle visibility icons
  let visibilityIcons = document.getElementsByClassName(
    "edit-company-info-icon"
  );
  for (var i = 0; i < visibilityIcons.length; i++) {
    let icon = visibilityIcons[i];
    icon.addEventListener("click", toggleVisibility);
  }
};

/*************** Helper function to handle updates to database ****************/
function toggleVisibility(event) {
  let icon = event.srcElement;
  let refrenceProperty = icon.parentNode.previousElementSibling
    .querySelector(".edit-value-container")
    .classList[1].split("-")[1];
  if (icon.classList.contains("not-visible")) {
    icon.classList.remove("not-visible");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
    axios.patch("", {
      prop: `companyInformation.${refrenceProperty}.isVisible`,
      value: true
    });
  } else {
    icon.classList.add("not-visible");
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
    axios.patch("", {
      prop: `companyInformation.${refrenceProperty}.isVisible`,
      value: false
    });
  }
}

/*************** Helper Function to Format Phone Number ************************/
function formatPhoneNumber(phoneNumberString) {
  var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
}

const isNumericInput = event => {
  const key = event.keyCode;
  return (
    (key >= 48 && key <= 57) || // Allow number line
    (key >= 96 && key <= 105) // Allow number pad
  );
};

const isModifierKey = event => {
  const key = event.keyCode;
  return (
    event.shiftKey === true ||
    key === 35 ||
    key === 36 || // Allow Shift, Home, End
    (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    // Allow Ctrl/Command + A,C,V,X,Z
    ((event.ctrlKey === true || event.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
  );
};

const enforceFormat = event => {
  // Input must be of a valid number format or a modifier key, and not longer than ten digits
  if (!isNumericInput(event) && !isModifierKey(event)) {
    event.preventDefault();
  }
};

const formatToPhone = event => {
  if (isModifierKey(event)) {
    return;
  }

  // I am lazy and don't like to type things more than once
  const target = event.target;
  const input = target.value.replace(/\D/g, "").substring(0, 10); // First ten digits of input only
  const zip = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);

  if (input.length > 6) {
    target.value = `(${zip}) ${middle} - ${last}`;
  } else if (input.length > 3) {
    target.value = `(${zip}) ${middle}`;
  } else if (input.length > 0) {
    target.value = `(${zip}`;
  }
};
