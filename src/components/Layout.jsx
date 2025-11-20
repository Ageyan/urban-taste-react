import { Outlet } from "react-router-dom";
import { useState } from "react";
import Modal from './Modal.jsx';
import Header from './Header'

function Layout() {

    const [isModalOpen, setIsModlaOpen] = useState(false);
    const handleOpenModal = () => setIsModlaOpen(true);
    const handleCloseModal = () => setIsModlaOpen(false);

    return (
        <>
            <Header onOpenModal={handleOpenModal}/>
            <main>
                <Outlet context={{ onOpenModal: handleOpenModal }}/>
            </main>
            <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
        </>
    );
}

export default Layout;