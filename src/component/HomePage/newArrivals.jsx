import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {NavLink} from "react-router-dom";

function NewArrivals({state}) {
    return (
        <section className="categories container section">
            <h3 className="section__title">
                <span>New</span> Arrivals
            </h3>
            <Swiper
                navigation
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                    640: {slidesPerView: 2},
                    768: {slidesPerView: 3},
                    1024: {slidesPerView: 4},
                }}
            >
                {state.slice(0,15).map((category) => (
                    <SwiperSlide key={category.id} className="category__item">
                        <a >
                            <img src={category.thumbImg} alt={category.name} className="category__img" />
                            <NavLink to={`catalog/${category.active_card}`}>
                                <h3 className="category__title">{category.name}</h3>
                            </NavLink>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default NewArrivals;