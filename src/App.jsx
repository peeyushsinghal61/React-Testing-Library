import React from "react";
function App() {
  return (
    <div className="App">
      <p>First react app</p>
      <input
        type="text"
        placeholder="Enter your name"
        name="user name"
        id="userid"
        value="Peeyush Singhal"
        readOnly  
      />
      <br />
      <img
        src="https://picsum.photos/200/300"
        className="logo"
        alt="logo"
        title="ramdom image"
      />
    </div>
  );
}

export default App;
