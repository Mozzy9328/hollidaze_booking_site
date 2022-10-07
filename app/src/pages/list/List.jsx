import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { UNSAFE_DataRouterStateContext, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import axios from "axios";
import { Link } from "react-router-dom";
// import Img from '../../1.png'

const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [openDate, setOpenDate] = useState(false);
	const [options, setOptions] = useState(location.state.options);
	let [data, setData] = useState([]);
	let [txt, setTxt] = useState('');
    const port = "https://hollidaze.herokuapp.com";

	useEffect(() => {
		axios.get(`${port}/hotels`)
			.then(res => {
				setData(res.data);
			})
			.catch(err => console.log(err))
	}, [])

	const filterFunction = () => {
		var input, filter, ul, li, a, i, div, txtValue;
		input = document.getElementById("myInput");
		document.getElementById("myDropdown").classList.add("show");
		if (input.value === '') document.getElementById("myDropdown").classList.remove("show");
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

	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-5">
						<div className="listContainer">
							<div className="listWrapper">
								<div className="listSearch">
									<h1 className="lsTitle">Search</h1>
									<div className="lsItem">
										<label>Destination</label>
										<input placeholder={destination} type="text" value={txt} id="myInput" style={{padding: '0px'}} onChange={e => setTxt(e.target.value)} onKeyUp={filterFunction} />
										<div id="myDropdown" className="dropdown-content" style={{ margin: '12% 0 0 2%' }}>
											{data.map((elem, idx) => {
												return <Link to={`/hotelDetails?id=${elem._id}`} className='hotelName' key={idx}>{elem.name}</Link>
											})}
										</div>
									</div>
									<div className="lsItem">
										<label>Check-in Date</label>
										<span onClick={() => setOpenDate(!openDate)}>{`${format(
											date[0].startDate,
											"MM/dd/yyyy"
										)} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
										{openDate && (
											<DateRange
												onChange={(item) => setDate([item.selection])}
												minDate={new Date()}
												ranges={date}
											/>
										)}
									</div>
									<div className="lsItem">
										<label>Options</label>
										<div className="lsOptions">
											<div className="lsOptionItem">
												<span className="lsOptionText">
													Min price <small>per night</small>
												</span>
												<input type="number" className="lsOptionInput" />
											</div>
											<div className="lsOptionItem">
												<span className="lsOptionText">
													Max price <small>per night</small>
												</span>
												<input type="number" className="lsOptionInput" />
											</div>
											<div className="lsOptionItem">
												<span className="lsOptionText">Adult</span>
												<input
													type="number"
													min={1}
													className="lsOptionInput"
													placeholder={options.adult}
												/>
											</div>
											<div className="lsOptionItem">
												<span className="lsOptionText">Children</span>
												<input
													type="number"
													min={0}
													className="lsOptionInput"
													placeholder={options.children}
												/>
											</div>
											<div className="lsOptionItem">
												<span className="lsOptionText">Room</span>
												<input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
											</div>
										</div>
									</div>
									<button>Search</button>
								</div>

							</div>
						</div>
					</div>
					{/* Hotels List */}

					<div className="col-12 col-sm-12 col-md-7">
						<div className="listResult">
							{data.map((elem, idx) => {
								return <Link to={`/hotelDetails?id=${elem._id}`} className="searchItem" key={idx}>
									{/* <img src="../../1.png" alt="" className="siImg" /> */}
									<img src={`${elem.images[0].src}`} alt="" style={{width: '200px', height: '265px', objectFit: 'cover'}} />
									<div className="siDesc">
										<h1 className="siTitle" style={{border: 'none'}}>{elem.name}</h1>
										<span className="siDistance">500m from center</span>
										<span className="siTaxiOp">Free airport taxi</span>
										<span className="siSubtitle">Studio Apartment with Air conditioning</span>
										<span className="siFeatures">Area: {elem.area}m²</span>
										<span className="siFeatures">{elem.description}</span>
										{/* <span className="siFeatures">Entire studio • 1 bathroom • 21m² 1 full bed</span> */}
										<span className="siCancelOp">Free cancellation </span>
										<span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
									</div>
									<div className="siDetails">
										<div className="siRating">
											<span>Excellent</span>
											<button>8.9</button>
										</div>
										<div className="siDetailTexts">
											<span className="siPrice">${elem.price_range}</span>
											<span className="siTaxOp">Includes taxes and fees</span>
											<Link to={`/hotelDetails?id=${elem._id}`}><button className="siCheckButton">See availability</button></Link>
										</div>
									</div>
								</Link>
							})}
						</div>



						{/* <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default List;
