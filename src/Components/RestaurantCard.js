import { CDN_URL } from "../utils/constant"
const RestaurantCard = (props) => {
    const {resData} = props
    console.log("this is ",resData)

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime
    } = resData
    return (
        <div className='res-card'>
            <img
                className='res-logo'
                alt="food img" src= {CDN_URL + resData.cloudinaryImageId}></img>
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.costForTwo}</h4>
            <h4>{resData.sla.deliveryTime} minutes</h4>

        </div>
    )
}

export default RestaurantCard