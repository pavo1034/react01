import { CDN_URL } from "../utils/constant";


const RestaurentCard = (props)=>
  {
    const resturantData = props;
    return <div className="res-card"  style={{backgroundColor:"#f0f0f0"}} >
           <img className="res-logo" src={CDN_URL + resturantData.resData.info.cloudinaryImageId} />
           <h3>{resturantData.resData.info.name}</h3>
           <h4>{resturantData.resData.info.cuisines.join(",")}</h4>
           <h4>{resturantData.resData.info.avgRatingString}</h4>
           <h4>{resturantData.resData.info.costForTwo}</h4>
           <h4>{resturantData.resData.info.slaString}</h4>
    </div>
  } 

  export default RestaurentCard;