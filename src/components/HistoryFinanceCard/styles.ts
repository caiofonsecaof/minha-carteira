import styled from 'styled-components';


interface ITagProps{
    color: string;
}

export const Container = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    background-color : ${props=>props.theme.colors.tertiary};
    list-style: none;
    border-radius: 5px;
    margin: 10px 0;
    padding: 12px 10px;
    
    position: relative; /*deixa o posicionamento relativo ao elemento tag */

    transition: all .3s;
    &:hover{
        opacity: .7;
        transform: translateX(10px);
    }

    >div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
    }

    >div span{
        font-weight: 500;
        font-size: 18px;
    }

`;

export const Tag = styled.div<ITagProps>`
    width: 6px;
    height: 60%;
    background-color: ${props=>props.color};
    position: absolute; /*torna o elemento edit*/
    left: 0px;
`;