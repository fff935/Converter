import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const API_KEY = "6206b1c0719779c1123433d07e2fbdf365ab658b";
  const [fromCurrency, setFromCurrency] = useState("UAH");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [rates, setRates] = useState({});
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() - 7);
  const maxDate = today.toISOString().split("T")[0];
  const minDateString = minDate.toISOString().split("T")[0];

  const allowedCurrencies = ["USD", "UAH", "EUR", "GBP", "CNY"];

  const fetchRates = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.getgeoapi.com/v2/currency/historical/${selectedDate}?api_key=${API_KEY}&format=json`);
      const data = await response.json();

      if (data.status === "success") {
        setRates(data.rates);
      } else {
        console.error("Failed to fetch rates:", data.error?.message || "Unknown error");
        setRates({});
      }
    } catch (error) {
      console.error("Error fetching rates:", error);
      setRates({});
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();
  }, [selectedDate]);

  useEffect(() => {
    if (fromValue) {
      const calculatedValue = calculateToValue(fromValue);
      setToValue(truncateDecimals(calculatedValue));
    }
  }, [fromCurrency, toCurrency, selectedDate]);



  const calculateToValue = (value) => {
    if (rates[toCurrency]?.rate && rates[fromCurrency]?.rate) {
      const rate = rates[toCurrency].rate / rates[fromCurrency].rate;
      return (value * rate).toFixed(6);
    }
    return "";
  };

  const calculateFromValue = (value) => {
    if (rates[fromCurrency]?.rate && rates[toCurrency]?.rate) {
      const rate = rates[fromCurrency].rate / rates[toCurrency].rate;
      return (value * rate).toFixed(6);
    }
    return "";
  };

  const truncateDecimals = (value) => {
    if (value.includes(".")) {
      const [integer, decimals] = value.split(".");
      return `${integer}.${decimals.slice(0, 2)}`;
    }
    return value;
  };

  const handleFromValueChange = (value) => {
    if (/^\d*\.?\d*$/.test(value)) {
      setFromValue(value);
      if (value) {
        const calculated = calculateToValue(value);
        setToValue(truncateDecimals(calculated));
      } else {
        setToValue("");
      }
    }
  };

  const handleToValueChange = (value) => {
    if (/^\d*\.?\d*$/.test(value)) {
      setToValue(value);
      if (value) {
        const calculated = calculateFromValue(value);
        setFromValue(truncateDecimals(calculated));
      } else {
        setFromValue("");
      }
    }
  };

  const handleSaveResult = () => {
    if (fromValue && toValue) {
      const newRecord = {
        date: selectedDate,
        fromAmount: `${truncateDecimals(fromValue)} ${fromCurrency}`,
        toAmount: `${truncateDecimals(toValue)} ${toCurrency}`,
      };
      setHistory((prevHistory) => [newRecord, ...prevHistory.slice(0, 9)]);
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  const firstColumn = history.slice(0, 5);
  const secondColumn = history.slice(5, 10);

  return (
    <section className="font-roboto">
      <div className="bg-[#F6F7FF] flex justify-center">
        <div className="flex flex-col gap-[50px] bg-[#fff] p-[60px] m-[80px] rounded-[4px]">
          <div className="flex justify-between gap-[50px]">
            <h1 className="font-bold text-4xl leading-[56px]">Конвертер валют</h1>
            <div>
              <p className="text-[#707C87] font-medium mb-[30px]">В мене є:</p>
              <div className="text-[#707C87] font-semibold">
                <input type="number" placeholder="1000" className="w-[220px] h-[60px] text-center border-[1px] border-[#C1C2CA] rounded-[4px]" value={fromValue} onChange={(e) => handleFromValueChange(e.target.value)} />
                <select className="w-[120px] h-[60px] text-center ml-[15px] border-[1px] border-[#C1C2CA] rounded-[4px]" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                  {allowedCurrencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-[220px] h-[60px] flex place-content-around items-center mt-[25px] border-[1px] border-[#C1C2CA] rounded-[4px] text-[#707C87] font-semibold">
                <input type="date" value={selectedDate} min={minDateString} max={maxDate} onChange={(e) => setSelectedDate(e.target.value)} />
              </div>
            </div>

            <div>
              <p className="text-[#707C87] font-medium mb-[30px]">Я отримаю:</p>
              <div className="text-[#707C87] font-semibold">
                <input type="number" placeholder="0" className="w-[220px] h-[60px] text-center border-[1px] border-[#C1C2CA] rounded-[4px]" value={toValue} onChange={(e) => handleToValueChange(e.target.value)} />
                <select className="w-[120px] h-[60px] text-center ml-[15px] border-[1px] border-[#C1C2CA] rounded-[4px]" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                  {allowedCurrencies.map((currency) => (
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
        </div>
      </div>
      <div className="bg-[#fff] flex justify-center p-[80px]">
        <div className="bg-[#F6F7FF] py-[40px] px-[66px] rounded-[4px] min-w-[1226px] min-h-[453px]">
          <h2 className="font-bold text-2xl mb-4">Історія конвертації</h2>
          <div className="flex justify-around justify-center">
            <ul className="list-disc flex flex-col gap-[15px]">
              {firstColumn.map((record, index) => (
                <li key={index} className="bg-[#fff] py-[15px] px-[25px] list-none rounded-[4px]">
                  <span className="text-[#C1C2CA] mr-[15px]">{record.date}</span>
                  <span className="mr-[34px] font-medium text-[#707C87]">{record.fromAmount}</span>
                  <span className="text-[#C1C2CA]">{"-->"}</span>
                  <span className="ml-[34px] font-medium text-[#707C87]">{record.toAmount}</span>
                </li>
              ))}
            </ul>
            <ul className="list-disc flex flex-col gap-[15px]">
              {secondColumn.map((record, index) => (
                <li key={index} className="bg-[#fff] py-[15px] px-[25px] list-none rounded-[4px]">
                  <span className="text-[#C1C2CA] mr-[15px]">{record.date}</span>
                  <span className="mr-[34px] font-medium text-[#707C87]">{record.fromAmount}</span>
                  <span className="text-[#C1C2CA]">{"-->"}</span>
                  <span className="ml-[34px] font-medium text-[#707C87]">{record.toAmount}</span>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={handleClearHistory} className="mt-[40px] bg-[#2C36F2] text-[#fff] rounded-[4px] font-medium text-[18px] w-[220px] h-[60px] mt-[25px]">
            Очистити історію
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
