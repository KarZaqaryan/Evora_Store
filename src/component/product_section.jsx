import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper React components
import { Navigation } from 'swiper'; // Swiper Navigation module
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation styles


function ProductSection({products}) {

useEffect(() => {
    console.log(products)
})
    return (
        <section className="categories container section">
            <h3 className="section__title">
                <span>Popular</span> Categories
            </h3>
            <Swiper
                navigation
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {products.slice(0,5).map((category) => (
                    <SwiperSlide key={category.id} className="category__item">
                        <a href="shop.html">
                            <img src={category.thumbImg} alt={category.name} className="category__img" />
                            <h3 className="category__title">{category.title}</h3>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>/
        </section>
    );
}

export default ProductSection;
