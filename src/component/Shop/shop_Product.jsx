import React from "react";
import { useParams } from "react-router-dom";
import Pagination from "./Paginate";
import {NavLink} from "react-router";
import {card, compareList, favorite} from "../../info/info";

function ShopProduct({ data }) {
    const PRODUCTS_PER_PAGE = 100;
    const { page } = useParams();
    const currentPage = parseInt(page || 1, 10);

    const totalPages = Math.ceil(data.length / PRODUCTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const currentProducts = data.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

    function addFavorite(res){
        const selectedProduct = {
            id: res.active_card,
            name: res.name,
            img: res.thumbImg,
            card: res.card,
            count: res.action.buy_count
        };

        console.log(selectedProduct);
        favorite.push(selectedProduct);
        console.log("Updated favorite:", favorite);
    }

    function addCompare(res){
        const smallSizePrice = res.card[0]?.price || "N/A";

        const compareProduct = {
            id: res.active_card,
            name: res.name,
            smallSizePrice: smallSizePrice,
            inStock: res.action.buy_count,
            img: res.thumbImg
        };
        compareList.push(compareProduct)
        console.log("Favorite product added:", compareProduct);

    }

    return (
        <section className="products container section--lg">
            <div className="products__container grid">
                {currentProducts.map((res, i) => (
                    <div className="product__item" key={i}>
                        <div className="product__banner">
                            <a href="details.html" className="product__images">
                                <img
                                    src={res.thumbImg}
                                    alt=""
                                    className="product__img default"
                                />
                            </a>
                            <div className="product__actions">
                                <a href="#" className="action__btn" aria-label="Quick View">
                                    <i className="fi fi-rs-eye"></i>
                                </a>
                                <a  className="action__btn" aria-label="Add to Wishlist" onClick={() => addFavorite(res)}>
                                    <i className="fi fi-rs-heart"></i>
                                </a>
                                <a  className="action__btn" aria-label="Compare" onClick={() => addCompare(res)}>
                                    <i className="fi fi-rs-shuffle"></i>
                                </a>
                            </div>
                            <div className="product__badge light-pink">Hot</div>
                        </div>
                        <div className="product__content">
                            <span className="product__category">Clothing</span>
                            <a href="details.html">
                                <h3 className="product__title">{res.name}</h3>
                            </a>
                            <div className="product__rating">
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <i className="fi fi-rs-star"></i>
                            </div>
                            <div className="product__price flex">
                                {res.card.map((inf, l) => (
                                    <span className="new__price" key={l}>
                    {inf.size} : {inf.price}
                  </span>
                                ))}
                            </div>
                            <NavLink to={`/catalog/${res.active_card}`} className="action__btn cart__btn">
                                Add
                            </NavLink>

                        </div>
                    </div>
                ))}
            </div>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                basePath="/shop"
            />
        </section>
    );
}

export default ShopProduct;
