import React, { useState } from "react";
import "../components_css/Row.css";
import { Link } from "react-router-dom";
import c1 from "./photos/c1.jpg"
import c2 from "./photos/c2.jpg"
import c3 from "./photos/c3.jpg"
import c4 from "./photos/c4.jpg"
import c5 from "./photos/c5.jpg"
import c6 from "./photos/c6.jpg"
import c7 from "./photos/c7.jpg"
import c8 from "./photos/c8.jpg"
import c9 from "./photos/c9.jpg"
import c10 from "./photos/c10.jpg"


function Rowc() {
  const data = [
    { src: c1, key: 1, price: '554', name: 'something', color: 'black', material: 'cotton' },
    { src: c2, key: 2, price: '555', name: 'something', color: 'black', material: 'cotton' },
    { src: c3, key: 3, price: '556', name: 'something', color: 'black', material: 'cotton' },
    { src: c4, key: 4, price: '557', name: 'something', color: 'black', material: 'cotton' },
    { src: c5, key: 5, price: '558', name: 'something', color: 'black', material: 'cotton' },
    { src: c6, key: 6, price: '559', name: 'something', color: 'black', material: 'cotton' },
    { src: c7, key: 7, price: '550', name: 'something', color: 'black', material: 'cotton' },
    { src: c8, key: 8, price: '554', name: 'something', color: 'black', material: 'cotton' },
    { src: c9, key: 9, price: '554', name: 'something', color: 'black', material: 'cotton' },
    { src: c10, key: 10, price: '554', name: 'something', color: 'black', material: 'cotton' }
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

export default Rowc;
