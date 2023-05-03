import styled from 'styled-components';

const EmptyResultContainer = styled.div`
    width: 100%;
    text-align: center;
    padding: 16px 0;
    line-height: 1.3;
    color: var(--highlight);
`;

const EmptyResult = ({ isLoading }) => {
    return (
        <EmptyResultContainer>
            {isLoading ? (
                <>
                    <h2>로딩중...</h2>
                    <br />
                    잠시만 기다려주세요
                </>
            ) : (
                <>
                    <h2>😔 검색 결과가 없습니다.</h2>
                    <br />
                    다른 키워드로 검색해 주세요.
                </>
            )}
        </EmptyResultContainer>
    );
};

export default EmptyResult;
