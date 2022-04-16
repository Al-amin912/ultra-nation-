import React from 'react';
import './Countrys.css'

const Countrys = (props) => {
  
    const {countryInfo,handleAddCountry} = props;
    
    return (
        <div className="country">
            <h1>{countryInfo.name.common}</h1>
            <img src={countryInfo.flags.png} alt="" /><br />
            <button onClick={()=>handleAddCountry(countryInfo)}>add country</button>
            

        </div>
    );
};

export default Countrys;