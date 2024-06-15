function calculate() {
    const fundSize = document.getElementById('fundSize').value;
    const fundLoss = document.getElementById('fundLoss').value;
    const stopLoss = document.getElementById('stopLoss').value;

    if (fundSize && fundLoss && stopLoss) {
        const result = (fundSize * fundLoss) / stopLoss;
        document.getElementById('result').textContent = `Result: ${result}`;
    } else {
        document.getElementById('result').textContent = 'Please enter all values.';
    }
}

function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display = dropdownContent.style.display === 'flex' ? 'none' : 'flex';
}

function calculateStopPrice() {
    const entryPrice = document.getElementById('entryPrice').value;
    const stopLossPercent = document.getElementById('stopLossPercent').value;
    const tradeType = document.getElementById('tradeType').value;

    if (entryPrice && stopLossPercent) {
        let stopPrice;
        if (tradeType === 'long') {
            stopPrice = entryPrice * (1 - stopLossPercent / 100);
        } else if (tradeType === 'short') {
            stopPrice = entryPrice * (1 + stopLossPercent / 100);
        }
        document.getElementById('stopPriceResult').textContent = `Stop Price: ${stopPrice}`;
    } else {
        document.getElementById('stopPriceResult').textContent = 'Please enter all values.';
    }
}
