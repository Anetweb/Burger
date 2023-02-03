import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Foods from "./Foods";
import { carousel } from "./carousel";
import "./App.css";

function Home() {
  const [foods, setFoods] = useState(data);
  const [showMore, setShowMore] = useState(false);

  const text =
    "Ресторан быстрого питания Сочный бургер осуществляет доставку еды на дом. Просто делаете заказ, наш курьер осуществляет доставку в течение 45 минут. Вы сами определяете адрес доставки. Мы можем отправлять вам еду на ежедневной основе - это очень удобно. Главное, сразу предупреждать о том, если ваш адрес меняется.";

  const chosenFoods = (searchTerm) => {
    const newFoods = data.filter((foods) => foods.searchTerm === searchTerm);
    setFoods(newFoods);
  };

  const [slide, setSlide] = useState(0);
  const { images } = carousel[slide];

  const nextSlide = () => {
    setSlide((slide) => {
      slide++;
      if (slide > carousel.length - 1) {
        slide = 0;
      }
      return slide;
    });
  };

  return (
    <div>
      <div className="contBtn">
        <div className="slide">
          <img className="fon" src={images} width="900px" height="500px" alt="foto" />
        </div>
        <button className="btn" onClick={nextSlide}>
          next
        </button>
      </div>

      <div className="cont">
        <h2 className="rest">Наше меню</h2>
      </div>
      <Buttons filteredFoods={chosenFoods} />
      <Foods foodForSale={foods} />
      <h2 className="rest">Доставка</h2>
      <div className="textOne">
        <p>
          {showMore ? text : text.substring(0, 60) + "..."}
          <button className="btnOne" onClick={() => setShowMore(!showMore)}>
            {showMore ? "свернуть" : "подробнее"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Home;
