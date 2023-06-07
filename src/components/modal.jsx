import { motion } from 'framer-motion'
import Backdrop from './backdrop'

const Modal = ({ handleClose, text }) => {
    return(
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal orange-gradient"
            >

            </motion.div>
        </Backdrop>
    )
}

export default Modal