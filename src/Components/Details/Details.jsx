import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

export default function Details() {

    let params = useParams();

    let [country, setCountry] = useState([]);
    let [currencies, setCurrencies] = useState('');
    let [languages, setLanguages] = useState('');
    let [nativeName, setNativeName] = useState('');
    let [isLoading, setIsLoading] = useState(false);



    let getCountry = async () => {
        setIsLoading(true);
        let { data } = await axios.get(`https://restcountries.com/v3.1/name/${params.name}`);
        console.log(data)
        setCountry(data);
        // extract currencies of a country
        let currencies = Object.values(data[0]?.currencies);
        setCurrencies(currencies[0].name);

        let languages = Object.values(data[0]?.languages);
        setLanguages(languages[0]);

        let nativeName = Object.values(data[0]?.name.nativeName);
        setNativeName(nativeName[0].official);

        setIsLoading(false);
    }

    useEffect(() => {
        getCountry();
    }, [])


    return (
        <>
            {isLoading ? <div className="loading vh-100 d-flex justify-content-center align-items-center">
                <HashLoader
                    color="white"
                    size={50}
                />
            </div>
                : <div className="country-details d-flex align-items-center position-relative pt-5">
                    <Link className="back" to='/'>
                        <button className='back-btn'>Back</button>
                    </Link>
                    <div className="row w-100 justify-content-between">
                        <div className="col-lg-5 align-self-center">
                            <div className="img-box w-100">
                                <img src={country[0]?.flags.png} className='w-100' alt={country[0]?.flags.alt} />
                            </div>
                        </div>
                        <div className="col-lg-5 align-self-center">
                            <div className="country-name">
                                <h3 className='my-4'>{country[0]?.name.common}</h3>
                            </div>
                            <div className="info row d-flex justify-content-between">
                                <div className="col-lg-6">
                                    <div className="left-info">
                                        <p><span>Native Name: </span> {nativeName}</p>
                                        <p><span>Population:</span> {country[0]?.population}</p>
                                        <p><span>Region:</span> {country[0]?.region}</p>
                                        <p><span>Sub Region:</span> {country[0]?.subregion}</p>
                                        <p><span>Capital:</span> {country[0]?.capital[0]}</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-info">
                                        <p><span>Top Level Domain:</span> {country[0]?.tld[0]}</p>
                                        <p><span>Currencies:</span> {currencies}</p>
                                        <p><span>Languages:</span> {languages}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="country-borders">
                                {(country[0]?.borders) ? <>
                                    <span>Border Countries: </span>
                                    {country[0]?.borders?.map((border, index) =>
                                        <span key={index} className='border'>{border}</span>
                                    )}
                                </> : ''}

                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}
