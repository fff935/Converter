import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const rates = {
    "2024-11-22": { UAH: 1, USD: 0.027, EUR: 0.025, GBR: 0.021, CNY: 0.19 },
    "2024-11-23": { UAH: 1, USD: 0.0269, EUR: 0.0251, GBR: 0.0212, CNY: 0.19 },
    "2024-11-24": { UAH: 1, USD: 0.0271, EUR: 0.0253, GBR: 0.0211, CNY: 0.19 },
    "2024-11-25": { UAH: 1, USD: 0.0272, EUR: 0.0252, GBR: 0.021, CNY: 0.19 },
    "2024-11-26": { UAH: 1, USD: 0.027, EUR: 0.025, GBR: 0.0209, CNY: 0.19 },
    "2024-11-27": { UAH: 1, USD: 0.027, EUR: 0.0254, GBR: 0.0213, CNY: 0.19 },
    "2024-11-28": { UAH: 1, USD: 0.0273, EUR: 0.0255, GBR: 0.0215, CNY: 0.19 },
    "2024-11-29": { UAH: 1, USD: 0.0275, EUR: 0.0256, GBR: 0.0216, CNY: 0.19 },
    "2024-11-30": { UAH: 1, USD: 0.0276, EUR: 0.0258, GBR: 0.0218, CNY: 0.19 },
    "2024-12-01": { UAH: 1, USD: 0.0278, EUR: 0.0259, GBR: 0.0219, CNY: 0.19 },
    "2024-12-02": { UAH: 1, USD: 0.0279, EUR: 0.026, GBR: 0.022, CNY: 0.19 },
    "2024-12-03": { UAH: 1, USD: 0.028, EUR: 0.0262, GBR: 0.0221, CNY: 0.19 },
    "2024-12-04": { UAH: 1, USD: 0.0281, EUR: 0.0263, GBR: 0.0222, CNY: 0.19 },
  };

  const today = new Date().toISOString().split("T")[0]; // Поточна дата
  const [selectedDate, setSelectedDate] = useState(today);
  const [fromCurrency, setFromCurrency] = useState("UAH");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  // Дати від сьогоднішнього числа в обидві сторони
  const generateDates = () => {
    const dates = [];
    const currentDate = new Date(today);

    for (let i = -7; i <= 7; i++) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + i);
      dates.push(date.toISOString().split("T")[0]);
    }
    return dates;
  };

  const availableDates = generateDates();

  const currentRates = rates[selectedDate] || { UAH: 1, USD: 0, EUR: 0, GBR: 0, CNY: 0 };

  const handleFromValueChange = (value) => {
    setFromValue(value);
    if (!currentRates[toCurrency] || !currentRates[fromCurrency]) {
      setToValue("");
    } else {
      const rate = currentRates[toCurrency] / currentRates[fromCurrency];
      setToValue((value * rate).toFixed(2));
    }
  };

  const handleToValueChange = (value) => {
    setToValue(value);
    if (!currentRates[fromCurrency] || !currentRates[toCurrency]) {
      setFromValue("");
    } else {
      const rate = currentRates[fromCurrency] / currentRates[toCurrency];
      setFromValue((value * rate).toFixed(2));
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleFromValueChange(fromValue); // Оновлення значення після зміни дати
  };

  // Фільтрування валют, щоб уникнути дублікатів
  const getFilteredCurrencies = (excludeCurrency) =>
    Object.keys(currentRates).filter((currency) => currency !== excludeCurrency);

  // Оновлення значення при зміні валюти
  const handleCurrencyChange = (value, type) => {
    if (type === 'from') {
      setFromCurrency(value);
      handleFromValueChange(fromValue); // Перерахунок суми
    } else {
      setToCurrency(value);
      handleToValueChange(toValue); // Перерахунок суми
    }
  };

  return (
    <div className="flex place-content-around">
      <div>
        <h1 className="font-bold text-4xl leading-[56px]">Конвертер валют</h1>
        <p className="text-[#707C87] font-medium mb-[30px]">В мене є:</p>
        <div className="text-[#707C87] font-semibold">
          <input
            type="number"
            placeholder="1000"
            className="w-[220px] h-[60px] text-center border-[1px] border-[#C1C2CA] rounded-[4px]"
            value={fromValue}
            onChange={(e) => handleFromValueChange(e.target.value)}
          />
          <select
            className="w-[120px] h-[60px] text-center ml-[15px] border-[1px] border-[#C1C2CA] rounded-[4px]"
            value={fromCurrency}
            onChange={(e) => handleCurrencyChange(e.target.value, 'from')}
          >
            {getFilteredCurrencies(toCurrency).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="w-[220px] h-[60px] flex place-content-around items-center mt-[25px] border-[1px] border-[#C1C2CA] rounded-[4px] text-[#707C87] font-semibold">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
            min={availableDates[0]}
            max={availableDates[availableDates.length - 1]}
          />
        </div>
      </div>

      <div>
        <p className="text-[#707C87] font-medium mb-[30px]">Хочу придбати:</p>
        <div className="text-[#707C87] font-semibold">
          <input
            type="number"
            placeholder="1000"
            className="w-[220px] h-[60px] text-center border-[1px] border-[#C1C2CA] rounded-[4px]"
            value={toValue}
            onChange={(e) => handleToValueChange(e.target.value)}
          />
          <select
            className="w-[120px] h-[60px] text-center ml-[15px] border-[1px] border-[#C1C2CA] rounded-[4px]"
            value={toCurrency}
            onChange={(e) => handleCurrencyChange(e.target.value, 'to')}
          >
            {getFilteredCurrencies(fromCurrency).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-end">
          <button className="bg-[#2C36F2] text-[#fff] rounded-[4px] font-medium text-[18px] w-[220px] h-[60px] mt-[25px]">
            Зберегти результат
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
