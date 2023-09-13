import { useState } from 'react';
import minus from '../icons/minus.svg';
import plus from '../icons/plus.svg';

const CartData =[
    {
        id: '1',
        name: '貓咪罐罐',
        img: 'https://picsum.photos/300/300?text=1',
        price: 100,
        quantity: 2,
    },{
        id: '2',
        name: '貓咪干干',
        img: 'https://picsum.photos/300/300?text=2',
        price: 200,
        quantity: 1,
    },
];

function CartItem ({item, value}) {
    const [count, setCount] = useState(item.quantity);
    value=count
    item.quantity=count
    function minusClick(){
        if (count!==0){setCount(count - 1);};
    }
    function plusClick(){
        setCount(count + 1);
    }
    return (
        <div className="product-container col col-12" data-count={item.quantity} data-price={item.price}>
            <img className="img-container"src={item.img} alt="" />
            <div className="product-info">
                <div className="product-name">{item.name}</div>
                <div className="product-control-container">
                    <div className="product-control">
                        <img src={minus} className="product-action minus" alt="" onClick={minusClick} />
                        <span className="product-count">{item.quantity}</span>
                        <img src={plus} className="product-action plus" alt="" onClick={plusClick} />
                    </div>
                </div>
                <div className="price">${count*item.price}</div>
            </div>
        </div>
    )
}

export default function cart() {
    const CartInner = CartData.map ( Data => {
        return(
            <CartItem item={Data} />
        );
    })    
    return(
        <section className="cart-container col col-lg-5 col-sm-12">
            <h3 className="cart-title">購物籃</h3>
            <section className="product-list col col-12" data-total-price="0">
                {CartInner}
            </section>
            <section className="cart-info shipping col col-12">
                <div className="text">運費</div>
                <div className="price">免費</div>
            </section>
            <section className="cart-info total col col-12">
                <div className="text">小計</div>
                <div className="price">$0</div>
            </section>
        </section>
    )
}

/*
import { useState } from 'react';
import minus from '../icons/minus.svg';
import plus from '../icons/plus.svg';

const CartData =[
    {
        id: '1',
        name: '貓咪罐罐',
        img: 'https://picsum.photos/300/300?text=1',
        price: 100,
        quantity: 2,
    },{
        id: '2',
        name: '貓咪干干',
        img: 'https://picsum.photos/300/300?text=2',
        price: 200,
        quantity: 1,
    },
];

function CartItem ({item, value}) {
    const [count, setCount] = useState(item.quantity);
    value=count
    item.quantity=count
    function minusClick(){
        if (count!==0){setCount(count - 1);};
    }
    function plusClick(){
        setCount(count + 1);
    }
    return (
        <div className="product-container col col-12" data-count={item.quantity} data-price={item.price}>
            <img className="img-container"src={item.img} alt="" />
            <div className="product-info">
                <div className="product-name">{item.name}</div>
                <div className="product-control-container">
                    <div className="product-control">
                        <img src={minus} className="product-action minus" alt="" onClick={minusClick} />
                        <span className="product-count">{item.quantity}</span>
                        <img src={plus} className="product-action plus" alt="" onClick={plusClick} />
                    </div>
                </div>
                <div className="price">${count*item.price}</div>
            </div>
        </div>
    )
}

function Cart() {
    const [product, setProduct] = useState(CartData)
    const [total, setTotal] = useState(0)
    function minusClick(){
        if (product.quantity!==0){setProduct(product.quantity - 1);};
    }
    function plusClick(){
        setProduct(product.quantity + 1);
    }
    setTotal(product.reduce((totalPrice, product) => {
        return totalPrice + (product.quantity * product.price)
    }))
    const CartInner = product.map ( Data => {
        return(
            <div className="product-container col col-12" data-count={Data.quantity} data-price={Data.price}>
            <img className="img-container"src={Data.img} alt="" />
            <div className="product-info">
                <div className="product-name">{Data.name}</div>
                <div className="product-control-container">
                    <div className="product-control">
                        <img src={minus} className="product-action minus" alt="" onClick={minusClick} />
                        <span className="product-count">{Data.quantity}</span>
                        <img src={plus} className="product-action plus" alt="" onClick={plusClick} />
                    </div>
                </div>
                <div className="price">${Data.quantity*Data.price}</div>
            </div>
        </div>
        );
    })
    return(
        <section className="cart-container col col-lg-5 col-sm-12">
            <h3 className="cart-title">購物籃</h3>
            <section className="product-list col col-12" data-total-price="0">
                {CartInner}
            </section>
            <section className="cart-info shipping col col-12">
                <div className="text">運費</div>
                <div className="price">免費</div>
            </section>
            <section className="cart-info total col col-12">
                <div className="text">小計</div>
                <div className="price">${total}</div>
            </section>
        </section>
    )
}

export default Cart;
*/