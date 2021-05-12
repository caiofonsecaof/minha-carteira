import { profile } from 'node:console';
import React, {useMemo} from 'react';

import emojis from '../../utils/emojis';
import Toggle from '../Toggle';
import { Container, Profile, Welcome, UserName } from './styles';

const MainHeader: React.FC = () =>{

    const emoji = useMemo(() => { //useMemo serve recalcular valor memorizado, utiliza callback e dependencia
        const indice = Math.floor(Math.random()*emojis.length) //math random escolher randomicamente e floor para arredondar, e *emojis.length a qtidade de vezes a ser executado de acordo com o vetor emojis
        return emojis[indice];

    }, []);

    return (
        <Container> {/*sempre colocar a estrutura de tags dentro de um bloco de códigos no typescript*/}
            <Toggle></Toggle>

            <Profile>
                <Welcome>Olá, {emoji}</Welcome> {/* utilizamos o retorno da const emoji */}
                <UserName>Caio Fonseca</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;