import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const showMoreHanler = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h1>О нас</h1>
      <div className="wrapper">
        <img
          className="wrap-img"
          src={
            "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxOTYwMjQ0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          }
          width="700px"
          height="350px"
          alt="burger"
        />
        <div className="card-about">
          <p className="card-text">
            {" "}
            Ищете, где можно вкусно и недорого перекусить, тогда вам к нам! Мы
            дружная команда, которая любит делать вкусные и сочные бургеры для
            вас. Первый ресторан мы открыли в 2001 г в городе Казань. Позже наши
            рестораны стали открываться по всей территории РФ. У нас всегда
            чисто, вежливый персонал и вкусная еда.
          </p>
          <button className="btnMenu" onClick={showMoreHanler}>
            меню 🍔
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
