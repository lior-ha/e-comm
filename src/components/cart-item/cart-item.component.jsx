import './cart-item.styles.scss';

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
    <div className="cart-item">
        <img alt={name} src={imageUrl} />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </div>
    </div>
);

export default CartItem;