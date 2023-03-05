import React from 'react'
import { Link } from 'react-router-dom';


export default function Country(props) {

  let { img, name, population, region, capital, alt } = props;

  return (
    <>
      <Link to={`/details/${name}`}  className='col-lg-3 col-md-6 col-sm-8 text-decoration-none'>
        <div className="country-card">
          <div className="country-img">
            <img className='w-100' src={img} alt={alt} />
          </div>
          <div className="country-info p-3">
            <h5 className='my-2'>{name}</h5>
            <p><span>Population:</span> {population}</p>
            <p><span>Region:</span> {region}</p>
            <p><span>Capital:</span> {capital}</p>
          </div>
        </div>
      </Link>
    </>
  )
}
