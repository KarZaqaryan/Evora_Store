import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { card, favorite } from "../info/info";

function SingleCard() {
    const { productId } = useParams();
    const info = useLoaderData();

    useEffect(() => {
        console.log(productId);
    }, [productId]);

    const product = info.find(item => item.active_card.toString() === productId);

    const [selectedPrice, setSelectedPrice] = useState(product?.card[0].price || "");
    const [selectedSize, setSelectedSize] = useState(product?.card[0].size || "");
    const [quantity, setQuantity] = useState(1);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleImageClick = (price, size) => {
        setSelectedPrice(price);
        setSelectedSize(size);
    };

    const incrementQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
    const decrementQuantity = () => setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));

    function addCart(id) {
        const res = card.findIndex(
            item => item.id.active_card === id.active_card && item.size === selectedSize
        );

        if (res !== -1) {
            card[res].quantity += quantity;
        } else {
            const selectedProduct = {
                id: id,
                name: product.name,
                size: selectedSize,
                price: selectedPrice,
                quantity: quantity,
                thumbImg: product.thumbImg,
            };
            card.push(selectedProduct);
        }

        console.log("Updated cart:", card);
    }

    function removeSize(id) {
        const res = card.findIndex(
            item => item.id.active_card === id && item.size === selectedSize
        );

        if (res !== -1) {
            card.splice(res, 1);
            console.log(`Removed product with ID ${id} and size ${selectedSize}`);
        } else {
            console.log("No matching product size to remove.");
        }

        console.log("Updated cart:", card);
    }

    function addFavorite(res) {
        const selectedProduct = {
            id: res.active_card,
            name: res.name,
            img: res.thumbImg,
            card: res.card,
            count: res.action.buy_count,
        };

        console.log(selectedProduct);
        favorite.push(selectedProduct);
        console.log("Updated favorite:", favorite);
    }

    return (
        <section className="details section--lg">
            <div className="details__container container grid">
                <div className="details__group">
                    <img
                        src={product.thumbImg}
                        alt={product.name}
                        className="details__img"
                    />
                    <div className="details__small-images grid">
                        {product.card.map((img, index) => (
                            <div
                                key={index}
                                className={`details__small-img-container ${
                                    selectedSize === img.size ? "selected" : ""
                                }`}
                                onClick={() => handleImageClick(img.price, img.size)}
                                style={{
                                    border: selectedSize === img.size ? "2px solid red" : "none",
                                }}
                            >
                                <img
                                    src={img.images[0]}
                                    alt={`${product.name} small ${index}`}
                                    className="details__small-img"
                                />
                                <span>{img.size}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="details__group">
                    <h3 className="details__title">{product.name}</h3>
                    <p className="details__brand">Brand: <span>{product.brand}</span></p>
                    <div className="details__price flex">
                        <span className="new__price">${selectedPrice}</span>
                    </div>
                    <p className="short__description">
                        {product.description || "No description available"}
                    </p>
                    <ul className="products__list">
                        {product.features?.map((feature, index) => (
                            <li key={index} className="list__item flex">
                                <i className={`fi-rs-${feature.icon}`}></i> {feature.text}
                            </li>
                        ))}
                    </ul>
                    <div className="details__action">
                        <div className="quantity-counter flex">
                            <button className="counter-btn" onClick={decrementQuantity}>-</button>
                            <span className="quantity">{quantity}</span>
                            <button className="counter-btn" onClick={incrementQuantity}>+</button>
                        </div>
                        <a className="btn btn--sm" onClick={() => addCart(product.active_card)}>Add To Cart</a>
                        <a className="details__action-btn">
                            <i className="fi fi-rs-heart" onClick={() => addFavorite(product)}></i>
                        </a>
                        <a className="btn btn--sm btn--danger" onClick={() => removeSize(product.active_card)}>Remove Size</a>
                    </div>
                    <ul className="details__meta">
                        <li className="meta__list flex"><span>SKU:</span>{product.sku}</li>
                        <li className="meta__list flex">
                            <span>Tags:</span>{product.tags?.join(', ') || "No tags"}
                        </li>
                        <li className="meta__list flex">
                            <span>Availability:</span> Items in Stock : {product.action.buy_count}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default SingleCard;
