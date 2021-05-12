import React from 'react';
import { Container } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

const Layout: React.FC = ({children}) =>{
    return (
        <Container> {/*sempre colocar a estrutura de tags dentro de um bloco de códigos no typescript*/}
            <MainHeader />
            <Aside />
            <Content>
                {children} {/*utilizamos o {children} para tornar o conteúdo dentro do componente content dinâmico*/}
            </Content>
        </Container>
    );
}

export default Layout;