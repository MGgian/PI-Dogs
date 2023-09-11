import CardsContainer from "../../components/CardsContainer/CardsContainer";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBreeds } from "../../redux/actions";


const Home = () => {
  const dispatch = useDispatch()

  useEffect (()=>{
    dispatch(getBreeds());
  },[dispatch])
    return (
        <>
          <h1> Esta es la vista de Home</h1>
          <CardsContainer />
        </>
    )
}

export default Home;