import React, { useEffect, useState } from 'react';
import { card } from "../info/info";
import { NavLink } from "react-router-dom";

const Cart = () => {
    // Local state to manage the cart products
    const [products, setProducts] = useState([]);

    // Load the card array into local state on component mount
    useEffect(() => {
        if (card && card.length > 0) {
            const initializedProducts = card.map(product => ({
                ...product,
                quantity: product.quantity || 1, // Default quantity to 1
                price: parseFloat(product.price) || 0, // Ensure price is a number
            }));
            setProducts(initializedProducts);
        } else {
            console.warn("The global 'card' array is empty.");
        }
    }, []);

    // Update the quantity of a product
    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity < 1) return;

        setProducts((prevProducts) => {
            const updatedProducts = prevProducts.map((product) =>
                product.id === id ? { ...product, quantity: newQuantity } : product
            );
            return updatedProducts;
        });
    };

    // Remove a product from the cart
    const handleRemoveProduct = (id) => {
        setProducts((prevProducts) => {
            const updatedProducts = prevProducts.filter(
                (product) => product.id !== id
            );
            return updatedProducts;
        });
    };

    // Update the global `card` array whenever local state changes
    useEffect(() => {
        card.length = 0;
        card.push(...products);
        console.log("Global 'card' array updated:", card);
    }, [products]);

    // Calculate the cart subtotal
    const cartSubtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);

    // Define shipping cost (e.g., $10)
    const shippingCost = 10;

    // Calculate the total (subtotal + shipping)
    const cartTotal = cartSubtotal + shippingCost;

    return (
        <section className="cart section--lg container">
            <div className="table__container">
                {products.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <img
                                        src={product.thumbImg}
                                        alt={product.name}
                                        className="table__img"
                                    />
                                </td>
                                <td>
                                    <h3 className="table__title">{product.name}</h3>
                                    <p className="table__description">{product.description || "No description available"}</p>
                                </td>
                                <td>
                                    <span className="table__price">${product.price.toFixed(2)}</span>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={product.quantity}
                                        className="quantity"
                                        min="1"
                                        onChange={(e) =>
                                            handleQuantityChange(product.id, +e.target.value)
                                        }
                                    />
                                </td>
                                <td>
                                        <span className="subtotal">
                                            ${((product.price || 0) * (product.quantity || 1)).toFixed(2)}
                                        </span>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleRemoveProduct(product.id)}
                                        className="table__trash"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>

            <div className="cart__actions">
                <a href="#" className="btn flex btn__md">
                    <i className="fi-rs-shuffle"></i> Update Cart
                </a>
                <NavLink to={'/shop'}>
                    <a className="btn flex btn__md">
                        <i className="fi-rs-shopping-bag"></i> Continue Shopping
                    </a>
                </NavLink>
            </div>

            <div className="cart__group grid">
                <div>
                    <div className="cart__shippinp">
                        <h3 className="section__title">Calculate Shipping</h3>
                        <form action="" className="form grid">
                            <input
                                type="text"
                                className="form__input"
                                placeholder="State / Country"
                            />
                            <div className="form__group grid">
                                <input type="text" className="form__input" placeholder="City"/>
                                <input
                                    type="text"
                                    className="form__input"
                                    placeholder="PostCode"
                                />
                            </div>
                            <div className="form__btn">
                                <button className="btn flex btn--sm">
                                    <i className="fi-rs-shuffle"></i> Update
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="cart__coupon">
                        <h3 className="section__title">Apply Coupon</h3>
                        <form action="" className="coupon__form form grid">
                            <div className="form__group grid">
                                <input
                                    type="text"
                                    className="form__input"
                                    placeholder="Enter Your Coupon"
                                />
                                <div className="form__btn">
                                    <button className="btn flex btn--sm">
                                        <i className="fi-rs-label"></i> Apply
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="cart__total">
                    <h3 className="section__title">Cart Totals</h3>
                    <table className="cart__total-table">
                        <tr>
                            <td><span className="cart__total-title">Cart Subtotal</span></td>
                            <td><span className="cart__total-price">${cartSubtotal.toFixed(2)}</span></td>
                        </tr>
                        <tr>
                            <td><span className="cart__total-title">Shipping</span></td>
                            <td><span className="cart__total-price">${shippingCost.toFixed(2)}</span></td>
                        </tr>
                        <tr>
                            <td><span className="cart__total-title">Total</span></td>
                            <td><span className="cart__total-price">${cartTotal.toFixed(2)}</span></td>
                        </tr>
                    </table>
                    <NavLink to={'/checkout'}>
                        <a className="btn flex btn--md">
                            <i className="fi fi-rs-box-alt"></i> Proceed To Checkout
                        </a>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Cart;
