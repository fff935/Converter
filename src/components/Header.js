import React from "react";
import { Link, useLocation } from "react-router-dom";
import CardImg from "../images/card.png";
import "./header.css";

const Header = () => {
  const location = useLocation(); // Отримуємо поточний шлях

  return (
    <header className="text-black p-4 font-roboto">
      <div className="container mx-auto flex justify-between items-center px-16 pb-4">
        <Link to="/" className="flex gap-2 items-center no-underline text-base font-black">
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.3702 0V4.83265C15.0347 5.32135 14.0855 6.4961 13.884 7.90266H9.11396C8.91242 6.4961 7.96323 5.32239 6.62767 4.83265V0H16.3692H16.3702ZM17.1879 17.1002H17.1868C17.167 17.096 17.1482 17.0908 17.1283 17.0866C16.0277 16.8349 15.2101 15.8815 15.1078 14.7695C15.1078 14.7621 15.1067 14.7548 15.1057 14.7486C15.0994 14.6786 15.0963 14.6076 15.0963 14.5366V8.46341C15.0963 8.3924 15.0994 8.32139 15.1057 8.25143C15.1057 8.24412 15.1057 8.23681 15.1078 8.2295C15.2091 7.11636 16.0277 6.16299 17.1304 5.91238C17.143 5.90924 17.1555 5.90611 17.168 5.90402L17.19 5.8988C17.3591 5.86434 17.5345 5.84555 17.7142 5.84555H22.999V17.1534H17.7142C17.5335 17.1534 17.3581 17.1346 17.1879 17.1002ZM5.81004 5.8988L5.83093 5.90402C5.84346 5.90716 5.85703 5.91029 5.86956 5.91342C6.97122 6.16403 7.78989 7.11845 7.89222 8.23055C7.89222 8.23785 7.89326 8.24516 7.89431 8.25247C7.90057 8.32244 7.90371 8.39344 7.90371 8.46445V14.5376C7.90371 14.6086 7.90057 14.6797 7.89431 14.7496C7.89431 14.7569 7.89431 14.7642 7.89222 14.7715C7.79093 15.8836 6.9733 16.837 5.87165 17.0887C5.85286 17.0928 5.83406 17.0981 5.81422 17.1022H5.81213C5.64192 17.1377 5.46545 17.1555 5.28584 17.1555H0V5.84555H5.2848C5.46441 5.84555 5.63983 5.8633 5.809 5.8988H5.81004ZM9.15573 9.15573H13.8443V13.8443H9.15573V9.15573ZM0 4.44003C0 1.99133 1.99133 0 4.44003 0H5.37669V4.59561C5.34641 4.59561 5.31613 4.59353 5.28584 4.59353H0V4.44003ZM4.44003 23C1.99237 23 0 21.0087 0 18.56V18.4065H5.2848C5.31508 18.4065 5.34536 18.4044 5.37565 18.4044V23H4.43898H4.44003ZM6.62976 23V18.1673C7.96531 17.6787 8.91451 16.5039 9.11604 15.0973H13.886C14.0876 16.5029 15.0368 17.6776 16.3723 18.1673V23H6.62871H6.62976ZM23 18.56C23 21.0076 21.0087 23 18.56 23H17.6233V18.4044C17.6536 18.4044 17.6839 18.4065 17.7142 18.4065H22.999V18.56H23ZM17.7152 4.59248C17.6849 4.59248 17.6546 4.59457 17.6244 4.59457V0H18.561C21.0087 0 23.001 1.99133 23.001 4.44003V4.59353H17.7162L17.7152 4.59248Z"
              fill="url(#paint0_linear_4342_60)"
            />
            <defs>
              <linearGradient id="paint0_linear_4342_60" x1="2.5" y1="1.5" x2="20.5" y2="23" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EC9F23" />
                <stop offset="0.303913" stop-color="#FEE2B2" />
                <stop offset="0.470212" stop-color="#FEE2B2" />
                <stop offset="1" stop-color="#DBA02E" />
              </linearGradient>
            </defs>
          </svg>

          <h1 className="text-2xl font-bold">Чіп Чендж</h1>
        </Link>

        <nav className="flex gap-x-10 font-roboto text-sm font-light">
          <Link to="/" className={`hover:underline ${location.pathname === "/" ? "text-blue-400" : "text-gray-400"}`}>
            Послуги
          </Link>

          <Link to="/Converter" className={`hover:underline ${location.pathname === "/Converter" ? "text-blue-400" : ""}`}>
            Конвертер валют
          </Link>

          <Link to="/contact" className={`hover:underline ${location.pathname === "/contact" ? "text-blue-400" : ""}`}>
            Контакти
          </Link>

          <Link to="/about" className={`hover:underline ${location.pathname === "/about" ? "text-blue-400" : ""}`}>
            Задати питання
          </Link>
        </nav>
        <div className="flex gap-4">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.22222 14.3H4.44444V19.8H17.7778V2.2H4.44444V7.7H2.22222V1.1C2.22222 0.808262 2.33929 0.528472 2.54766 0.322183C2.75603 0.115892 3.03865 0 3.33333 0H18.8889C19.1836 0 19.4662 0.115892 19.6746 0.322183C19.8829 0.528472 20 0.808262 20 1.1V20.9C20 21.1917 19.8829 21.4715 19.6746 21.6778C19.4662 21.8841 19.1836 22 18.8889 22H3.33333C3.03865 22 2.75603 21.8841 2.54766 21.6778C2.33929 21.4715 2.22222 21.1917 2.22222 20.9V14.3ZM8.88889 9.9V6.6L14.4444 11L8.88889 15.4V12.1H0V9.9H8.88889Z"
              fill="#1F1E25"
            />
          </svg>

          <p>Осбобистий кабінет</p>
        </div>
      </div>
      <div className="flex place-content-around bg-bgImg bg-cover bg-no-repeat bg-center h-[400px] items-center container mx-auto">
        <div>
          <p className="text-4xl font-bold leading-[63.28px] text-white">Чіп Чендж</p>
          <p className="font-medium leading-[23.44px] text-white">Обмінник валют - навчальний</p>
          <div className="mt-[50px]">
            <Link to="/Converter" className="bg-white rounded px-[30px] py-[20px] ">
              Конвертер валют
            </Link>
          </div>
        </div>
        <div>
          <img src={CardImg} alt="Card" />
        </div>
      </div>
    </header>
  );
};

export default Header;
