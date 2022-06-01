import React, { useState } from "react";
import "./App.css";
import ModalPop from "./Component/Modal";
import TimeInterval from "./TimeInterval";
function App() {
  const [showModalPop, setshowModalPop] = useState(false);
  return (
    <div>
      {/* <button className="button-87" onClick={() => setshowModalPop(true)}>
        Modalclick
      </button>

      {showModalPop ? <ModalPop /> : null} */}
      <TimeInterval></TimeInterval>
    </div>
  );
}

export default App;
