function Buttons({ filteredFoods }) {
  return (
    <div className="all-buttons">
      <button className="category" onClick={() => filteredFoods("бургеры")}>
        Бургеры
      </button>
      <button className="category" onClick={() => filteredFoods("напитки")}>
        Напитки
      </button>
      <button className="category" onClick={() => filteredFoods("картошка")}>
        Картошка
      </button>
      <button className="category" onClick={() => filteredFoods("десерты")}>
        Десерты
      </button>
      <button className="category" onClick={() => filteredFoods("новинки")}>
        Новинки
      </button>
    </div>
  );
}

export default Buttons;
