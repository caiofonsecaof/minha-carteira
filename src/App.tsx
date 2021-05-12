import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import { ThemeProvider } from 'styled-components'; //leitura dos temas dark e light
import dark from './styles/themes/dark';

import Routes from './routes';


const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}> {/*criamos a tag do ThemeProvider e definimos o tema*/}
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    );
}

export default App;