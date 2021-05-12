import React from 'react';
import { Container } from './styles';

//utilizamos o {children} para tornar o conteúdo dentro do componente content dinâmico...está referênciado em layout
const Content: React.FC = ({children}) =>{ 
    return (
        <Container> {/*sempre colocar a estrutura de tags dentro de um bloco de códigos no typescript*/}
            {children}
        </Container>
    );
}

export default Content;