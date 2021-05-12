
import React from 'react';

import { Container } from './styles';

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined; //toda vez que mudar o valor dentro do option ele captura esse valor
    defaultValue?: string | number; //valor default pode ser string ou number e a utilização de interrogação indica que é parâmetro opcional
}

const ContentHeader: React.FC<ISelectInputProps> = ({ options, onChange, defaultValue }) => {
    return (
        <Container> {/*sempre colocar a estrutura de tags dentro de um bloco de códigos no typescript*/}
            <select onChange={onChange} defaultValue={defaultValue}>
                {
                    options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </Container>
    );
}

export default ContentHeader;
