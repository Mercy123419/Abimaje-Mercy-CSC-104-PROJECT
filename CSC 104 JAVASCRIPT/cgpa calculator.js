function addCourse() {
    const courseContainer = document.getElementById('course-container');
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course';
    courseDiv.innerHTML = `
        <input type="number" class="grade" placeholder="Grade (e.g. 4.0)">
        <input type="number" class="credit" placeholder="Credit Hours">
        <button class="remove-course" onclick="removeCourse(this)">Remove</button>
    `;
    courseContainer.appendChild(courseDiv);
}

function removeCourse(button) {
    const courseDiv = button.parentElement;
    courseDiv.remove();
}

function calculateCGPA() {
    const grades = document.querySelectorAll('.grade');
    const credits = document.querySelectorAll('.credit');

    let totalPoints = 0;
    let totalCredits = 0;

    grades.forEach((grade, index) => {
        const credit = credits[index].value;
        if (grade.value && credit) {
            totalPoints += grade.value * credit;
            totalCredits += parseFloat(credit);
        }
    });

    if (totalCredits === 0) {
        alert("Please enter valid grades and credit hours.");
        return;
    }

    const cgpa = totalPoints / totalCredits;
    document.getElementById('result').innerText = `Your CGPA is ${cgpa.toFixed(2)}`;
}