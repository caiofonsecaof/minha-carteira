import React from 'react';

import { Container, Tag } from './styles';

interface IHistoryFinanceCardProps{
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

//quando declarar as propriedades da interface, incluir chaves
const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({tagColor,title,subtitle,amount}) =>{ 
    return (
        <Container > {/*sempre colocar a estrutura de tags dentro de um bloco de códigos no typescript*/}
            <Tag color={tagColor}/>
            <div>
                <span>{title}</span>
                <small>{subtitle}</small>
            </div>
            <h3>
                {amount}
            </h3>
        </Container>
    );
}

export default HistoryFinanceCard;