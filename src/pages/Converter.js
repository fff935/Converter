import React from "react";
import "./converter.css";

const Converter = () => {
  return (
    <section id="converter" className="p-[80px] bg-gray-100 container mx-auto font-roboto">
      <div className="bg-[#fff] p-[50px] rounded-[4px]">
        <div className="flex place-content-around">
          <div>
            <h1 className="font-bold text-4xl leading-[56px]">Конвертер валют</h1>
            <p className="text-[#707C87] font-medium mb-[30px]">В мене є:</p>
            <div className="text-[#707C87] font-semibold">
              <input type="number" placeholder="1000" className="w-[220px] h-[60px] text-center border-[1px] border-[#C1C2CA] rounded-[4px]"></input>
              <select className="w-[120px] h-[60px] text-center ml-[15px] border-[1px] border-[#C1C2CA] rounded-[4px]">
                <option>UAH</option>
                <option>USD</option>
                <option>EUR</option>
                <option>GBR</option>
                <option>CNY</option>
              </select>
            </div>
            <div className="w-[220px] h-[60px] flex place-content-around items-center mt-[25px] border-[1px] border-[#C1C2CA] rounded-[4px] text-[#707C87] font-semibold">
              <input type="date"></input>
              <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 10.1828L26 10" stroke="#707C87" />
                <path d="M6 0L6.09082 3.89677" stroke="#707C87" />
                <path d="M21 0V4" stroke="#707C87" />
                <path d="M26 25V5C26 3.34315 24.6569 2 23 2H4C2.34315 2 1 3.34315 1 5V25C1 26.6569 2.34315 28 4 28H23C24.6569 28 26 26.6569 26 25Z" stroke="#707C87" />
                <path d="M5 16H8" stroke="#C1C2CA" stroke-width="3" />
                <path d="M12.0908 16H15.0908" stroke="#C1C2CA" stroke-width="3" />
                <path d="M19.1816 16H22.1816" stroke="#C1C2CA" stroke-width="3" />
                <path d="M5 22H8" stroke="#C1C2CA" stroke-width="3" />
                <path d="M12.0908 22H15.0908" stroke="#C1C2CA" stroke-width="3" />
                <path d="M19.1816 22H22.1816" stroke="#C1C2CA" stroke-width="3" />
              </svg>
            </div>
          </div>
          <div className="flex items-center">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.0001 24L24.0001 19L19.0001 14" stroke="#707C87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24.0001 19C21.0667 19 10.6575 19 5.66673 19L2.00006 19" stroke="#707C87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7 2L2 7L7 12" stroke="#707C87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.00006 7.00005C4.93339 7.00005 15.3427 7.00005 20.3334 7.00005L24.0001 7.00005" stroke="#707C87" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <div>
            <h1 className="font-bold text-4xl leading-[56px] text-transparent">Конвертер валют</h1>
            <p className="text-[#707C87] font-medium mb-[30px]">Хочу придбати:</p>
            <div className="text-[#707C87] font-semibold">
              <input type="number" placeholder="1000" className="w-[220px] h-[60px] text-center border-[1px] border-[#C1C2CA] rounded-[4px]"></input>
              <select className="w-[120px] h-[60px] text-center ml-[15px] border-[1px] border-[#C1C2CA] rounded-[4px]">
                <option>UAH</option>
                <option>USD</option>
                <option>EUR</option>
                <option>GBR</option>
                <option>CNY</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button className="bg-[#2C36F2] text-[#fff] rounded-[4px] font-medium text-[18px] w-[220px] h-[60px] mt-[25px]">Зберегти результат</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Converter;
