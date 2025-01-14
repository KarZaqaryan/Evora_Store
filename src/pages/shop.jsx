import React, {useEffect} from 'react';
import Shop_Product from "../component/Shop/shop_Product";
import data from "../products.json";
import {useLoaderData} from "react-router-dom";
import {card} from "../info/info";

function Shop(props) {
    let data = useLoaderData()

    useEffect(() => {
        console.log(card)
    },[card])

    return (
        <div>
            <section className="breadcrumb">
                <ul className="breadcrumb__list flex container">
                    <li><a href="index.html" className="breadcrumb__link">Home</a></li>
                    <li><span className="breadcrumb__link"></span>></li>
                    <li><span className="breadcrumb__link">Shop</span></li>
                </ul>
            </section>
            <Shop_Product data={data}/>
        </div>
    );
}

export default Shop;

export async function ShopLoader() {
    return new Promise((resolve, reject) => {
        try {
            const data = require('../products.json');
            resolve(data);
        } catch (error) {
            resolve({error: 'Failed to load products'});
        }
    });
}