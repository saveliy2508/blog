import React from 'react';
import './counter.scss'

const Counter = () => {
    const [state, setState] = React.useState(0);

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => setState(state + 1)}>Click</button>
        </div>
    );
};

export default Counter;
