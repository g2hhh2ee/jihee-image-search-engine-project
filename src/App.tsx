import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import './App.css';

import { IGetImagesResponse, Orientation, Order } from './types';
import getImages from './api/getImages';

import Title from './components/Title';
import Search from './components/Search/Search';
import Footer from './components/Footer';
import ImageContainer from './components/Image/ImageContainer';
import ToggleThemeButton from './components/ToggleThemeButton';
import EmptyResult from './components/EmptyResult';

const Container = styled.div`
    min-height: 100vh;
    position: relative;
    background-color: var(--primary);
`;

const Header = styled.div`
    width: 100%;
    position: relative;
    background-color: var(--secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 120px 32px 16px 32px;
`;

function App() {
    const [data, setData] = useState<IGetImagesResponse>({
        total: 0,
        totalHits: 0,
        hits: [],
    });
    const [query, setQuery] = useState('');
    const [orientation, setOrientation] = useState<Orientation>('all');
    const [order, setOrder] = useState<Order>('popular');
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
                page: page.toString(),
                per_page: perPage.toString(),
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

    const callback: IntersectionObserverCallback = ([entries]) => {
        if (entries.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        if (!target.current) return;
        const observer = new IntersectionObserver(callback, {
            threshold: 1,
        });
        observer.observe(target.current);
    }, []);

    useEffect(() => {
        setPage(1);
    }, [query, orientation, order, perPage]);

    return (
        <>
            <Container>
                <Header>
                    <Title />
                    <Search
                        setQuery={setQuery}
                        setOrientation={setOrientation}
                        setOrder={setOrder}
                        setPerPage={setPerPage}
                    />
                </Header>
                <ImageContainer
                    data={data}
                    // page={page}
                    // setPage={setPage}
                    // numOfPages={numOfPages}
                />
                {page !== numOfPages && (
                    <div ref={target}>
                        <EmptyResult isLoading={data.totalHits} />
                    </div>
                )}
                <Footer />
                <ToggleThemeButton />
            </Container>
        </>
    );
}

export default App;
