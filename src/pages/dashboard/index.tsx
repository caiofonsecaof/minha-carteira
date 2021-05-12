import React from 'react';
import { Container } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';


const Dashboard: React.FC = () => {

    const options = [

        { value: 'Caio', label: 'Caio' },
        { value: 'Felipe', label: 'Felipe' },
        { value: 'Ivone', label: 'Ivone' }
    ]

    return (
        <Container> {/*sempre colocar a estrutura de tags dentro de um bloco de códigos no typescript*/}
            <ContentHeader title="Dashboard" lineColor="#fff">
                <SelectInput options={options} onChange={() => { }} />
                <SelectInput options={options} onChange={() => { }} />
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;