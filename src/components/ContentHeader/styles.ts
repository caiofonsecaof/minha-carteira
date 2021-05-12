import styled from 'styled-components';

interface ITitleContainerProps{
    lineColor: string;
}

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 25px;
`;

export const TitleContainer = styled.h3<ITitleContainerProps>`
    > h1 {
        color: ${props=>props.theme.colors.white};

        &::after{
            content: '';
            display: block;
            width: 55px;
            border-bottom: 5px solid ${props=>props.lineColor};
        }
    }
`;

export const Controllers = styled.div`
    display:flex;
    align-items: center;
`;