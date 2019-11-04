import React from "react";
import "./Basket.scss";

const Basket = ({ basket, addAmount, takeAmount, deleteElement }) => {
  return (
    <>
      <div className="ui cards">
        {basket.map(element => (
          <div className="card" key={element.id}>
            <div className="content">
              <i
                className="red times circle outline large link icon"
                onClick={() => deleteElement(element.id)}
              />
              <h1 className="header">{element.name}</h1>
              <div className="info">
                <div className="element--price--block">
                  <div>
                    {element.price}
                    <i className="dollar sign icon" />
                  </div>
                </div>
                <div className="counter--block">
                  <i
                    className={
                      element.amount > 1
                        ? "blue minus link icon"
                        : "disabled minus icon"
                    }
                    onClick={() => takeAmount(element.id)}
                  />
                  <div>{element.amount}</div>
                  <i
                    className="blue plus link icon"
                    onClick={() => addAmount(element.id)}
                  />
                </div>
              </div>
              <div className="total--price--block">
                {`Sum:  ${element.price * element.amount}`}
                <i className="dollar sign icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
        {basket.length > 0 && (
      <div className="basket--price">
        <div className="inner--block">
            <div>
          Total:  {`${basket.reduce((acc, el) => acc + el.price * el.amount, 0)}`}
            <i className="dollar sign icon" />
            </div>
            <button className="positive large ui button">Make an order</button>
        </div>
      </div>
        )}
        {basket.length === 0 && (
            <div className="empty--basket">Your basket is empty <i className="blue shopping cart icon"/></div>
        )}
    </>
  );
};

export default Basket;
