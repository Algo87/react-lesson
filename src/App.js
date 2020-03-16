import React from 'react';
import './App.css';
import './index.css';
import Header from "./header/header";
import Main from "./Main/mainBlock";
import Todo from "./todo/todo";
import For from "./for/for";
import Reward from "./reward/reward";
import Guid from "./guid/guid";
import FAQ from "./faq/faq";
import MainForm from "./MainPageForm/mainForm";
import Footer from "./Footer/footer";


function App() {
    return (
        <div className="App">
            <Header/>

            <Main/>
            <Todo/>
            <For/>
            <Reward/>
            <Guid/>
            <FAQ/>
            <MainForm/>
            <Footer/>
        </div>
    );
}

export default App;
