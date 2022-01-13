import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoMoon, IoMoonOutline } from 'react-icons/io5'
import { Container } from './Container';

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: (--color-ui-base);
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    font-size: var(--fs-sm);
    color: var(--color-text);    
    
`

const Title = styled.a.attrs({ href: '/' })`        
    text-decoration: none;
    font-weight: var(--fw-bold);
`

const ModeSwitcher = styled.div`    
    cursor:pointer;
    text-transform: capitalize;
`

const Header = (props) => {

    const [theme, setTheme] = useState('light')

    useEffect(() => { document.body.setAttribute('data-theme', theme) }, [theme])

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is world?</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        <IoMoon size="14px" />
                        {/* {theme === 'light' ? (
                            
                        ) : (
                            <IoMoon size="14px" />
                        )} */}
                        <span style={{ marginLeft: '0.75rem' }}>{theme}</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>);
};

export default Header;