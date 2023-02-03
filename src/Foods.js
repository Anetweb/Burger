function Foods({ foodForSale }) {
  return (
    <div className="products">
      {foodForSale.map((element) => {
        const { id, name, price, image } = element;

        return (
          <div className="product-card" key={id}>
            <img  className="fon"src={image} width="400px" height="300px" alt="item" />
            <div className="product-info">
              <h4>{name}</h4>
              <h4>{price}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Foods;
