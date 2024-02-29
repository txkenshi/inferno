import Category from "../components/Category/Category";
import Baner from "../components/Baner/Baner";

import img1 from "../../public/Categorys/mans.jpg"
import img2 from "../../public/Categorys/girls.jpg"
import img3 from "../../public/Categorys/akses.jpg"
import Item from "../components/Item/Item";
import { Products } from "../data"; 
import { NavLink } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div className="absolut">
                <Baner />
                <div className="container">
                    <div className="categorys">
                        <Category image={img1} name="МУЖЧИНЫ" />
                        <Category image={img2} name="ЖЕНЩИНЫ" />
                        <Category image={img3} name="АКСЕССУАРЫ" />
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="sales">
                    <div className="sales-h2">
                        <h2>АКЦИИ</h2>
                        <NavLink to="/catalog" > <p>Перейти в каталог</p> </NavLink>
                    </div>
                    <div className="sales-items">
                        
                        <Item {...Products[0]} />
                        <Item {...Products[1]} />
                        <Item {...Products[2]} />
                        <Item {...Products[3]} />
                        
                    </div>
                    <p className="btn">
                        ПОКАЗАТЬ ЕЩЕ
                    </p>
                </div>
            </div>
          

        </>
    )
}