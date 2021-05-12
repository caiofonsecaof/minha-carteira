import styled from 'styled-components';
import Switch , { ReactSwitchProps} from 'react-switch'; /*Importamos a classe do toggle*/

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.white};
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({theme}) =>({
        onColor: theme.colors.info,
        offColor: theme.colors.warning
    })) <ReactSwitchProps>`
    margin: 0 7px;
`;
/*para alterar um componente especifico o utilizamos entre parenteses no caso o (switch)...
para alterarmos propriedades desse elemento devemos utilizar o .attrs e passar a interface 
<ReactSwitchProps> para enxergar as propriedades desse componente*/