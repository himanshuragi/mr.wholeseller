import React, { useState } from "react";
import "../components_css/Row.css";
import { Link } from "react-router-dom";
import h1 from "./photos/h1.jpg"
import h2 from "./photos/h2.jpg"
import h3 from "./photos/h3.jpg"
import h4 from "./photos/h4.jpg"
import h5 from "./photos/h5.jpg"
import h6 from "./photos/h6.jpg"
import h7 from "./photos/h7.jpg"
import h8 from "./photos/h8.jpg"
import h9 from "./photos/h9.jpg"
import h10 from "./photos/h10.jpg"




function Rowh() {
      const data = [
            { src: h1, key: 1, price: '554', name: 'something', color: 'black', material: 'cotton' },
            { src: h2, key: 2, price: '555', name: 'something', color: 'black', material: 'cotton' },
            { src: h3, key: 3, price: '556', name: 'something', color: 'black', material: 'cotton' },
            { src: h4, key: 4, price: '557', name: 'something', color: 'black', material: 'cotton' },
            { src: h5, key: 5, price: '558', name: 'something', color: 'black', material: 'cotton' },
            { src: h6, key: 6, price: '559', name: 'something', color: 'black', material: 'cotton' },
            { src: h7, key: 7, price: '550', name: 'something', color: 'black', material: 'cotton' },
            { src: h8, key: 8, price: '554', name: 'something', color: 'black', material: 'cotton' },
            { src: h9, key: 9, price: '554', name: 'something', color: 'black', material: 'cotton' },
            { src: h10, key: 10, price: '554', name: 'something', color: 'black', material: 'cotton' }
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


export default Rowh;
