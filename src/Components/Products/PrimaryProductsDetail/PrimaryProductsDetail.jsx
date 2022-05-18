import React, { useContext } from "react";
import ItemCount from "../PrimaryProductsDetail/ItemCount/ItemCount";
import { Card } from "react-bootstrap";
import './detail.css'
import { ThemeContext } from "../../Context/ThemeContext/ThemeContext"
import { CartContext } from "../../Context/CartContext/CartContext";
import Decision from '../../Decision/Decision';
export default function PrimaryProductsDetail({ Id, name, img, price, stock }) {
    const { cart, addToCart } = useContext(CartContext);
    const { darkTheme } = useContext(ThemeContext);
    function handleOnAdd(quantity) {
        addToCart({ Id, name, img, price, stock }, quantity)
        console.log(added)
    }
    const added = cart.find((item) => item.Id === Id);
    console.log(added);
    return (
        <>
            {stock > 0 ?
                <div className={`${darkTheme ? 'darkBackgroundDetail' : 'lightBackgroundDetail '}`}>
                    <Card className={`${darkTheme ? 'darkBackgroundCard ' : 'lightBackgroundCard '}`} key={Id} id={Id} >
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title className={`${darkTheme ? 'darkBackgroundTitle' : 'lightBackgroundTitle'}`}>{name}</Card.Title>
                            <Card.Text className={`${darkTheme ? 'darkBackgroundPrice' : 'lightBackgroundPrice'}`}>${price}</Card.Text>
                            <p>Stock disponible: {stock}</p>
                            {!added ? <ItemCount stock={stock} onAdd={handleOnAdd} /> : <Decision />}
                        </Card.Body>
                    </Card>
                </div>
                :
                <div><h1>puta</h1></div>
            }
        </>
    );
}