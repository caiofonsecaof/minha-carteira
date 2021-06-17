import React, { useMemo, useState, useEffect } from 'react';
import { uuid } from 'uuidv4';

import { Container, Content, Filters } from './styles';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import ListOfMonths from '../../utils/months';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => { //match fica disponivel pelo react-router-dom 

    const [data, setData] = useState<IData[]>([]); //Data []> ([]) passamos o array no IData pois ele irá retornar varios objetos
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1)); //guardamos o mês selecionado no option e setamos para começar com o mês atual usando String(new Date().getMonth() + 1)
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear())); //guardamos o Ano selecionado no option e setamos para começar com o Ano atual usando String(new Date().getFullYear())

    const { type } = match.params;

    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas' //if ternário se type for = = = 'entry-balance' então 'Entradas' senão 'Saídas'
    }, [type]);

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E' //if ternário se type for = = = 'entry-balance' então '#F7931B' senão '#E44C4E'
    }, [type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type]);

    /*const months = [ //valor de months estático alterado para dinâmico abaixo

        { value: 3, label: 'Março' },
        { value: 1, label: 'Janeiro' },
        { value: 2, label: 'Fevereiro' },
        { value: 4, label: 'Abril' }
    ]*/

    const months = useMemo(() => {//useMemo para ler MESES dentro da lista de datas fornecidas e retorna dentro dos options

        return ListOfMonths.map((month, index) => { //Criamos uma lista em utils e a importamos
            return {
                value: index + 1, //pega a posição 0 e soma 1, ou seja janeiro = mes 1
                label: month,
            }
        });

    }, []);

  /*const years = [ //valor de years estático alterado para dinâmico abaixo

        { value: 2021, label: 2021 },
        { value: 2020, label: 2020 },
        { value: 2019, label: 2019 }
    ] */

    const years = useMemo(() => {     //useMemo para ler ANOS dentro da lista de datas fornecidas e retorna dentro dos options
            let uniqueYears: number[] = [];

            listData.forEach(item => {
                const date = new Date(item.date);
                const year = date.getFullYear();

                if (!uniqueYears.includes(year)) { //exclamação indica negação, ou seja, se o ano não ESTÁ INCLUSO dentro da lista, a função push o adiciona, garantindo que cada ano seja único
                    uniqueYears.push(year)
                }
        });

        return uniqueYears.map(year => { // depois de filtrado acima retorna apenas os anos que possuem registros 
            return {
                value: year,
                label: year,
            }
        });

    }, [listData]);



    useEffect(() => {

        const filteredData = listData.filter(item => { //filtramos datas por mês e ano
            const date = new Date(item.date);
            const month = String(date.getMonth() + 1);
            const year = String(date.getFullYear());

            return month === monthSelected && year === yearSelected
        });

        const formattedData = filteredData.map(item => {
            return {
                id: uuid(), //usamos para gerar id's aleatorios de acordo com o tamanho da lista
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dataFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',
            }
        });


        setData(formattedData);

    }, [listData, monthSelected, yearSelected, data.length])


    return (
        <Container> {/*sempre colocar a estrutura de tags dentro de um bloco de códigos no typescript*/}

            <ContentHeader title={title} lineColor={lineColor} > {/*PASSAMOS O TITLE CRIADO COM USEMEMO E LINECOLOR DA MESMA FORMA*/}
                <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
                <SelectInput options={years} onChange={(e) => setYearSelected(e.target.value)} defaultValue={yearSelected} />
            </ContentHeader>

            <Filters>
                
                <button className="tag-filter tag-filter-recurrent" type="button">
                    Recorrentes
                </button>

                <button className="tag-filter tag-filter-eventual" type="button">
                    Eventuais
                </button>

            </Filters>

            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key={item.id} //quando utilizamos o map, devemos sempre garantir que a lista terá uma key
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dataFormatted}
                            amount={item.amountFormatted}
                        />
                    ))

                }
            </Content>

        </Container>
    );
}

export default List;