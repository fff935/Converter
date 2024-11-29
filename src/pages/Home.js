import React from "react";
import { Link } from "react-router-dom";
import HomeImg from "../images/homePageImg.png";

const Home = () => {
  return (
    <section className="container mx-auto p-[120px]">
      <div className="flex place-content-around font-roboto">
        <div>
          <h1 className="font-bold text-4xl leading-[56px]">Конвертер валют</h1>
          <p className="text-[20px] leading-[28px] text-[#707C87]">
            Переважна діяльність банківської <br /> групи за останні чотири звітні квартали <br />
            становить 50 і більше відсотків.
          </p>
          
          <Link to="/Converter" className="bg-[#2C36F2] text-[#fff] p-[25px] rounded-[4px] inline-block mt-[27px]">Конвертувати валюту</Link>
        </div>
        <div><img src={HomeImg}></img></div>
      </div>
    </section>
  );
};

export default Home;
