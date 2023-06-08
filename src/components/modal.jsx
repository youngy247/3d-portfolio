import { motion } from 'framer-motion'
import Backdrop from './backdrop'
import '../index.css'

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
}

const Modal = ({ handleClose, name, email }) => {
    return(
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal purple-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="close-button" 
                onClick={handleClose}>
                    Close
                </motion.button>
                <ModalText name={name} email={email} />
            </motion.div>
         </Backdrop>
    )
}

const ModalText = ({ name, email }) => (
    <div className="modal-text">
      <h3>Hello {name} 👋</h3>
      <h5>
      Thank you for your email! I will get back to you at '{email}' as soon as possible to discuss further details and answer any questions you may have. Have a great day!
      </h5>
    </div>
  );

export default Modal