import { useState } from "react";

function Counter() {
    const [value, setValue] = useState(0);

    function increase() {
        return setValue(value + 1);
    }

    function decrease() {
        return setValue(value - 1);
    }

    function reset() {
        return setValue(0);
    }

    
    return (
        <>
            <p>--|{value}|--</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>x</button>
        </>
    )
}

export default Counter