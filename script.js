let transactions = [];

function addTransaction() {
  const descInput = document.getElementById('description');
  const amountInput = document.getElementById('amount');
  const typeSelect = document.getElementById('type');
  
  const desc = descInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const type = typeSelect.value;

  if (desc === '' || isNaN(amount)) {
    alert('Please enter valid description and amount');
    return;
  }

  const transaction = { desc, amount, type };
  transactions.push(transaction);
  updateUI();

  descInput.value = '';
  amountInput.value = '';
}

function updateUI() {
  const list = document.getElementById('transactions');
  const balanceDisplay = document.getElementById('balance');
  list.innerHTML = '';

  let balance = 0;

  transactions.forEach(t => {
    const li = document.createElement('li');
    li.textContent = `${t.desc}: ₹${t.amount}`;
    li.classList.add(t.type);
    list.appendChild(li);

    if (t.type === 'income') {
      balance += t.amount;
    } else {
      balance -= t.amount;
    }
  });

  balanceDisplay.textContent = balance.toFixed(2);
}
