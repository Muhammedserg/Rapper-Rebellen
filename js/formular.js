
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("reservierungsformular");
    const inputFields = document.querySelectorAll("#reservierungsformular input ");
    const errorDivs = document.querySelectorAll("#reservierungsformular .errorDiv");
  
    inputFields.forEach((input, index) => {
      input.addEventListener("focusout", () => validateField(input, errorDivs[index]));
    });
  
    form.addEventListener("submit", function(event) {
      let isFormValid = true;
      inputFields.forEach((input, index) => {
        if (!validateField(input, errorDivs[index])) {
          isFormValid = false;
        }
      });
  
      if (!isFormValid) {
        event.preventDefault();
      }
    });

    function validateField(input, errorDiv) {
        const value = input.value.trim();
        const alertIcon = input.parentElement.querySelector(".alert");
        const checkIcon = input.parentElement.querySelector(".check");
 
        if (value === "") {
            errorDiv.textContent = "Das ist ein Pflichtfeld";
            alertIcon.style.display = "block";
            checkIcon.style.display = "none";
            return false;
        } 
        
        if (input.id === "postleitzahl") {
            if (!/^\d{5}$/.test(value)) {
                errorDiv.textContent = "Die Postleitzahl muss genau fünf Zahlen enthalten";
                alertIcon.style.display = "block";
                checkIcon.style.display = "none";
                return false;
            }
        }

        if (input.id !== "postleitzahl" && value.length < 3) {
            errorDiv.textContent = "Mindestens drei Buchstaben erforderlich";
            alertIcon.style.display = "block";
            checkIcon.style.display = "none";
            return false;
        }

        if (input.id === "vorname" || input.id === "nachname") {
            if (!/^[A-Za-zäöüÄÖÜß\s]*$/.test(value)) {
                errorDiv.textContent = "Es sollte keine Sonderzeichen enthalten";
                alertIcon.style.display = "block";// Zeige das Euro-Icon
                checkIcon.style.display = "none";
                return false;
            }
        }
        
        if (input.id === "email") {
            if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(value)) {
                errorDiv.textContent = "Ungültige E-Mail-Adresse";
                alertIcon.style.display = "block";// Zeige das Euro-Icon
                checkIcon.style.display = "none";
                return false;
            }
        }

        if (input.id === "postleitzahl") {
            if (!/^\d+$/.test(value)) {
                errorDiv.textContent = "Es sind nur Zahlen erlaubt";
                alertIcon.style.display = "block"; // Zeige das Euro-Icon
                checkIcon.style.display = "none";
                return false;
            }
        }
        
        errorDiv.textContent = "";
        alertIcon.style.display = "none";
        checkIcon.style.display = "block";
        return true;
    }
});

