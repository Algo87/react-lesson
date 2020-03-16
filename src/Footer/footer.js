import React from "react";
import NavItm from "../GeneralBLock/navItem";
import FooterContact from "./footerContact";
import contactPhone from '../img/phone_icon.svg';
import contactMail from '../../src/img/icon_mail.svg';

const data = [
    {title: "Возможности сервиса", hrefLink: '#b-iShack-todo'},
    {title: "Кому полезно", hrefLink: '#b-iShack-for'},
    {title: "Портнерская программа", hrefLink: '#b-iShack-reward'},
    {title: "Помощь", hrefLink: '#b-iShack-use-guide'},
    {title: "FAQ", hrefLink: '#b-iShack-faq'}
];

const contactData=[
    {contactHref:"tel:+375291234567", contactText:"+ 375 29 123 45 675", contactImg:{contactPhone}},
    {contactHref:"mailto:info@ishak.com", contactText:"info@ishak.com", contactImg:'img/icon_mail.svg'}

];

function Footer() {
    return (
        <footer className="b-iShack-footer b-iShack">
            <div className="b-footer__contact-border">
                <div className="b-iShack-container">
                    <FooterContact contactData={contactData}/>

                </div>
            </div>
            <div className="b-iShack-container">
                <div className="b-iShack-footer-nav b-iShack-nav">

                    <NavItm data={data}/>

                </div>
            </div>
            <div className="b-iShack-container">
                <div className="b-iShack-footer-bottom">

                    <a className="b-footer__conditions" href="#b-conditions">© 2020 iShack Условия
                        использования</a>

                    <a className="b-footer__up" href="#">Вверх</a>

                </div>
            </div>
        </footer>
    )

}

export default Footer;