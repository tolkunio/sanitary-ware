import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";
import {Categories} from "./layout/sections/categories/Categories";
import {BestSellers} from "./layout/sections/bestSellers/BestSellers";
import {News} from "./layout/sections/news/News";
import {Promotionals} from "./layout/sections/promotionals/Promotionals";

function App() {
    return (
        <div className="App">
            <Header/>
            <Categories/>
            <BestSellers/>
            <News/>
            <Promotionals/>
            <Footer/>
        </div>
    );
}

export default App;
