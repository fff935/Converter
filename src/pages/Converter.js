import React from "react";

const Converter = () => {
  return (
    <section id="converter" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Конвертер валют</h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="number"
              placeholder="Введіть суму"
              className="p-2 border rounded w-40"
            />
            <select className="p-2 border rounded">
              <option>USD</option>
              <option>EUR</option>
              <option>UAH</option>
            </select>
            <span className="text-xl">→</span>
            <select className="p-2 border rounded">
              <option>USD</option>
              <option>EUR</option>
              <option>UAH</option>
            </select>
            <input
              type="text"
              placeholder="Результат"
              readOnly
              className="p-2 border rounded w-40"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Конвертувати
          </button>
        </div>
      </div>
    </section>
  );
};

export default Converter;
