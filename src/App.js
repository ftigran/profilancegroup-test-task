import React from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { News } from "./pages/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

function App() {
    return (
        <Router
        // basename={'https://ftigran.github.io/profilancegroup-test-task/'}
        >
            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/news" element={<News />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
