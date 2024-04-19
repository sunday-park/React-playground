import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
    return (
        <Routes path="/nomad-react-beginner/movie-app">
            <Route path="/" element={<Home />}/>
            <Route path="/movie/:id" element={<Detail />}/>
        </Routes>
    );
}

export default App;
