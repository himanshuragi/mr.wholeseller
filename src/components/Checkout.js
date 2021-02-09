import React from 'react'
import { Link } from "react-router-dom";
import "../components_css/Checkout.css";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { db } from "./Firebase"
import { useState } from 'react';

function Checkout() {
    let storageProductString = localStorage.getItem("product");

    let savedProduct = JSON.parse(storageProductString);
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")
    const [Address, setAddress] = useState("")
    const [Email, setEmail] = useState("")
    const today = new Date()
    const handleSubmit = (e) => {
        e.preventDefault()



        // var citiesRef = db.collection("demos");

        // citiesRef.doc(`Date - ${today.getDate()}, Time - ${today.getHours()}`).set({
        //     name: "San ancisco", state: "CA", country: "USA",
        //     capital: false, population: 860000,
        //     regions: ["west_coast", "norcal"]
        // });




        db.collection(`Guna - ${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`).add({
            name: Name,
            phone: Phone,
            address: Address,
            email: Email,
            product: savedProduct.name,
            price: savedProduct.price,
            Variant: savedProduct.color,
            Material: savedProduct.material,
            Size: localStorage.getItem("size"),
            Product_ID: savedProduct.src

        })
            .then(() => {
                alert("Order Placed Successfully")
            })
            .catch((error) => { alert(error.message) })

        setName("")
        setPhone("")
        setAddress("")
        setEmail("")
        // console.log(db.collection("orders-guna").get({
        //     name,
        //     phone,
        //     address,
        //     email,
        //     product,
        //     price,
        //     Variant,
        //     Material,
        // }))
        // console.log(today.getDate)
    }
    return (
        <div className='main'>
            <form className='form' onSubmit={handleSubmit}>
                <Link to='/'><ArrowBack className='arrow' fontSize="large" /></Link>

                <div className='container_checkout'>
                    <div className='info_holder'>
                        <h1>{savedProduct.name}</h1>
                        <div className='product_holder'><img className="product_img" src={savedProduct.src} alt={savedProduct.name}></img>
                            <div>
                                <h2>Price: ₹{savedProduct.price}</h2>
                                <h2>Variant: {savedProduct.color}</h2>
                                <h2>Material: {savedProduct.material}</h2>
                                <h2>Size: {localStorage.getItem("size")}</h2>
                            </div>
                        </div>
                    </div>
                    <div className='input_holder'>
                        <h1>Fill Your Contact Details</h1>
                        <input placeholder='Your Name' value={Name} onChange={(e) => setName(e.target.value)} />
                        <input placeholder='Phone Number' value={Phone} onChange={(e) => setPhone(e.target.value)} />
                        <input placeholder='Address In Guna' value={Address} onChange={(e) => setAddress(e.target.value)} />
                        <input placeholder='Email Id' value={Email} onChange={(e) => setEmail(e.target.value)} />
                        <button className="checkout_btn" type='submit'>Place Order Of  ₹{savedProduct.price}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Checkout
