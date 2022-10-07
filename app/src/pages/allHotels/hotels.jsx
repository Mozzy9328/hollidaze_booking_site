import axios from "axios";
import { useEffect, useState } from "react";
import './hotels.css';
import SearchBar from "../searchBar/searchBar";

function Hotels() {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3030/hotels')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <SearchBar />
                {data.map((elem, idx) => {
                    return <div className="col-3 ad" key={idx}>
                        <div className="row">
                            {/* <Link to={`/adDetails?id=${elem._id}`}> */}
                            <img className="col-12" src={elem.img} style={{ height: '200px', width: '300px', objectFit: 'cover' }} />
                            {/* </Link> */}
                            <span className="col-6">{elem.name}</span>
                            <span className="col-4 right">${elem.price_range}</span>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Hotels;