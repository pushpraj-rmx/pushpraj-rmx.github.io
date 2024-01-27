import { useState } from "react"

function State() {
    const [initial, setInitial] = useState(0)

    function increment() {
        return setInitial(initial + 1)
    }

    function decrease() {
        return setInitial(initial - 1)
    }

    function reset() {
        return setInitial(0)
    }


    return (
        <>
            <p>
                value : {initial}
            </p>
            <button onClick={increment}>
                increase
            </button>
            <button onClick={decrease}>
                decrease
            </button>
            <button onClick={reset}>
                reset
            </button>
        </>
    )

}

export default State