import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import Modal from './modal'
import '../index.css'


const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
const [loading, setLoading] = useState(false)
const [modalOpen, setModalOpen] = useState(false)
const [submittedName, setSubmittedName] = useState('');
const [submittedEmail, setSubmittedEmail] = useState('');

const close = () => setModalOpen(false)
const open = () => setModalOpen(true)

const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change',handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change',handleMediaQueryChange);
    };
  }, []);

const handleChange = (e) => {
  const { name, value } = e.target

  setForm({ ...form, [name]: value })
}

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .send(
      'service_ds0lwsg',
      'template_d0ez60t',
      {
        from_name: form.name,
        to_name: 'Adam',
        from_email: form.email,
        to_email: 'adamyoungy678@gmail.com',
        message: form.message,
      },
      '9OlYZJ9TRqbNKU9zQ'
    )
    .then(
      () => {
        setSubmittedName(form.name);
        setSubmittedEmail(form.email);
        open()

        setForm({
          name: '',
          email: '',
          message: '',
        });

        setLoading(false);

      },
      (error) => {
        setLoading(false);

        console.log(error);

        alert('Something went wrong.');
      }
    );
};


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>
      
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
      >
      <label className="flex flex-col">
        <span className="text-white font-medium">
        Your Name
        </span>
        <input 
          required
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
          className="bg-tertiary py-4 px-6
          placeholder:text-secondary
          text-white rounded-lg outlined-none
          border-none font-medium"
          maxLength={45}
        />

      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium">
        Your Email
        </span>
        <input 
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What's your email?"
          className="bg-tertiary py-4 px-6
          placeholder:text-secondary
          text-white rounded-lg outlined-none
          border-none font-medium"
          maxLength={55}
        />

      </label>
      <label className="flex flex-col">
        <span className="text-white font-medium">
        Your Message
        </span>
        <textarea 
          required
          rows="7"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What do you want to say?"
          className="bg-tertiary py-4 px-6
          placeholder:text-secondary
          text-white rounded-lg outlined-none
          border-none font-medium"
          maxLength={2000}
        />

      </label>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="submit"
        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl violet-gradient"
      >
        {loading ? 'Sending...' : 'Send'}
      </motion.button>
      </form>
      <AnimatePresence
      initial={false}
      exitbeforeEnter={true}
      onExitComplete={() => null}
      >
      {isMobile && modalOpen && 
      <Modal 
      name={submittedName} 
      email={submittedEmail} 
      handleClose={close} 
      mobile={isMobile}
      />}

      </AnimatePresence>
      </motion.div>
      
      <motion.div 
      variants={slideIn('right', "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      <AnimatePresence
      initial={false}
      exitbeforeEnter={true}
      onExitComplete={() => null}
      >
      {!isMobile && modalOpen && 
      <Modal 
      name={submittedName} 
      email={submittedEmail} 
      handleClose={close} 
      mobile={isMobile}
      />}

      </AnimatePresence>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")