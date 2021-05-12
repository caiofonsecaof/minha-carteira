import React from 'react';
import { Container, TitleContainer, Controllers } from './styles';


interface IContentHeaderProps{ //criamos interfaces para passar como parâmetro no content header
    title: string;
    lineColor: string;
    children: React.ReactNode; //variável do tipo para receber elementos, no caso um <select>
}

const ContentHeader: React.FC<IContentHeaderProps> = ({title, lineColor,children}) =>{ //passamos os elementos da interface como parâmetro

    return (
        <Container > {/*sempre colocar a estrutura de tags dentro de um bloco de códigos no typescript*/}
            <TitleContainer lineColor={lineColor}>
                <h1>{title}</h1>
            </TitleContainer>
            <Controllers>
                {children}
            </Controllers>
        </Container>
    );
}

export default ContentHeader;