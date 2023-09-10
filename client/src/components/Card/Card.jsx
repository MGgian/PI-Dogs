import style from "./Card.module.css";


const Card = (props) => {
    return(
        <div className={style.card}>
            <p>Weigth:{props.weigth}</p>
            <p>Heigth:{props.Heigth}</p>
            <p>Temperament:{props.Temperament}</p>
            <p>Life_span:{props.Life_span}</p>
        </div>
    )
}

export default Card;