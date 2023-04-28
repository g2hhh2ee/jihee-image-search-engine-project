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
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetch = async () => {
            const data = await getImages({
                q: query,
            });
            setData(data);
        };
        fetch();
    }, [query]);

    return (
        <Container>
            <Hero setQuery={setQuery} />
            <ResultContainer data={data} />
            <Footer />
        </Container>
    );
}

export default App;
