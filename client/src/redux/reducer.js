// import { GET_BREEDS } from "./actions";

// const initialState = {
//     dogs : [],
      
// };


// const rootReducer = (state= initialState, action) => {
//     switch(action.type){
//         case GET_BREEDS:
//             return {...state, users: action.payload};
//         default:
//             return {...state};
//     }

// };

// export default rootReducer;
import { GET_BREEDS } from "./action-types";
  
//   import { filterAndOrder, paginatedbreeds } from "./Helpers/Helpers";
  
  const initialState = {
    breeds: [],
    breedsFilteredAndOrdered: [],
    temperaments: [],
  };
  
  const reducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case GET_BREEDS:
        //Reducer recibe el estado q va a modificar(initialstate) recibe la action que acabo de despechar, evalua la action type,y retorna un estado nuevo, donde la propiedad breeds sea igual a payload. REDUX NO MODIFICA EL ESTADO, PISA EL ESTADO
        return {
          ...state,
          breeds: payload,
        //   breedsFilteredAndOrdered: payload,
        };
  
    //   case GET_TEMPERAMENTS:
    //     return { ...state, temperaments: action.payload };
  
    //   case GET_BREEDS_BY_NAME:
    //     return {
    //       ...state,
    //       breeds: action.payload,
    //       breedsFilteredAndOrdered: action.payload,
    //     };
  
    //   case GET_BREEDS_BY_ID:
    //     return { ...state, breedByID: action.payload };
  
    //   case FILTER_AND_ORDER:
    //     return {
    //       ...state,
    //       breedsFilteredAndOrdered: filterAndOrder(state.breeds, payload),
    //     };
  
    //   case PAGINATED_BREEDS:
    //     return {
    //       ...state,
    //       Page: paginatedbreeds(state.Page, payload),
    //     };
      default:
        return { ...state };
    }
  };
  
  export default reducer;