import styled from 'styled-components';

import Hero from './components/Hero';
import Footer from './components/Footer';

import './App.css';
import ResultContainer from './components/ResultContainer';

const Container = styled.div`
    min-height: 100vh;
    position: relative;
    background-color: var(--primary);
`;

function App() {
    return (
        <Container>
            <Hero />
            <ResultContainer />
            <Footer />
        </Container>
    );
}

export default App;
