import Card from "../Card/Card";
import style from "./CardsContainer.module.css";


const CardsContainer = () => {
    const dogs = [
        {
          "weight": {
            "imperial": "6 - 13",
            "metric": "3 - 6"
          },
          "height": {
            "imperial": "9 - 11.5",
            "metric": "23 - 29"
          },
          "id": 1,
          "name": "Affenpinscher",
          "bred_for": "Small rodent hunting, lapdog",
          "breed_group": "Toy",
          "life_span": "10 - 12 years",
          "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
          "origin": "Germany, France",
          "reference_image_id": "BJa4kxc4X"
        },
        {
          "weight": {
            "imperial": "55 - 90",
            "metric": "25 - 41"
          },
          "height": {
            "imperial": "18 - 24",
            "metric": "46 - 61"
          },
          "id": 7,
          "name": "Alapaha Blue Blood Bulldog",
          "description": "The Alapaha Blue Blood Bulldog is a well-developed, exaggerated bulldog with a broad head and natural drop ears. The prominent muzzle is covered by loose upper lips. The prominent eyes are set well apart. The Alapaha's coat is relatively short and fairly stiff. Preferred colors are blue merle, brown merle, or red merle all trimmed in white or chocolate and white. Also preferred are the glass eyes (blue) or marble eyes (brown and blue mixed in a single eye). The ears and tail are never trimmed or docked. The body is sturdy and very muscular. The well-muscled hips are narrower than the chest. The straight back is as long as the dog is high at the shoulders. The dewclaws are never removed and the feet are cat-like.",
          "bred_for": "Guarding",
          "breed_group": "Mixed",
          "life_span": "12 - 13 years",
          "history": "",
          "temperament": "Loving, Protective, Trainable, Dutiful, Responsible",
          "reference_image_id": "33mJ-V3RX"
        },
        {
          "weight": {
            "imperial": "40 - 65",
            "metric": "18 - 29"
          },
          "height": {
            "imperial": "21 - 23",
            "metric": "53 - 58"
          },
          "id": 4,
          "name": "Airedale Terrier",
          "bred_for": "Badger, otter hunting",
          "breed_group": "Terrier",
          "life_span": "10 - 13 years",
          "temperament": "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
          "origin": "United Kingdom, England",
          "reference_image_id": "1-7cgoZSh"
        },
        // ...otros perros
      ];

      // const dogs = useSelector(state=>state.dogs)
      
    return(
        <div className={style.container}> 
            {dogs.map(user=>{
                return <Card 
                  id={user.id}
                  weight={user.weight}
                  height={user.height}
                  temperament={user.temperament}
                  life_span={user.life_span}
                />
            })}
           
        </div>
    )
};

export default CardsContainer;