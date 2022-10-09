import React , { useState , useEffect } from "react";

function Clock(props) {

    const [clock, setClock] = useState(0);

    useEffect(() => {
        const showClock = setInterval(() => {
           setClock(new Date().toLocaleTimeString())
        },1000);
        return () => clearInterval(showClock);
    }, []);

    return (
        <div>
            <h1>안녕, 리액트</h1>
            <h2>현재시간 : {clock}</h2>
        </div>
    )
}

export default Clock;