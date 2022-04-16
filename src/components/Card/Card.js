import React from 'react';

const Card = (props) => {
    console.log(props.card)
   const card=props.card;
   let totalPopulation=0;
   for (let i = 0; i < card.length; i++) {
       const country = card[i];
       totalPopulation=totalPopulation +country.population;
       
   }

    return (
        <div>
           <h1>total population: {totalPopulation}</h1>

        </div>
    );
};

export default Card;