import React, { useState, useEffect } from "react";
import CartSVG from "./CartSVG";

import { databaseAtom, cartAtom, totalAmountAtom } from "../atoms/cartAtom";
import { useAtom } from "jotai";

const Cart = () => {
  const [cartitems, setCartItems] = useAtom(cartAtom);
  const [items, setItems] = useAtom(databaseAtom);
  const [total, setTotal] = useAtom(totalAmountAtom);

  useEffect(() => {}, [cartitems]);

  useEffect(() => {
    items.map((it) => {
      it.quantity > 0 ? console.log(it.quantity * it.price) : null;
    });
  }, [items]);

  const plusHandler = (item) => {
    items.map((it) => (it.id == item.id ? it.quantity++ : null));
    setItems([...items]);
  };

  const minusHandler = (item) => {
    items.map((it) => (it.id == item.id ? it.quantity-- : null));
    setItems([...items]);
  };

  return (
    <div className="pt-5">
      <div class="dropdown">
        <button
          className="px-3 py-2 dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-auto-close="false"
          aria-expanded="false"
        >
          <CartSVG />
        </button>

        <ul class="dropdown-menu shadow p-3" style={{ width: "300px" }}>
          {cartitems.map((cartitem) => (
            <li className="list-item mt-2 d-flex justify-content-between">
              <span>
                {cartitem.name} x {cartitem.quantity}
                <span className="pl-3"> = {cartitem.price} </span>
              </span>
              <span>
                <button onClick={() => plusHandler(cartitem)}>+</button>
                <button onClick={() => minusHandler(cartitem)}>-</button>
              </span>
            </li>
          ))}

          <hr />
          <li className="list-item mt-2">{total}</li>
          <li className="list-item mt-3 bg-primary text-center py-2 text-white">
            proceed to payment
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
