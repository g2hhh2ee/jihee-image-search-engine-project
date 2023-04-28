import styled from 'styled-components';

import ImageCard from './ImageCard';

const Container = styled.div`
    max-width: 1830px;
    margin: 8px auto;
    padding-right: 8px;
`;

const ResultsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

const ResultContainer = ({ data }) => {
    return (
        <Container>
            <ResultsWrapper>
                {data.hits?.map((imgData) => (
                    <ImageCard key={imgData.id} imgData={imgData} />
                ))}
            </ResultsWrapper>
        </Container>
    );
};

export default ResultContainer;
