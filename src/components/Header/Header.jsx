import './Header.css'
import Like from '../../../public/Header/Like.png'
import Card from '../../../public/Header/Card.png'
import Search from '../../../public/Header/Search.png'
import { NavLink } from 'react-router-dom'
import ModalContent from '../Modal/Modal'
import Modal from 'react-modal'
import { useState } from 'react'

export default function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    


    

    const openModal = () => {
        setModalIsOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setModalIsOpen(false)
        document.body.style.overflow = 'auto'
    }
    return (
        <>
            <header>
                <div className="logo">
                    <p>INFERNO</p>
                </div>
                <nav>
                    <NavLink to="/" > <p>ГЛАВНАЯ</p> </NavLink>
                    <NavLink to="/catalog" > <p>КАТАЛОГ</p> </NavLink >
                    <p>АКЦИИ</p>
                    <p>КОНТАКТЫ</p>
                </nav>
                <div className="menu">
<NavLink to="/catalog">
                <img src={Search} alt="" />
                </NavLink>           
                    <img src={Like} alt="" />
                    <img onClick={openModal}  src={Card} alt="" />
                </div>
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                        <ModalContent closeModal={closeModal} />
                    </Modal>
            </header>
            </>
    )
}