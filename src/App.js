import styled from 'styled-components';
import { useState, useEffect } from 'react';

import getImages from './api/getImages';

import Hero from './components/Hero';
import Footer from './components/Footer';
import ResultContainer from './components/ResultContainer';
import ToggleThemeButton from './components/ToggleThemeButton';

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
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(20);
    const numOfPages = data.totalHits ? Math.ceil(data.totalHits / perPage) : 0;

    useEffect(() => {
        const fetch = async () => {
            const data = await getImages({
                q: query,
                orientation: orientation,
                order: order,
                page: page,
                per_page: perPage,
            });
            setData(data);
        };
        fetch();
    }, [query, orientation, order, page, perPage]);

    return (
        <Container>
            <Hero
                setQuery={setQuery}
                setOrientation={setOrientation}
                setOrder={setOrder}
                setPerPage={setPerPage}
            />
            <ResultContainer
                data={data}
                page={page}
                setPage={setPage}
                numOfPages={numOfPages}
            />
            <Footer />
            <ToggleThemeButton />
        </Container>
    );
}

export default App;
