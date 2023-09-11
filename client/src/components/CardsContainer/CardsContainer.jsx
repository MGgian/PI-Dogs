import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getBreeds } from "../../redux/actions";
import { useEffect } from "react";


const CardsContainer = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBreeds());
    },[dispatch])


   const dogs = useSelector(state=>state.dogs)
   

      
    return(
        <div className={style.container}> 
            {dogs?.map(dog=>{
                return <Card 
                  id={dog.id}
                  weight={dog.weight}
                  height={dog.height}
                  temperament={dog.temperament}
                  life_span={dog.life_span}
                />
            })}
           
        </div>
    )
};

export default CardsContainer;