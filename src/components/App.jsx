import React from "react";
import Card from "./Card";
import charecters from "../charecters";
function App() {
  return (
    <div>
      <h1 className="heading">Charecter Names</h1>
      <Card
        name={charecters[0].name}
        detailInfo={charecters[0].detailInfo}
        // img="https://static.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png/revision/latest/scale-to-width-down/300?cb=20160125175116"
        img={charecters[0].img}
      />
      <Card
        name={charecters[1].name}
        detailInfo={charecters[1].detailInfo}
        // img="https://static.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png/revision/latest/scale-to-width-down/300?cb=20160125175116"
        img={charecters[1].img}
      />
      <Card
        name={charecters[2].name}
        detailInfo={charecters[2].detailInfo}
        // img="https://static.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png/revision/latest/scale-to-width-down/300?cb=20160125175116"
        img={charecters[2].img}
      />
      <Card
        name={charecters[3].name}
        detailInfo={charecters[3].detailInfo}
        // img="https://static.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png/revision/latest/scale-to-width-down/300?cb=20160125175116"
        img={charecters[3].img}
      />
    </div>
  );
}

export default App;
