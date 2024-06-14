function calculateCompoundInterest() {
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;
    const frequency = document.getElementById('frequency').value;

    if (!principal || !rate || !time || !frequency) {
        alert("Please enter all the fields.");
        return;
    }

    const compoundInterest = principal * Math.pow((1 + (rate / 100) / frequency), frequency * time) - principal;
    document.getElementById('result').innerText = `Compound Interest: ${compoundInterest.toFixed(2)}`;
}