function Kids() {
  return (
    <div className="container">
      <h1>Всё лучшее - Детям</h1>

      <div className="wrapper">
        <div className="card">
          <h4>Для самых маленьких- у нас есть вкусные Комбо-наборы!</h4>
          <img
            className="card-img"
            src={
              "https://images.unsplash.com/photo-1626253934161-08cfea22e968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjE0fHxnaWZ0JTIwYm94fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            width="400px"
            height="300px"
            alt="box"
          />
        </div>

        <div className="card">
          <h4>
            В каждом наборе находиться увлекательная игра, либо познавательная
            книга.
          </h4>
          <img
            className="card-img"
            src={
              "https://images.unsplash.com/photo-1561383507-2777ad5d74a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpbGRyZW4lMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            }
            width="400px"
            height="300px"
            alt="book"
          />
        </div>

        <div className="card">
          <h4>Вы сами можете выбрат подарок для вашего ребёнка!</h4>
          <img
            className="card-img"
            src={
              "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGNoaWxkcmVuJTIwcGxheWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }
            width="400px"
            height="300px"
            alt="child"
          />
        </div>
      </div>
    </div>
  );
}

export default Kids;
