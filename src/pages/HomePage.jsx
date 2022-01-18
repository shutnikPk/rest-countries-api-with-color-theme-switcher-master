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
                            <Card key={country.name} onClick={() => navigate(`/country/:${country.name}`, { replace: false, state: { nsme: country.name } })} {...countryInfo} />
                        )
                    })
                }
            </List>
        </>
    );
}

export default HomePage;