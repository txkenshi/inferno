import { NavLink } from 'react-router-dom'
import './Item.css'
export default function Item({id, img, name, price }) {
    return (
        <>
            <NavLink to={`/catalog/${id}`}>
                <div className="item">
                    <div className="item-img">
                        <img src={img} alt="" />
                        <div className="item-actions">
                            <p>в корзину</p>
                            <div className="like"></div>
                        </div>
                    </div>

                    <div className="item-text">
                        <p>{name}</p>
                        <span>{price} ₽</span>
                    </div>

                </div></NavLink>
        </>
    )
}