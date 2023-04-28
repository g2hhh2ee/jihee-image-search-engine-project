import styled from 'styled-components';

import ImageCard from './ImageCard';
import EmptyResult from './EmptyResult';
import Pagination from './Pagination';

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

const ResultContainer = ({ data, page, setPage, numOfPages }) => {
    return (
        <Container>
            {data.hits?.length > 0 && (
                <Pagination
                    page={page}
                    setPage={setPage}
                    numOfPages={numOfPages}
                />
            )}
            <ResultsWrapper>
                {data.hits?.length > 0 ? (
                    data.hits?.map((imgData) => (
                        <ImageCard key={imgData.id} imgData={imgData} />
                    ))
                ) : (
                    <EmptyResult />
                )}
            </ResultsWrapper>
        </Container>
    );
};

export default ResultContainer;
