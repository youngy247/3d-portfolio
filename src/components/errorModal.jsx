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

const ErrorModal = ({ handleClose, name }) => {
    return(
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="error-modal-container error-modal"
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
                <ErrorModalText name={name}  />
            </motion.div>
         </Backdrop>
    )
}

const ErrorModalText = ({ name }) => (
    <div className="modal-text">
      <h3>Notice ⚠️</h3>
      <h5 className="mt-4 mb-4">
        Sorry {name} I am unable to take emails at this time. Please feel free to reach out in alternative ways below:
      </h5>
      <div className="flex justify-center gap-6">
        <a href="https://io-academy-slack.slack.com/user/@U04MY353R46" target="_blank" className="text-black text-4xl">
          <i className="fa-brands fa-slack"></i>
        </a>
        <a href="https://github.com/youngy247" target="_blank" className="text-black text-4xl">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/adam-young-684319203/" target="_blank" className="text-black text-4xl">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
  

export default ErrorModal

