import styled from 'styled-components';
import { useState, useEffect } from 'react';

import getImages from './api/getImages';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ResultContainer from './components/ResultContainer';

import './App.css';

const Container = styled.div`
    min-height: 100vh;
    position: relative;
    background-color: var(--primary);
`;

function App() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetch = async () => {
            const data = await getImages();
            setData(data);
        };
        fetch();
    }, []);

    return (
        <Container>
            <Hero />
            <ResultContainer data={data} />
            <Footer />
        </Container>
    );
}

export default App;
