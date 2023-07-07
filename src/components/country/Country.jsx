import React from 'react';
import './country.css'

const Country = (props) => {
    const{name ,population,flags}=props.country;
    console.log(props.country)
    return (
        <div className='country' >
            <img src={flags.png} alt="flag"  />
           <h2>CountryName:{name.common}</h2>
           <h3>population:{population}</h3> 
           <button>Details</button>
        </div>
    );
};

export default Country;