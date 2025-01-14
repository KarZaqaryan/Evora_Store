import React, { useState, useEffect } from "react";
import { compareList as initialCompareList } from "../info/info";
import { NavLink } from "react-router-dom";

function Compare() {
    const [compareList, setCompareList] = useState([]);

    useEffect(() => {
        setCompareList(compareList);
    }, [compareList]);

    if (!Array.isArray(compareList) || compareList.length === 0) {
        return <p>No products to compare.</p>;
    }

    const deleteItem = (id) => {
        const updatedList = compareList.filter((item) => item.id !== id);
        setCompareList(updatedList);
    };

    return (
        <section className="compare container section--lg">
            <table className="compare__table">
                <thead>
                <tr>
                    <th>Image</th>
                    {compareList.map((product) => (
                        <td key={product.id}>
                            <img
                                src={product.img || "/path/to/placeholder.png"}
                                alt={product.name || "No image available"}
                                className="compare__img"
                            />
                        </td>
                    ))}
                </tr>
                <tr>
                    <th>Name</th>
                    {compareList.map((product) => (
                        <td key={product.id}>
                            <h3 className="table__title">{product.name}</h3>
                        </td>
                    ))}
                </tr>
                <tr>
                    <th>Price</th>
                    {compareList.map((product) => (
                        <td key={product.id}>
                                <span className="table__price">
                                    {product.smallSizePrice || "N/A"}
                                </span>
                        </td>
                    ))}
                </tr>
                <tr>
                    <th>Stock</th>
                    {compareList.map((product) => (
                        <td key={product.id}>
                                <span className="table__stock">
                                    {product.count !== undefined
                                        ? product.count > 0
                                            ? `${product.count} in stock`
                                            : "Out of stock"
                                        : "Stock unavailable"}
                                </span>
                        </td>
                    ))}
                </tr>
                <tr>
                    <th>Weight</th>
                    {compareList.map((product) => (
                        <td key={product.id}>
                            <span className="table__weight">200g</span>
                        </td>
                    ))}
                </tr>
                <tr>
                    <th>Buy</th>
                    {compareList.map((product) => (
                        <td key={product.id}>
                            <NavLink to={`/catalog/${product.id}`}>
                                <a href="#" className="btn btn--sm">
                                    Add to Cart
                                </a>
                            </NavLink>
                        </td>
                    ))}
                </tr>
                <tr>
                    <th>Remove</th>
                    {compareList.map((product) => (
                        <td key={product.id}>
                            <i
                                className="fi fi-rs-trash table__trash"
                                onClick={() => deleteItem(product.id)}
                            ></i>
                        </td>
                    ))}
                </tr>
                </thead>
            </table>
        </section>
    );
}

export default Compare;
