import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import './searchBar.css';

const SearchBar = () => {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3030/hotels/namesList')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const filterFunction = () => {
        var input, filter, ul, li, a, i, div, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }

    const toggleShow = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    return (
        <div>
            <div className="dropdown">
                <button className="dropbtn" onClick={toggleShow}>Search</button>
                <div id="myDropdown" className="dropdown-content">
                    <input type="text" placeholder="Search.." id="myInput" onKeyUp={filterFunction} />
                    {data.map((elem,idx) => {
                        return <a key={idx} href="#">{elem}</a>
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
