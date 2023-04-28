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
    const [orientation, setOrientation] = useState('all');
    const [order, setOrder] = useState('popular');

    useEffect(() => {
        const fetch = async () => {
            const data = await getImages({
                q: query,
                orientation: orientation,
                order: order,
            });
            setData(data);
        };
        fetch();
    }, [query, orientation, order]);

    return (
        <Container>
            <Hero
                setQuery={setQuery}
                setOrientation={setOrientation}
                setOrder={setOrder}
            />
            <ResultContainer data={data} />
            <Footer />
        </Container>
    );
}

export default App;
