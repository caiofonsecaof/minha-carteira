import React from 'react';
import { Switch, Route} from 'react-router-dom'; //instalar o react-router-dom para adm rotas e os tipos @types/react-router-dom

import Layout from '../components/Layout';
import Dashboard from '../pages/dashboard';
import List from '../pages/list';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/list/:type" exact component={List}/> {/*Utilizamos o type como parâmetro para aproveitar a mesma rota para duas diferentes telas = entradas e saídas*/}
        </Switch>
    </Layout>    
);

export default AppRoutes;