import styled from 'styled-components';
import Search from './Search';

const Container = styled.div`
    width: 100%;
    position: relative;
    background-color: var(--secondary);
`;

const HeroTitle = styled.h1`
    margin: 8px 0px;
`;

const HeroTitleLink = styled.a`
    text-decoration: none;
    color: var(--text);
    &:hover {
        color: var(--highlight);
    }
`;

const HeroSubtitle = styled.p`
    margin: 0px;
    color: var(--highlight);
    font: 24px;
`;

const Content = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 120px 32px 16px 32px;
`;

const Hero = ({ setQuery, setOrder, setOrientation }) => {
    return (
        <Container>
            <Content>
                <HeroTitle>
                    <HeroTitleLink href="./">
                        이미지 소스 검색 엔진
                    </HeroTitleLink>
                </HeroTitle>
                <HeroSubtitle>관심있는 키워드를 입력하세요!</HeroSubtitle>
                <Search
                    setQuery={setQuery}
                    setOrientation={setOrientation}
                    setOrder={setOrder}
                />
            </Content>
        </Container>
    );
};

export default Hero;
