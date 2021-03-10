import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/> 
            {/* exact pra fazer verificação se o endereço é igual, e não só comparar o primeiro caractere */}
            <Route component={CreatePoint} path="/create-point" />


        </BrowserRouter>
    );

}

export default Routes;