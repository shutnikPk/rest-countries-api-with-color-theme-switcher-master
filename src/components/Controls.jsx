import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Search from './Search'
import { CustomSelect } from './CustomSelect'

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' }
]

const Wraper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;

    @media(min-width: 767px){
        flex-direction: row;
        justify-content: space-between;        
        align-items: center;
    }
`

const Controls = () => {
    const [search, setSearch] = useState('')
    const [region, setRegion] = useState('')
    return (
        <Wraper>
            <Search search={search} setSearch={setSearch} />
            <CustomSelect
                options={options}
                placeholder='Filter by region'
                isClearable
                isSearchable={false}
                value={region}
                onChange={setRegion}
            />
        </Wraper>
    );
}

export default Controls;