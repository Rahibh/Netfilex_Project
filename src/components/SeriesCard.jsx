import style from "./Netflix.module.css"
import styled from "styled-components";

export const SeriesCard = ({data}) => {

    const {id, img_url, name, rating, description,cast, genre, watch_url  } = data;

// const btn_style ={}
    const ButtonHammad = styled.button (
        {
 padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating > 8.5 ? "#00d42eff" : "#f7dc6f"}`,
    color: "#16151dff"
        }
    );
   
const Rating = styled.h3`
font-size: 1.6rem;
color: #7dcea0;
text-transform: capitalize
`;

const ratingClass = rating > 8.5 ? style.super_hit : style.average;
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
        <div>
               <h2>Name:{name}</h2>
    
        
    <Rating> 
    Rating: 
    <span className={`${style.rating} ${ratingClass}`}>
        {rating}
        </span>
</Rating>
        <p>Summary:{description}</p>
        <p>Genre:{genre}</p>
        <p>Cast:{cast}</p>
        <a href={watch_url}target="_blank" >
{/* <button style={btn_style}>Watch Now</button> */}

<ButtonHammad>Watch Now</ButtonHammad>


        </a>

        </div>
    </li>
)
}

