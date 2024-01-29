import RestaurentCard from "./RestaurentCard"
import restList from "../utils/mockData"


const Body = ()=>{
    return <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
       {
          restList.map((resObj)=>{
              return <RestaurentCard key={resObj.info.id} resData={resObj}/>
          })
       } 
      </div>
    </div>
  }
  
  export default Body
