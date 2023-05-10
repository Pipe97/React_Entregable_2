import { useEffect, useState } from 'react'
import { getCoordinates } from './assets/services/getCoordinates'
import { getCUrrentWeather as getCurrentWeather } from './assets/services/getCurrentWeather';
import './App.css'

function App() {
  const [weather, setweather] = useState(null)
  const [isCelsius, setIsCelsius] = useState(true)
useEffect(() =>{
  const loadweather = async () =>{  
  const coordinates = await getCoordinates();
  if (coordinates) {
    const weatherData = await getCurrentWeather(coordinates.latitude, coordinates.longitude)
    setweather(weatherData);
     } else{
     }
  }
loadweather();
},[]);

  return (
  <>
  <h1 className='tittle_principal'>Weather App</h1 >
 { weather ? (
  <>

  <article className='container_principal'>
    <h2 className='subtitle'>{weather.weather.main}</h2>
    <p className='parrafo_1'>{weather.weather.description}</p>
    <p className='parrafo_2'>
      {isCelsius ? weather.temperature.celsius.toFixed(2): weather.temperature.farenheit.toFixed(2)}{" "}º{isCelsius ? "C": "F"}
    </p>
    <div className='icon'>
      <img src={weather.weather.icon} alt={weather.weather.description} />
    </div>
    <p>{weather.city}, {weather.country}</p>
  </article>
  <button className='change_button' onClick={() => setIsCelsius(!isCelsius)}>
    Change º {isCelsius ? "F": "C"}
  </button>
  </>
 ):<p className='loading'>Loading Weather...</p> }
  </>
  )
  }

  export default App


