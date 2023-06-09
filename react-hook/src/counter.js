import { useState } from "react";

function useCounter(val, step) {
    const [counter, setCounter] = useState(val)

    function increment() {
        setCounter(counter + step)
    }

    function decrement() {
        setCounter(counter - step)
    }

    return [counter, increment, decrement]
}

export default useCounter