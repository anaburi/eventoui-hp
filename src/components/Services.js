import React, { Component } from 'react';
import { FaHotel, FaGlassCheers, FaCamera, FaMusic } from "react-icons/fa";
import Title from './Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaHotel/>,
                title:"the venue",
                info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            },
            {
                icon:<FaGlassCheers/>,
                title:"Food&Drinks",
                info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            },
            {
                icon:<FaCamera/>,
                title:"Photoshoot & videography",
                info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            },
            {
                icon:<FaMusic/>,
                title:"music, MCs & DJs",
                info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="included services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                        <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                    );
                    })}
                </div>
            </section>
        );
    }
}
