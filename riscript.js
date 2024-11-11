// script.js

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const studentName = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentId').value;
    const courseSelection = document.getElementById('courseSelection');
    const selectedCourses = Array.from(courseSelection.selectedOptions).map(option => option.value);

    // Check if student name and ID are provided
    if (!studentName || !studentId) {
        alert("Please enter both your name and student ID.");
        return;
    }

    // Check if at least one course is selected
    if (selectedCourses.length === 0) {
        alert("Please select at least one course.");
        return;
    }

    // Show confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.classList.remove('hidden');

    // Display the student's details
    const studentDetails = document.getElementById('studentDetails');
    studentDetails.innerHTML = `
        <strong>Name:</strong> ${studentName}<br>
        <strong>Student ID:</strong> ${studentId}<br>
        <strong>Courses Selected:</strong> <ul>${selectedCourses.map(course => `<li>${course}</li>`).join('')}</ul>
    `;

    // Reset the form
    document.getElementById('registrationForm').reset();
});
