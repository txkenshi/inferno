import './Footer.css'
export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="logo">INFERNO</div>
                    <p className='footer-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor fficia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="footer">
                    <h3>Меню</h3>
                    <div className="footer-menu">
                        <p>Главная</p>
                        <p>Акции</p>
                        <p>Каталог</p>
                        <p>контакты</p>
                    </div>
                </div>
                <div className="footer">
                    <h3>Контакты</h3>
                    <p className='footer-info'>Остались вопросы? Напишите нам <br />
                       <b> infernoshop@gmail.com </b>
                    </p>
                    <p className='footer-info'>Нужна консультация? Позвоните нам <br />
                       <b> +7 987 405 45 45 </b></p>
                </div>
            </footer>
        </>
    )
}