// Bunga Tunggal
function calculateSimpleInterest() {
    let principal = parseFloat(document.getElementById("principal-single").value);
    let rate = parseFloat(document.getElementById("rate-single").value);
    let time = parseFloat(document.getElementById("time-single").value);

    if (!isNaN(principal) && !isNaN(rate) && !isNaN(time)) {
        let interest = (principal * rate * time) / 100;
        let total = principal + interest;
        // Format hasil dalam Rupiah
        document.getElementById("result-single").innerText = `Bunga: Rp ${interest.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).replace('Rp', '')} - Total: Rp ${total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).replace('Rp', '')}`;
    } else {
        document.getElementById("result-single").innerText = "Mohon masukkan semua nilai.";
    }
}

// Bunga Majemuk
function calculateCompoundInterest() {
    let principal = parseFloat(document.getElementById("principal-compound").value);
    let rate = parseFloat(document.getElementById("rate-compound").value);
    let time = parseFloat(document.getElementById("time-compound").value);
    let frequency = parseFloat(document.getElementById("frequency").value);

    if (!isNaN(principal) && !isNaN(rate) && !isNaN(time) && !isNaN(frequency)) {
        let compoundRate = rate / (frequency * 100);
        let compoundFrequency = frequency * time;
        let total = principal * Math.pow((1 + compoundRate), compoundFrequency);
        let interest = total - principal;
        // Format hasil dalam Rupiah
        document.getElementById("result-compound").innerText = `Bunga: Rp ${interest.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).replace('Rp', '')} - Total: Rp ${total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }).replace('Rp', '')}`;
    } else {
        document.getElementById("result-compound").innerText = "Mohon masukkan semua nilai.";
    }
}
