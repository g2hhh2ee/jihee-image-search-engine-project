import styled from 'styled-components';
import { MouseEventHandler } from 'react';
import { IImage } from '../../types';

const Card = styled.div`
    margin-left: 8px;
    margin-bottom: 8px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 300px;
    padding: 8px;
    cursor: pointer;
`;

const Img = styled.img`
    width: 100%;
    border-radius: 4px;
`;

interface IImageCard {
    imgData: IImage;
    onClick: MouseEventHandler<HTMLDivElement>;
}

const ImageCard = ({ imgData, onClick }: IImageCard) => {
    const { previewURL, id } = imgData;
    return (
        <Card onClick={onClick}>
            <Img key={id} src={previewURL} width={150} height={100}></Img>
        </Card>
    );
};

export default ImageCard;
