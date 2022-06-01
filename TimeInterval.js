import React, { useState } from "react";

export default function TimeInterval() {
  const [counter, setcounter] = useState(5);
  const [starttimer, setstarttimer] = useState(false);
  var myVar;

  if (starttimer == true) {
    myVar = setTimeout(function () {
      setcounter(counter + 1);
    }, 1000);
  }

  function myStopFunction() {
    clearTimeout(myVar);
  }
  return (
    <div>
      TimeInterval
      <h1>{counter}</h1>
      <button onClick={() => setstarttimer(true)}>start</button>
      <button onClick={() => myStopFunction()}>stop Timer</button>
    </div>
  );
}
