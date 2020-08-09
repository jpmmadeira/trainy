import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Pages/Landing';
import TrainerList from './Pages/TrainerList';
import TrainerForm from './Pages/TrainerForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/trainers" component={TrainerList} />
            <Route path="/be-a-trainer" component={TrainerForm} />
        </BrowserRouter>
    )
}

export default Routes;