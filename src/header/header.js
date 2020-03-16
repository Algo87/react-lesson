import React from "react";
import iShackLogo from "../img/iShack-logo.svg";
import NavItm from "../GeneralBLock/navItem";

const data=[
    {title:"Возможности сервиса", hrefLink:'#b-iShack-todo'},
    {title:"Кому полезно", hrefLink:'#b-iShack-for'},
    {title:"Портнерская программа", hrefLink:'#b-iShack-reward'},
    {title:"Помощь", hrefLink:'#b-iShack-use-guide'},
    {title:"FAQ", hrefLink:'#b-iShack-faq'}
];
function Header (props){

    return(
        <header className="b-iShack-header b-iShack">
            <div className="b-iShack-container">
                <a className="b-iShack-header-logo" href='#about'>
                    <img src={iShackLogo} alt='logo'/>
                </a>
                <div className="b-iShack-header-nav b-iShack-nav">
                    <NavItm data={data}/>
                </div>
                <div className="b-iShack-header-sign-in">
                    <a className="blue-btn header-sign-in" href="#test">Вход</a>
                </div>
            </div>
        </header>
    )
}

export default Header;