import React, { useEffect, useState } from "react";
const QUANTITY_LIMIT = 6;

const Card = ({ key, content }) => {
  const [quantity, setQuantity] = useState(1);
  const [plateOption, setPlateOption] = useState(() => {
    const firstOption = Object.keys(content.options[0] || {})[0];
    return firstOption || null;
  })
  const [totalCardValue, setTotalCardValue] = useState(() => {
    const firstOption = Object.values(content.options[0] || {})[0];
    return firstOption || null;
  });

  const handleQuantity = ({ target: { innerText: changeType } }) => {
    setQuantity((prev) => {
      if (changeType === "+" && prev < QUANTITY_LIMIT) return prev + 1;
      if (changeType === "-" && prev > 1) return prev - 1;
      return prev;
    });
  };

  const handleCardSize = ({ target: { value: sizeOption } }) => {
    setPlateOption(sizeOption);
  };

  useEffect(() => {
    const selectedValue = content.options[0][plateOption] || 0;
    const totalValue = selectedValue * quantity;
    setTotalCardValue(totalValue);
  }, [quantity, plateOption, content.options]);

  return (
    <div className="border rounded-lg flex flex-col">
      <div className="h-48">
        <img
          src={content.img}
          className="object-cover w-full h-full rounded-t-lg"
        />
      </div>
      <h3 className="px-4 text-lg pt-3">{content.name}</h3>
      <div className="mx-4 py-4 flex items-center justify-between border-b-2">
        <select onChange={handleCardSize} className="capitalize px-2 py-1">
          {Object.keys(content.options[0] || {}).map((key, index) => (
            <option key={index} value={key} className="capitalize">
              {key}
            </option>
          ))}
        </select>
        <div className="flex items-center gap-2">
          <h4>{"Quantity: "}</h4>
          <p className="flex justify-between items-center px-3 border md:gap-4 rounded-3xl disabled:cursor-not-allowed">
            <button onClick={handleQuantity} className="text-lg" disabled={quantity === 1}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={handleQuantity} className="text-lg" disabled={quantity === QUANTITY_LIMIT}>
              +
            </button>
          </p>
        </div>
      </div>
      <div className="py-3 px-4 flex justify-between items-center">
        <p>Value: {totalCardValue}</p>
        <button className="py-2 px-3 bg-green-600 text-white rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
