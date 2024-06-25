import RestaurantCard from './RestaurantCard'; // Adjust the import path based on your project structure
import resObj from '../utils/mockdata'; // Adjust the import path for your mock data
import { useState, useEffect } from 'react';
import Shimmer from './shimmer';

const Body = () => {
    // state variable, local state variable which is only available inside the component
    const [listOfRes, setListOfRes] = useState([]); // Initialize with an empty array
    const [searchText,setSearchText] = useState("")

    useEffect(() => {
        console.log("useEffect has been called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(`
https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
`);
        const json = await response.json();
        const resdata = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        console.log("Fetched data:", resdata);
        setListOfRes(resdata);
    };

    // if (listOfRes.length === 0) {
    //     return (
    //         <Shimmer></Shimmer>
    //     )
    // }

    return listOfRes.length === 0 ? (<Shimmer></Shimmer>) : (
        <div className='body'>
            <div className='Search'>
               
                    <input type='text' value={searchText} onChange={(e) => setSearchText(e.target.value)} className='serach-box'/> 
                    <button onClick={() => {
                        //filter the serach text from somewhere
                        console.log(searchText)
                        let filteredRes = listOfRes.filter((res) => res?.info?.name.includes(searchText) )
                        setListOfRes(filteredRes)
                        // take the value of input box
                    }}>Search</button>
                <button className='filter-btn' onClick={() => {
                    const filteredRes = listOfRes.filter(
                        (res) => res.info.avgRating > 4.4
                    );
                    setListOfRes(filteredRes);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className='res-container' style={{ backgroundColor: "#f0f0f0" }}>
                {listOfRes.length > 0 && listOfRes.map((restaurant) => (
                    <RestaurantCard key={restaurant?.info.id} resData={restaurant?.info} />
                ))}
            </div>
        </div>
    );
};

export default Body;
