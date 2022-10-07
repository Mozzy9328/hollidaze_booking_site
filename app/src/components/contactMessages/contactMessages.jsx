import axios from "axios";
import { useState } from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

function ContactUs() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [subject, setSubject] = useState('');
    let [message, setMessage] = useState('');
    const port = "https://hollidaze.herokuapp.com";

    const submitMessage = () => {
        let obj = {name, email, subject, message};
        axios.post(`${port}/contactMessages`, obj)
        .then(res => {
            console.log(res.data);
            alert('Your message has been submitted. We will respond you soon. Thanks.');
            clearFields();
        })
        .catch(err => console.log(err))
    }

    const clearFields = () => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (    
        <>
        <Navbar />
        <Header />
        <div className="container">
            <div className="row mt-5">
                <h1>Contact Us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque praesentium in ipsam itaque numquam incidunt optio. Dolores quaerat recusandae molestiae reiciendis, modi magnam, iusto aliquam praesentium quasi, soluta quod.</p>
                <div className="col-12">
                    <label>Name</label>
                    <input className="form-control" placeholder="Enter Name" type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="col-6">
                    <label>Email</label>
                    <input className="form-control" placeholder="Enter Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="col-6">
                    <label>Subject</label>
                    <input className="form-control" placeholder="Enter Subject" type="text" value={message} onChange={e => setMessage(e.target.value)} />
                </div>
                <div className="col-12">
                    <label>Message</label>
                    <input className="form-control" placeholder="Enter Message" type="text" value={subject} onChange={e => setSubject(e.target.value)} />
                </div>
            <button className="btn btn-primary btn-sm mt-2 mb-3" onClick={submitMessage}>Submit</button> 
            </div>
        </div>
        </>
    );
}

export default ContactUs;