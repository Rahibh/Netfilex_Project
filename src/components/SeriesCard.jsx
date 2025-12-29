export const SeriesCard = ({data}) => {

    const {id, img_url, name, rating, description,cast, genre, watch_url  } = data;

const btn_style ={
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating > 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    color: "#16151dff"
}
    return(
    <li>
        <div>
            <img 
            src= {img_url} 
            alt={ name}
            
        width="100%"
         height="100%"           
            />
        </div>
        <h2>Name:{name}</h2>
        <h3>

    Rating: <span className= {`rating ${rating > 8.5 ? "super_hit"  : "average"}`}>
        {rating}
        </span>
</h3>
        <p>Summary:{description}</p>
        <p>Genre:{genre}</p>
        <p>Cast:{cast}</p>
        <a href={watch_url}target="_blank" >
<button style={btn_style}>Watch Now</button>


        </a>
    </li>
)
}

