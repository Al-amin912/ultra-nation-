import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import Countrys from './components/Countrys/Countrys';
import Card from './components/Card/Card';

function App() {
  
  const [countries, setCountries] = useState([]);
  const [card,setCard]=useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data=>setCountries(data))
   


    .catch(error=>console.log(error))

  
   
  }, [])
  const handleAddCountry = (countryInfo)=>{
    console.log('added',countryInfo)
    const newCard = [...card,countryInfo];
    setCard(newCard)


  }
  
  return (
    <div className="App">
      <h1>country loaded:{countries.length}</h1>
      <h2>country added:{card.length}</h2>
      <Card card={card}></Card>
      <ul>
      {
          countries.map(country => <Countrys countryInfo={country}  handleAddCountry={ handleAddCountry} key={country.alpha3Code}></Countrys>)

            }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
