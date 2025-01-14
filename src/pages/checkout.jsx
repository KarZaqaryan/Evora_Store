import { card } from '../info/info';

function Checkout() {
    // Helper function to format currency
    const formatCurrency = (value) =>
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(value);

    // Calculate subtotal and total items
    const subtotal = card.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalItems = card.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <section className="checkout section--lg">
            <div className="checkout__container container grid">
                {/* Billing Details Section */}
                <div className="checkout__group">
                    <h3 className="section__title">Billing Details</h3>
                    <form className="form grid">
                        <input type="text" placeholder="Name" className="form__input" />
                        <input type="text" placeholder="Address" className="form__input" />
                        <input type="text" placeholder="City" className="form__input" />
                        <input type="text" placeholder="Country" className="form__input" />
                        <input type="text" placeholder="Postcode" className="form__input" />
                        <input type="text" placeholder="Phone" className="form__input" />
                        <input type="email" placeholder="Email" className="form__input" />
                        <h3 className="checkout__title">Additional Information</h3>
                        <textarea
                            name="orderNote"
                            placeholder="Order note"
                            className="form__input textarea"
                        ></textarea>
                    </form>
                </div>

                {/* Cart Totals Section */}
                <div className="checkout__group">
                    <h3 className="section__title">Cart Totals</h3>
                    <table className="order__table">
                        <thead>
                        <tr>
                            <th colSpan="2">Products</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {card.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <img
                                        src={item.thumbImg}
                                        alt={item.name}
                                        className="order__img"
                                    />
                                </td>
                                <td>
                                    <h3 className="table__title">{item.name}</h3>
                                    <p className="table__details">Size: {item.size}</p>
                                    <p className="table__quantity">x {item.quantity}</p>
                                </td>
                                <td>
                                        <span className="table__price">
                                            {formatCurrency(item.price * item.quantity)}
                                        </span>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td>
                                <span className="order__subtitle">Subtotal</span>
                            </td>
                            <td colSpan="2">
                                    <span className="table__price">
                                        ({totalItems} items) {formatCurrency(subtotal)}
                                    </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                {/* Payment Methods Section */}
                <div className="payment__methods">
                    <h3 className="checkout__title payment__title">Payment</h3>
                    <div className="payment__option flex">
                        <input
                            type="radio"
                            name="paymentMethod"
                            id="bankTransfer"
                            className="payment__input"
                        />
                        <label htmlFor="bankTransfer" className="payment__label">
                            Direct Bank Transfer
                        </label>
                    </div>
                    <div className="payment__option flex">
                        <input
                            type="radio"
                            name="paymentMethod"
                            id="checkPayment"
                            className="payment__input"
                        />
                        <label htmlFor="checkPayment" className="payment__label">
                            Check Payment
                        </label>
                    </div>
                    <div className="payment__option flex">
                        <input
                            type="radio"
                            name="paymentMethod"
                            id="paypal"
                            className="payment__input"
                        />
                        <label htmlFor="paypal" className="payment__label">
                            PayPal
                        </label>
                    </div>
                    <button className="btn btn--md">Place Order</button>
                </div>
            </div>
        </section>
    );
}

export default Checkout;
