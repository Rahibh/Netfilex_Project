
import series from "../api/series.json";
import { SeriesCard } from "./seriesCard";


const NetflixSeries = () => {
  return (
    <ul class="grid grid-three--cols"> {
     
    }   
        {series.map((data)=>{
            return(
                <SeriesCard key={data.id}     data={data}/>
            )
        })}
    </ul>
  )
}

export default NetflixSeries
