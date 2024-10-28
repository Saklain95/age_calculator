function calculateAge() {
    const dobInput = document.getElementById('dob');
    const dob = dobInput.value;

    if (dob === "") {
        alert("Enter your date of birth");
        return;
    }

    const dobDate = new Date(dob);
    const currDate = new Date();

    // Check if the entered date is in the future
    if (dobDate > currDate) {
        alert("Please enter a valid date of birth (not in the future)");
        dobInput.value = ""; // Clear the input
        return; 
    }

    let years = currDate.getFullYear() - dobDate.getFullYear();
    let months = currDate.getMonth() - dobDate.getMonth();
    let days = currDate.getDate() - dobDate.getDate();

    // Adjust for cases where the birthday hasn't occurred yet this year
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12; // Adjust months if we rolled over the year
    }

    // Adjust days and months if negative
    if (days < 0) {
        months--;
        const lastMonthDate = new Date(currDate.getFullYear(), currDate.getMonth(), 0);
        days += lastMonthDate.getDate(); // Get days in the last month
    }

    // Ensure months and days are displayed as two digits
    months = months < 10 ? `0${months}` : months;
    days = days < 10 ? `0${days}` : days;

    document.getElementById("result").textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
}

