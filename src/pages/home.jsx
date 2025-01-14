import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import First_section from '../component/HomePage/first_section';
import Product_section from '../component/HomePage/product_section';
import Clothings from "../component/HomePage/clothings";
import Deals from "../component/HomePage/deals";
import NewArrivals from "../component/HomePage/newArrivals";
import Showcase from "../component/HomePage/showcase";
import NewsLetter from "../component/HomePage/newsLetter";

function Home() {
    // Fetch products data using the loader
    const { categories, products } = useLoaderData();
    const [state, setState] = useState([]);

    // useEffect(() => {
    //     console.log(categories, products);
    // }, [products]);

    return (
        <main className="main">
            <First_section />
            <Product_section state={categories}/>
            <Clothings state={products}/>
            <Deals/>
            <NewArrivals state={products}/>
            <Showcase state={products}/>
        </main>
    );
}

export default Home;

export async function CategoriesLoader() {
    return new Promise((resolve, reject) => {
        try {
            const data = require('../categories.json');
            resolve(data);
        } catch (error) {
            resolve({ error: 'Failed to load categories' });
        }
    });
}

export async function ProductsLoader() {
    return new Promise((resolve, reject) => {
        try {
            const data = require('../products.json');
            resolve(data);
        } catch (error) {
            resolve({ error: 'Failed to load products' });
        }
    });
}

export async function MainLoader() {
    return new Promise((resolve) => {
        Promise.allSettled([CategoriesLoader(), ProductsLoader()]).then((results) => {
            resolve({
                categories: results[0].status === 'fulfilled' ? results[0].value : { error: 'Default categories data' },
                products: results[1].status === 'fulfilled' ? results[1].value : { error: 'Default products data' },
            });
        });
    });
}
