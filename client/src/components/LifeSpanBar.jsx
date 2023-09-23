import React, { useState } from "react";
import { useLifeAmount } from "../context/LifeAmountContext";
import AnimatedNumbers from "react-animated-numbers";
const LifeSpanBar = () => {
  const { lifeAmount, setLifeAmount } = useLifeAmount();
  console.log(lifeAmount);
  const [isWantToEdit, setIsWantToEdit] = useState(false);
  return (
    <div className="sticky top-0">
      <nav className="my-5 flex justify-center items-center p-5 bg-gradient-to-t from-green-400 via-green-500 to-green-400">
        {!isWantToEdit ? (
          // <p
          //   onClick={() => setIsWantToEdit(true)}
          //   className="text-3xl text-white font-bold"
          // >
          //   {lifeAmount.amount} {lifeAmount.type}
          // </p>
          <AnimatedNumbers
        includeComma
        animateToNumber={lifeAmount.amount}
        fontStyle={{ fontSize: 40 }}
        locale="en-US"
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers>
        ) : (
          <form action="" onSubmit={() => setIsWantToEdit(false)}>
            <input
              className="p-3"
              value={lifeAmount.amount ? lifeAmount.amount : ""}
              onChange={(e) =>
                setLifeAmount((prev) => ({
                  ...prev,
                  amount: Number(e.target.value),
                }))
              }
              type="number"
            />{" "}
          </form>
        )}
      </nav>
    </div>
  );
};

export default LifeSpanBar;
