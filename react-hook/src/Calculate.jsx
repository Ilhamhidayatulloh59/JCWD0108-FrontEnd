import { useRef, useState } from "react";

export const Calculate = () => {
    const result = useRef()
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const handleOnChange = (e) => {
        if (e.target.name === "num1") {
            setNum1(+e.target.value)
        } else {
            setNum2(+e.target.value)
        }
    }

    const operation = (sign) => {
        if (sign === "+") {
            result.current.textContent = `${num1} ${sign} ${num2} = ${num1 + num2}`
        } else if (sign === "-") {
            result.current.textContent = `${num1} ${sign} ${num2} = ${num1 - num2}`
        } else if (sign === "*") {
            result.current.textContent = `${num1} ${sign} ${num2} = ${num1 * num2}`
        } else if (sign === "/") {
            result.current.textContent = `${num1} ${sign} ${num2} = ${num1 / num2}`
        }
    }

  return (
    <div>
      <input type="number" onChange={handleOnChange} name="num1" />
      <input type="number" onChange={handleOnChange} name="num2" />
      <button onClick={() => operation("+")}>+</button>
      <button onClick={() => operation("-")}>-</button>
      <button onClick={() => operation("*")}>*</button>
      <button onClick={() => operation("/")}>/</button>
      <h2 ref={result}>result here</h2>
    </div>
  );
};
