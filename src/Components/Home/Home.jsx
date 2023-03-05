import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import Country from '../Country/Country';

export default function Home() {

  let [countries, setCountries] = useState([]);
  let [arrowVisibility, setArrowVisibility] = useState('hide');
  let [isLoading, setIsLoading] = useState(false);

  const getCountries = async (country) => {
    setIsLoading(true);
    let { data } = await axios.get(`https://restcountries.com/v3.1/${country}`);
    console.log(data);
    setCountries(data);
    setIsLoading(false);
  }

  let getInputValue = (e) => {
    let country = e.target.value;
    if (country === '') {
      getCountries('all');
    }
    else {
      getCountries(`name/${country}`)
    }
  }

  let getRegionValue = (e) => {
    let country = String(e.target.innerHTML).toLowerCase();
    getCountries(`region/${country}`);
    console.log(country);
  }

  useEffect(() => {
    getCountries('all');
  }, [])

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
      setArrowVisibility('show');
    }
    else{
      setArrowVisibility('hide')
    }
  })

  let scrollUp = () => {
    window.scrollTo(0, 0);
  }


  return (
    <>
      {/* this icon to go to top of the page */}
      <div className={`arrow-up ${arrowVisibility}`} onClick={scrollUp}>
        <i className="fa-solid fa-arrow-up" onClick={scrollUp}></i>
      </div>

      <div className="search-box w-100 mb-5">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className="search mb-3">
              <div className="input position-relative">
                <input type="text" onChange={getInputValue} className='form-control' placeholder='Search for a country...' />
                <span><i className="fa-solid fa-magnifying-glass"></i></span>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="regions">
              <button className="toggle" type="button">
                Filter by Region
              </button>
              <ul className="list">
                <li className="list-item" onClick={getRegionValue} name='africa'>Africa</li>
                <li className="list-item" onClick={getRegionValue} name='america'>America</li>
                <li className="list-item" onClick={getRegionValue} name='asia'>Asia</li>
                <li className="list-item" onClick={getRegionValue} name='europe'>Europe</li>
                <li className="list-item" onClick={getRegionValue} name='oceania'>Oceania</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? <div className="loading vh-100 d-flex justify-content-center align-items-center">
        <HashLoader
          color="white"
          size={50}
        />
      </div> :

        <div className="countries">
          <div className="row g-5 justify-content-center">
            {countries?.map((country, index) =>
              <Country
                img={country.flags.png}
                alt={country.flags.alt}
                name={country.name.common}
                population={country.population}
                region={country.region}
                key={index}
                capital={country.capital}
              />
            )}
          </div>
        </div>}

    </>
  )
}
