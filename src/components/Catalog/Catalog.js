import React from "react";
import "./Catalog.scss";

const Catalog = ({ cards, addToBasket, basket }) => {
  const basketClass = id =>
    basket.find(el => el.id === id)
      ? "green large shopping cart big link icon"
      : "cart plus big link icon";
  return (
    <div className="ui cards">
      {cards.map(card => (
        <div className="card" key={card.name}>
          <div className="content">
            <h1 className="header">{card.name}</h1>
            <div className="description">{card.label}</div>
            <div className="price--block">
              <div>
                {card.price}
                <i className="dollar sign icon" />
              </div>
              <i
                className={basketClass(card.id)}
                onClick={() => addToBasket(card)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
