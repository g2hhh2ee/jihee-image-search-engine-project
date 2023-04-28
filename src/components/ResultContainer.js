import styled from 'styled-components';
import { useState } from 'react';

import ImageCard from './ImageCard';
import EmptyResult from './EmptyResult';
import Pagination from './Pagination';
import ImageModal from './ImageModal';

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
    const [currentImageDetail, setCurrentImageDetail] = useState(null);

    return (
        <Container>
            {currentImageDetail && (
                <ImageModal
                    currentImageDetail={currentImageDetail}
                    setCurrentImageDetail={setCurrentImageDetail}
                />
            )}
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
                        <ImageCard
                            key={imgData.id}
                            imgData={imgData}
                            onClick={() => setCurrentImageDetail(imgData)}
                        />
                    ))
                ) : (
                    <EmptyResult />
                )}
            </ResultsWrapper>
        </Container>
    );
};

export default ResultContainer;
