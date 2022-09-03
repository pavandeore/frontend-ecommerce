import React, { useEffect, useState } from "react";
import { databaseAtom, cartAtom } from "../atoms/cartAtom";
import { useAtom } from "jotai";

const Item = (props) => {
  const [items, setItems] = useAtom(databaseAtom);
  const [cartitems, setCartItems] = useAtom(cartAtom);

  const addToCartHandler = (item) => {
    setCartItems((prev) => [...new Set([...prev, item])]);
  };

  const plusHandler = (item) => {
    items.map((it) => (it.id == item.id ? it.quantity++ : null));
    setItems([...items]);
  };

  const minusHandler = (item) => {
    items.map((it) => (it.id == item.id ? it.quantity-- : null));
    setItems([...items]);
  };

  return (
    <div className="w-50">
      <h4>{props.item.name}</h4>
      <p> &#8377; {props.item.price}</p>
      <div className="d-flex justify-content-between w-75">
        <span>{props.item.quantity}</span>
        <span className="mr-5">
          <button onClick={() => plusHandler(props.item)}>+</button>
          <button onClick={() => minusHandler(props.item)}>-</button>
        </span>
      </div>
      <button
        onClick={() => addToCartHandler(props.item)}
        className="px-2 mt-2"
      >
        add to cart
      </button>
    </div>
  );
};

export default Item;
