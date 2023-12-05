
const Cashback = {
    cashbackList: [],
  
    calcCash: function () {
      const amount = parseFloat(document.getElementById('amount').value);
      if (!isNaN(amount)) {
        const cashbackAmount = amount * 0.03;
        this.cashbackList.push(cashbackAmount.toFixed(2));
        this.displayResult(`Cashback hesablandı: $${cashbackAmount.toFixed(2)}`);
      } else {
        this.displayResult('Xərclənən məbləği düzgün daxil edin.');
      }
    },
  
    showCashbackList: function () {
      this.displayList();
    },
  
    displayResult: function (message) {
      const resultElement = document.getElementById('cashbackResult');
      resultElement.innerHTML = message;
    },
  
    displayList: function () {
      const listElement = document.getElementById('cashbackList');
      listElement.innerHTML = '';
      
      this.cashbackList.forEach((cashback, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `Xərclənən vaxt #${index + 1} - $${cashback}`;
        listElement.appendChild(listItem);
      });
    },
  };
  