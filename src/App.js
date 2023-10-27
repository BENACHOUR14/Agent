import React, { useState, useEffect } from 'react';

function CurrencyConverterAgent() {
  const exchangeRates = {
    USD: 1.0,
    EUR: 0.85,
    GBP: 0.75,
  };

  const convert = (amount, fromCurrency, toCurrency) => {
    if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
      return (amount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency];
    } else {
      return null;
    }
  };

  return { convert };
}

function App() {
  const [amount, setAmount] = useState(1.0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const currencyConverterAgent = CurrencyConverterAgent();

  const handleConversion = () => {
    const result = currencyConverterAgent.convert(amount, fromCurrency, toCurrency);
    setConvertedAmount(result);
  };

  useEffect(() => {
    handleConversion();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div>
      <h1>Convertisseur de Devises</h1>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        en
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        <button onClick={handleConversion}>Convertir</button>
      </div>
      {convertedAmount !== null && (
        <p>
          {amount} {fromCurrency} équivaut à {convertedAmount} {toCurrency}
        </p>
      )}
    </div>
  );
}

export default App;
