import axios from "axios";
import { useState, useEffect } from "react"
import Controls from "../components/Controls";
import List from "../components/List";
import Card from "../components/Cards";

import { useNavigate } from 'react-router-dom'

import { ALL_COUNTRIES } from "../config";

const HomePage = () => {
    const [countries, setCountries] = useState([])

    const navigate = useNavigate()

    const goCountry = navigate(`/country/:${country.name}`)

    console.log(countries)
    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(
            ({ data }) => setCountries(data)
        )
    }, [])

    return (
        <>
            <Controls />
            <List>
                {
                    countries.map(country => {
                        const countryInfo = {
                            img: country.flags.png,
                            name: country.name,
                            info: [
                                {
                                    title: "Population",
                                    description: country.population.toLocaleString()
                                },
                                {
                                    title: "Region",
                                    description: country.region.toLocaleString()
                                }, {
                                    title: "Capital",
                                    description: country.capital.toLocaleString()
                                }
                            ],
                        }
                        return (
                            <Card key={country.name} onClick={() => goCountry}{...countryInfo} />
                        )
                    })
                }
            </List>
        </>
    );
}

export default HomePage;