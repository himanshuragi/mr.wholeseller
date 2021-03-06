import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components_css/Row.css";
import a1 from "./photos/a1.jpg"
import a2 from "./photos/a2.jpg"
import a3 from "./photos/a3.jpg"
import a4 from "./photos/a4.jpg"
import a5 from "./photos/a5.jpg"
import a6 from "./photos/a6.jpg"
import a7 from "./photos/a7.jpg"
import a8 from "./photos/a8.jpg"
import a9 from "./photos/a9.jpg"
import a10 from "./photos/a10.jpg"


function Rowa() {
  const data = [
    { src: a1, key: 1, price: '554', name: 'White Polo T-Shirt', color: 'Red & Yellow', material: 'cotton' },
    { src: a2, key: 2, price: '555', name: 'something', color: 'black', material: 'cotton' },
    { src: a3, key: 3, price: '556', name: 'something', color: 'black', material: 'cotton' },
    { src: a4, key: 4, price: '557', name: 'something', color: 'black', material: 'cotton' },
    { src: a5, key: 5, price: '558', name: 'something', color: 'black', material: 'cotton' },
    { src: a6, key: 6, price: '559', name: 'White Polo T-Shirt', color: 'black', material: 'cotton' },
    { src: a7, key: 7, price: '550', name: 'something', color: 'black', material: 'cotton' },
    { src: a8, key: 8, price: '554', name: 'something', color: 'black', material: 'cotton' },
    { src: a9, key: 9, price: '554', name: 'something', color: 'black', material: 'cotton' },
    { src: a10, key: 10, price: '554', name: 'something', color: 'black', material: 'cotton' }
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

export default Rowa;
