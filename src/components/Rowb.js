import React, { useState } from "react";
import "../components_css/Row.css";
import { Link } from "react-router-dom";
import b1 from "./photos/b1.jpg"
import b2 from "./photos/b2.jpg"
import b3 from "./photos/b3.jpg"
import b4 from "./photos/b4.jpg"
import b5 from "./photos/b5.jpg"
import b6 from "./photos/b6.jpg"
import b7 from "./photos/b7.jpg"
import b8 from "./photos/b8.jpg"
import b9 from "./photos/b9.jpg"
import b10 from "./photos/b10.jpg"


function Rowb() {
  const data = [
    { src: b1, key: 1, price: '554', name: 'something', color: 'black', material: 'cotton' },
    { src: b2, key: 2, price: '555', name: 'something', color: 'black', material: 'cotton' },
    { src: b3, key: 3, price: '556', name: 'something', color: 'black', material: 'cotton' },
    { src: b4, key: 4, price: '557', name: 'something', color: 'black', material: 'cotton' },
    { src: b5, key: 5, price: '558', name: 'something', color: 'black', material: 'cotton' },
    { src: b6, key: 6, price: '559', name: 'something', color: 'black', material: 'cotton' },
    { src: b7, key: 7, price: '550', name: 'something', color: 'black', material: 'cotton' },
    { src: b8, key: 8, price: '554', name: 'something', color: 'black', material: 'cotton' },
    { src: b9, key: 9, price: '554', name: 'something', color: 'black', material: 'cotton' },
    { src: b10, key: 10, price: '554', name: 'something', color: 'black', material: 'cotton' }
  ]


  const [Display, setDisplay] = useState(false);
  const [Details, setDetails] = useState("");
  const [Size, setSize] = useState("");

  const clickHandler = (data) => { if (Display) { setDisplay(false); setDetails("") } else { setDisplay(true); setDetails(data) } }

  return (
    <div className="row">
      <h2>Top Arrivals</h2>
      <div className="row_posters">
        {data.map((data) => (<img onClick={() => clickHandler(data)} alt={data.name} key={data.key} src={data.src} className="row_poster row_poster_large"></img>))}
      </div>
      <div className={`pop_up ${Display && "pop_up_display"}`}>
        <img src={Details.src} alt={Details.name} className='pop_up_img' />
        <form className='details'><h1>{Details.name}</h1>
          <br></br>
          <h2>Price : ₹{Details.price}</h2>
          <br></br>
          <h2>Size: <select label='select' value={Size} onChange={(e) => setSize(e.target.value)} className='select_btn'>
            <option>-Select-</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
          </h2>
          <br></br>
          <h2>colour: {Details.color}</h2>
          <br></br>
          <h2>material: {Details.material}</h2>
          <br></br><br></br>
          <Link to='/checkout'>
            <button className='buynow_btn' onClick={() => {
              localStorage.setItem("product", JSON.stringify(Details));
              localStorage.setItem('size', Size);
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }}>buy now</button>
          </Link>
        </form>
      </div>
    </div>
  );
}


export default Rowb;
