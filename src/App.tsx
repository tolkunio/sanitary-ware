import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";
import {Categories} from "./layout/sections/categories/Categories";

function App() {
    return (
        <div className="App">
            <Header/>
            <Categories/>
            <Footer/>
        </div>
    );
}

export default App;
