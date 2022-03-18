import React from "react";
import Card from "./Card";
import charecters from "../chareters";

function createEntry(item) {
  return (
    <Card
      key={item.id}
      name={item.name}
      detailInfo={item.detailInfo}
      img={item.img}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">Charecter Names</h1>
      {charecters.map(createEntry)};
    </div>
  );
}

export default App;
