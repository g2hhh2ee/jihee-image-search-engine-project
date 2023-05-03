import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

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
    const [data, setData] = useState({ total: 0, totalHits: 0, hits: [] });
    const [query, setQuery] = useState('');
    const [orientation, setOrientation] = useState('all');
    const [order, setOrder] = useState('popular');
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(20);
    const numOfPages = data.totalHits ? Math.ceil(data.totalHits / perPage) : 0;
    const target = useRef(null);

    useEffect(() => {
        const fetch = async () => {
            const data = await getImages({
                q: query,
                orientation: orientation,
                order: order,
                page: page,
                per_page: perPage,
            });
            if (page === 1) {
                setData(data);
            } else {
                setData((prevData) => ({
                    ...prevData,
                    hits: [...prevData.hits, ...data.hits],
                }));
            }
        };
        fetch();
    }, [query, orientation, order, page, perPage]);

    const callback = ([entries]) => {
        if (entries.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callback, {
            threshold: 1,
        });
        observer.observe(target.current);
    }, []);

    useEffect(() => {
        setPage(1);
    }, [query, orientation, order, perPage]);

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
            <div ref={target}>
                <h1>로딩중!!!</h1>
            </div>
            <Footer />
            <ToggleThemeButton />
        </Container>
    );
}

export default App;
