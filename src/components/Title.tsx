import styled from 'styled-components';

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

const Title = () => {
    return (
        <>
            <HeroTitle>
                <HeroTitleLink href="./">이미지 소스 검색 엔진</HeroTitleLink>
            </HeroTitle>
            <HeroSubtitle>관심있는 키워드를 입력하세요!</HeroSubtitle>
        </>
    );
};

export default Title;
