import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForYou from './pages/ForYou';
import TopTracks from './pages/TopTracks';
import TabNavigation from './components/TabNavigation';

const App = () => {
    return (
        <Router>
            <div className="app">
                <TabNavigation />
                <Routes>
                    <Route path="/foryou" element={<ForYou />} />
                    <Route path="/toptracks" element={<TopTracks />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
