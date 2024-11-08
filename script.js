// Scroll Animation
window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });
});

// BMI Calculator with Unit Conversion
function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const heightUnit = document.getElementById("heightUnit").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const weightUnit = document.getElementById("weightUnit").value;
    const bmiResult = document.getElementById("bmiResult");

    if (height && weight) {
        // Convert units if necessary
        let heightInMeters = heightUnit === "cm" ? height / 100 : height;
        let weightInKg = weightUnit === "lb" ? weight / 2.20462 : weight;
        
        // Calculate BMI
        const bmi = (weightInKg / (heightInMeters ** 2)).toFixed(2);
        bmiResult.textContent = `Your BMI is ${bmi}`;
    } else {
        bmiResult.textContent = "Please enter valid height and weight.";
    }
}

// Form submission prevention for contact form
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your appointment request has been sent!");
});
