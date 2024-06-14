function calculateInterest() {
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;

    if (!principal || !rate || !time) {
        alert("Please enter all the fields.");
        return;
    }

    const interest = (principal * rate * time) / 100;
    document.getElementById('result').innerText = `Simple Interest: ${interest.toFixed(2)}`;
}