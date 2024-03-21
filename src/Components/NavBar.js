import React from 'react'

import '../CSS/NavBar.css'

import logo from '../Pictures/logo.png'
import round from '../Pictures/NavBar/round.png'

export default function NavBar() {
    return (
        <header>
            <nav>
                <div className="navbar">
                    <a href="#" className="logo_link">
                        <img width={401} height={110} src={logo}/>
                    </a>

                    <ul className="navbar_list">
                        <li className="list_elem">
                            <a href="#" className="list_link">Главная</a>
                            <img src={round} width={11} height={11}/>
                        </li>
                        <li className="list_elem"><a href="#" className="list_link">О нас</a></li>
                        <li className="list_elem"><a href="#" className="list_link">Услуги</a></li>
                        <li className="list_elem"><a href="#" className="list_link">Портфолио</a></li>
                        <li className="list_elem"><a href="#" className="list_link">Контакты</a></li>
                    </ul>

                    <div className="header_button">
                        <button className="button">Начать проект</button>

                        <div className="button_highlight"></div>
                        <div className="button_underline"></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
