import "./Modal.css"
export default function ModalContent() {
    return (
        <>

            <div className="ReactModal__Content">
                <h2>Корзина</h2>
                <div className="ModalCard">
                    <div className="ModalCarditem">
                        <img src="" alt="" />
                        <div className="item-text">
                            <h3>Хлопковый свитер</h3>
                            <p> Размер: L </p>
                            <p> Цвет: Белая </p>
                            <span>5400.00 ₽</span>
                        </div>
                    </div>
                    <div className="modal-sum">
                        <h3>Сумма заказов</h3>
                        <div className="modalPrice">
                            <div className="cardPrice">
                                <span>Цена товара</span>
                                <p>5400.00 ₽</p>
                            </div>
                            <div className="cardPrice">
                                <span>Доставка</span>
                                <p>0 ₽</p>
                            </div>
                        </div>
                        <div className="cardPrice">
                            <span>Итого</span>
                            <p>5400.00 ₽</p>
                        </div>
                        <form action="">
                            <div className="salles">
                                <input type="text" placeholder="Промокод" />
                                <input type="submit" value="Ввод" />
                            </div>
                            <input type="submit" value="Перейти к покупке →" />
                        </form>


                    </div>

                </div>
            </div>

        </>
    )
}