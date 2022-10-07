import axios from "axios";
import { useState } from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import './enquiry.css';

function Enquiry() {
    let [address, setAddress] = useState('');
    let [price, setPrice] = useState('');
    let [description, setDescription] = useState('');
    let [contactNo, setContactNo] = useState('');
    const port = "https://hollidaze.herokuapp.com";

    const enterEnq = () => {
        let obj = {address, price, description, contactNo};
        axios.post(`${port}/enquiries`, obj)
        .then(res => {
            alert('Your enquiry has been submitted. Thanks');
            clearFields();
        })
        .catch(err => console.log(err))
    }

    const clearFields = () => {
        setAddress('');
        setPrice('');
        setDescription('');
        setContactNo('');
    }

    return (    
        <>
        <Navbar />
        <Header />
        <div className="container">
            <div className="row mt-5">
                <h1>Enquiry Page</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque praesentium in ipsam itaque numquam incidunt optio. Dolores quaerat recusandae molestiae reiciendis, modi magnam, iusto aliquam praesentium quasi, soluta quod.</p>
                <div className="col-12">
                    <label>Location</label>
                    <input className="form-control" placeholder="Enter Location" type="text" value={address} onChange={e => setAddress(e.target.value)} />
                </div>
                <div className="col-12">
                    <label>Price</label>
                    <input className="form-control" placeholder="Enter Price" type="number" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div className="col-12">
                    <label>Contact Number</label>
                    <input className="form-control" placeholder="Enter Contact Number" type="text" value={contactNo} onChange={e => setContactNo(e.target.value)} />
                </div>
                <div className="col-12">
                    <label>Description</label>
                    <input className="form-control" placeholder="Enter Description" type="text" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
            <button className="btn btn-success btn-sm mt-2 mb-3" onClick={enterEnq}>Submit</button> 
            </div>
        </div>
        </>
    );
}

export default Enquiry;
