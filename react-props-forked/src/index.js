import React from "react";
import ReactDOM from "react-dom";


function Card(props){
  return(
  <div>
    <h2>{props.name}</h2>
    <img 
      src={props.img}
      alt = "avatar.jpg"
      />
      <p>{props.tel}</p>
      <p>{props.email}</p>
  </div>
  );
}

ReactDOM.render( 
  <div>
  <Card 
    name="Ayush"
    img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    tel = "2345782480"
    email = "dshfgkgf@gmail.com"
    />
    <Card 
    name="jack"
    img = "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    tel = "97659284756"
    email = "dkuyfasdkh@gmail.com"
    />
   <Card 
    name="chuck"
    img = "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
    tel = "8763487236"
    email = "dsdafhjhjka@gmail.com"
    />
    </div>,
  document.getElementById("root")
);



