import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import './hotelDetails.css';
import { Link } from "react-router-dom";
import Flickity from 'react-flickity-component';

function HotelDetails() {
    const [elem, setElem] = useState([]);
    const port = "https://hollidaze.herokuapp.com";

    useEffect(() => {
        let id = window.location.href.split('id=').pop();
        axios.get(`${port}/hotels/getById/${id}`)
            .then(res => setElem(res.data))
            .catch(err => console.log(err))
    }, [])


    const Flickity = require('react-flickity-component');

    // const flickityOptions = {
    //     initialIndex: 2
    // }
    const flickityOptions = {
        initialIndex: 2,
        accessibility: true,
        pageDots: true,
        wrapAround: true,
        autoPlay: false, // default false
    }

    return (
        <>
            <Navbar />
            <Header />
            {elem._id && <div className="container">
                <div className="row">
                    <h1 style={{ fontWeight: '700', margin: '5% 0 2% 5%' }}>{elem.name} Details</h1>
                    <div className="col-12 col-sm-12 col-md-5 mt-5">
                        <Flickity className={'carousel'} elementType={'div'} options={flickityOptions} disableImagesLoaded={false} reloadOnUpdate dynamic>
                            {elem.images.map((el,idx) => {
                                return <img src={`${el.src}`} key={idx} style={{width: '400px', height: '400px', objectFit: 'cover', margin: '4px', borderRadius: '8px'}} />
                            })}
                        </Flickity>

                        {/* <img src={`${elem.img}`} style={{width: '500px', height: '500px', objectFit: 'cover', borderRadius: '5px'}} /> */}
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 outerDiv mt-5">
                        <div className="siDesc">
                            <h1 className="siTitle m-2" style={{ fontSize: "50px", color: "black", textAlign: 'center' }}>{elem.name}</h1>
                            <span className="siDistance">500m from center</span>
                            <span className="siTaxiOp">Free airport taxi</span>
                            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
                        </div>
                        <div className="siDetails">
                            <div className="siRating">
                                <span>Excellent</span>
                                <button>Rating: 8.9</button>
                            </div>
                            <div>
                                <span className="siPrice">Price: <b>${elem.price_range}</b></span> &nbsp;
                                <span className="siTaxOp">Includes taxes and fees</span>
                            </div>
                        </div>
                        <div className="row">
                            <Link to="/enquiry"><button className="siCheckButton m-3" style={{ width: '95%' }}>Send Enquiry</button></Link>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default HotelDetails;
