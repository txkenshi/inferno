import { useParams } from "react-router-dom"
import { Products } from "../data"
export default function SingleProductPage() {

    const { id } = useParams()

    const product = Products.find(product => product.id === parseInt(id))

    if (!product) {
        return <h2>Данный товар не был найден :(</h2>
    }

    return (
        <>
            <div className="container">
                <div className="OneItem">
                    <div className="OneItem-img">
                        <div className="OneItem-Column">
                            <img src={product.img} alt="" />
                            <img src={product.img} alt="" />
                            <img src={product.img} alt="" />
                        </div>
                        <img src={product.img} alt="" />
                    </div>
                    <div className="OneItemText">
                        <h2> {product.name}</h2>
                        <h3>{product.price} ₽</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime.</p>
                        <div className="line"></div>
                        <div className="colors">
                            <span>Цвет</span>
                            <div className="colors-ellipses">
                                <div className="elipse"></div>
                                <div className="elipse"></div>
                                <div className="elipse"></div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="colors">
                            <span>Размер</span>
                            <div className="colors-ellipses">
                                <p>S</p>
                                <p>M</p>
                                <p>L</p>
                                <p>XL</p>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="buttons">
                            <span>В избранное</span>
                            <p>В корзину</p>
                        </div>
                    </div>
                </div>
              
           
            </div>


        </>
    )
}