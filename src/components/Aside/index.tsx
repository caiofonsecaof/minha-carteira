import React from 'react';
import logoImg from '../../assets/logo.svg'
import { Container, Header, LogoImg, MenuContainer, MenuItemLink, Title} from './styles';
import { MdDashboard, MdArrowDownward, MdArrowUpward,MdExitToApp} from 'react-icons/md';

const Aside: React.FC = () =>{
    return (
        <Container> {/*sempre colocar a estrutura de tags dentro de um bloco de códigos no typescript*/}
            <Header>
                <LogoImg src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard">
                    <MdDashboard/>
                    DashBoard
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward/>
                    Saídas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdExitToApp/>
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside;