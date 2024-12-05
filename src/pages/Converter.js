import React, { useState } from "react";

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

  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const [fromCurrency, setFromCurrency] = useState("UAH");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [history, setHistory] = useState([]); // Додаємо стан для збереження історії

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

  const handleSaveResult = () => {
    if (fromValue && toValue) {
      const newRecord = {
        date: selectedDate,
        fromAmount: `${fromValue} ${fromCurrency}`,
        toAmount: `${toValue} ${toCurrency}`,
      };

      setHistory((prevHistory) => {
        const updatedHistory = [newRecord, ...prevHistory]; // Додаємо новий запис на початок
        return updatedHistory.slice(0, 8); // Залишаємо лише останні 8 записів
      });
    }
  };

  return (
    <div className="bg-[#F6F7FF] flex justify-center">
      <div className="flex flex-col  gap-[50px] bg-[#fff] p-[60px] m-[80px] rounded-[4px]">
        <div className="flex justify-between gap-[50px]">
          <div>
            <h1 className="font-bold text-4xl leading-[56px]">Конвертер валют</h1>
            <p className="text-[#707C87] font-medium mb-[30px]">В мене є:</p>
            <div className="text-[#707C87] font-semibold">
              <input type="number" placeholder="1000" className="w-[220px] h-[60px] text-center border-[1px] border-[#C1C2CA] rounded-[4px]" value={fromValue} onChange={(e) => handleFromValueChange(e.target.value)} />
              <select className="w-[120px] h-[60px] text-center ml-[15px] border-[1px] border-[#C1C2CA] rounded-[4px]" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                {Object.keys(currentRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-[220px] h-[60px] flex place-content-around items-center mt-[25px] border-[1px] border-[#C1C2CA] rounded-[4px] text-[#707C87] font-semibold">
              <input type="date" value={selectedDate} onChange={(e) => handleDateChange(e.target.value)} />
            </div>
          </div>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.0001 24L24.0001 19L19.0001 14" stroke="#707C87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M24.0001 19C21.0667 19 10.6575 19 5.66673 19L2.00006 19" stroke="#707C87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7 2L2 7L7 12" stroke="#707C87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.00006 7.00005C4.93339 7.00005 15.3427 7.00005 20.3334 7.00005L24.0001 7.00005" stroke="#707C87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <div>
            <h1 className="font-bold text-4xl leading-[56px]">Конвертер валют</h1>
            <p className="text-[#707C87] font-medium mb-[30px]">Я отримаю:</p>
            <div className="text-[#707C87] font-semibold">
              <input type="number" placeholder="?" className="w-[220px] h-[60px] text-center border-[1px] border-[#C1C2CA] rounded-[4px]" value={toValue} onChange={(e) => handleToValueChange(e.target.value)} />
              <select className="w-[120px] h-[60px] text-center ml-[15px] border-[1px] border-[#C1C2CA] rounded-[4px]" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                {Object.keys(currentRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button onClick={handleSaveResult} className="bg-[#2C36F2] text-[#fff] rounded-[4px] font-medium text-[18px] w-[220px] h-[60px] mt-[25px]">
          Зберегти результат
        </button>

        <div>
          <h2 className="font-bold text-2xl">Історія конвертації</h2>
          <ul className="list-disc pl-5 mt-4">
            {history.map((record, index) => (
              <li key={index}>
                {record.date}: {record.fromAmount} {"-->"} {record.toAmount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
