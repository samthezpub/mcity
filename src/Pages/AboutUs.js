import React from 'react'

import Container from '@mui/material/Container';
import NavBar from "../Components/NavBar";

import '../CSS/AboutUs/main.css'

import kulaki from '../Pictures/AboutUs/kulaki.png'
import kulaki_bg_dark from '../Pictures/AboutUs/kulaki-bg-dark.png'
import cloud_left from '../Pictures/AboutUs/cloud-left.png'
import cloud_right from '../Pictures/AboutUs/cloud-right.png'
import rectangle_after_kulaki from '../Pictures/AboutUs/rectange-after-kulaki.png'
import kulaki_bg_green from '../Pictures/AboutUs/kulaki-bg-green.png'

import monkey_smoking from '../Pictures/AboutUs/monkey-smoking.png';
import monkey_highlight from '../Pictures/AboutUs/monkey-highlight.png'
import quote from '../Pictures/AboutUs/quote.png'

import car from '../Pictures/AboutUs/car.png'
import car_bg from '../Pictures/AboutUs/car-bg.png'
import car_quote from '../Pictures/AboutUs/car_quote.png'

export default function AboutUs() {
    return (<>
            <NavBar></NavBar>
            <main>

                <div>
                    <div className="about block">
                        <Container maxWidth="xl">
                            <div className="about_text">
                                <h2 className="about_text_title">Про нас</h2>
                                <p className="about_text_description">Веб-дизайн студия MariupolCity.com
                                    стабильно работающая на рынке IT-услуг компания, которой реализовано более 200
                                    интернет-проектов для украинских, российских и западных заказчиков.</p>
                            </div>
                            <img className="about_kulaki" src={kulaki} alt="Mitu"/>
                            <img className="kulaki_bg_dark" src={kulaki_bg_dark}/>
                            <img className="cloud_left" src={cloud_left}/>
                            <img className="cloud_right" src={cloud_right}/>
                            {/*<img className="rectangle_after_kulaki" src={rectangle_after_kulaki}/>*/}
                        </Container>
                    </div>
                </div>

                <div className="our_principles block">
                    <img className="kulaki_bg_green" src={kulaki_bg_green}/>
                    <img className="monkey_highlight" src={monkey_highlight}/>
                    <img className="quote" src={quote}/>

                    <img className="monkey_smoking_image" src={monkey_smoking}/>

                    <div className="right_text">
                        <h2 className="title">Наши принципы</h2>
                        <p className="description">Сотрудничая с бизнесом мы подбираем максимально эффективные
                            инструменты исходя из поставленных задач. Мы тестируем нишу клиента и постоянно
                            вносим корректировки в стратегию продвижения, оценивая и анализируя все наши
                            действия. Мы ориентируемся на результат, максимальную эффективность и пользу для
                            клиента.</p>
                        <p className="description">Наш главный результат, это результаты и известность наших
                            клиентов в своей нише.</p>
                    </div>
                </div>
                <div className="advantages">
                    <Container sx={{height: "100%"}}>
                        <ul className="advantages_list">
                            <li>
                                <div className="card" style={{width: "130px"}}>
                                    <div className="card_title">12</div>
                                    <div className="card_description">
                                        лет опыта работы
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card" style={{width: "225px"}}>
                                    <div className="card_title">50</div>
                                    <div className="card_description">
                                        готовых решений
                                        для бизнеса
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="card" style={{width: "274px"}}>
                                    <div className="card_title">162</div>
                                    <div className="card_description">
                                        проектов
                                        приносящих прибыль
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Container>
                </div>

                <div className="advantages_after block">
                    <Container maxWidth="xl">
                        <div className="advantages_info">
                            <img className="car" src={car} width={644} height={440}/>
                            <img className="car_bg" src={car_bg} />
                            <img className="car_quote" src={car_quote} />


                            <div className="advantages_second">
                                <div className="avantage">
                                    <p className="advantages_second_title second_title">Индивидуальный подход</p>
                                    <p className="advantages_description description">к каждому Клиенту, не на словах, а
                                        подтвержденный делом, высокий уровень качества выпускаемой продукции, позволяют
                                        добиться максимального результата. Наша задача заключается в использовании
                                        своего
                                        опыта, знаний и технологий для решения маркетинговых и рекламных задач.</p>
                                </div>
                                <div className="avantage">
                                    <p className="advantages_second_title second_title">Индивидуальный подход</p>
                                    <p className="advantages_description description">обладают тремя важными качествами
                                        -
                                        честностью, ответственностью, стремлением быть лучшими в свое деле. Эти качества
                                        являются залогом прочных и долгосрочных отношений с нашими Клиентами.</p>
                                </div>
                                <div className="avantage">
                                    <p className="advantages_second_title second_title">Многие из Заказчиков</p>
                                    <p className="advantages_description description">студии являются постоянными
                                        Клиентами,
                                        из года в год, доверяя свои новые проекты, что безусловно говорит о качестве
                                        работы
                                        нашей веб-дизайн cтудии.</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>


            </main>
        </>
    )
}
