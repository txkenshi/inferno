import './Filter.css'
import filterIcon from '../../../public/Filter/Filter-icon.png'
export default function Filter() {
    return (
        <>
            <div className="filter">
                <div className="filter-header">
                    <h3>Фильтер</h3>
                    <img src={filterIcon} alt="" />
                </div>
                <div className="filter-kategory">
                    <div className="filter-kat">
                        <p>Мужчины</p>
                        <p> › </p>
                    </div>
                    <div className="filter-kat">
                        <p>Женщины</p>
                        <p> › </p>
                    </div>
                    <div className="filter-kat">
                        <p>Аксессуары</p>
                        <p> › </p>
                    </div>
                </div>
                <div className="filter-price">
                    <div className="filter-price-header">
                        <h3>Цена</h3>
                        <p> › </p>
                    </div>
                    <input  type="range" />
                </div>
                <div className="filter-size">
                    <div className="filter-size-header">
                        <h3>Размер</h3>
                        <p> › </p>
                    </div>
                    <div className="sizes-flex">

                        <div className="filsize">XS</div>
                        <div className="filsize">S</div>
                        <div className="filsize">M</div>
                        <div className="filsize">L</div>
                        <div className="filsize">XL</div>
                    </div>
                </div>
                <input type="submit" value="Применить" />
            </div>
        </>
    )
}