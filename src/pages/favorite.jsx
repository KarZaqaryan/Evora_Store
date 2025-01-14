import React from 'react';
import { favorite } from "../info/info";
import {NavLink} from "react-router";

function Favorite() {
    return (
        <section className="wishlist section--lg container">
            <div className="table__container">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Stock Status</th>
                        <th>Action</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {favorite.length > 0 ? (
                        favorite.map((product) => (
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
                                    <p className="table__description">
                                        {product.description || "No description available"}
                                    </p>
                                </td>
                                <td>
                                        <span className={`table__stock ${product.inStock ? "in-stock" : "out-of-stock"}`}>
                                           in Stock
                                        </span>
                                </td>
                                <td>
                                    <NavLink to={`/catalog/${product.id}`}>
                                        <button className="btn btn--sm">Add to Cart</button>
                                    </NavLink>
                                </td>
                                <td>
                                    <button
                                        className="table__trash"
                                        onClick={() => console.log(`Remove product ID: ${product.id}`)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">
                                <p>Your favorite list is empty.</p>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Favorite;
