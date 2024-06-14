const exchangeRate = 1461; // Exchange rate: 1 USD = 1461 NGN

function convertToNaira() {
    const usd = document.getElementById('usd').value;
    if (usd === "") return alert("Please enter a value in USD");
    const ngn = usd * exchangeRate;
    document.getElementById('ngn').value = ngn.toFixed(2);
}

function convertToDollar() {
    const ngn = document.getElementById('ngn').value;
    if (ngn === "") return alert("Please enter a value in NGN");
    const usd = ngn / exchangeRate;
    document.getElementById('usd').value = usd.toFixed(2);
}