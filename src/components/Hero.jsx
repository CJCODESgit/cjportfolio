import { motion } from 'framer-motion';
import {cj} from '../assets';

import { styles } from '../styles';
import { socialMedia } from '../constants';



const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5 `}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className='flex flex-col md:flex-row items-center'>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I&apos;m <span className='text-[#915eff] sm:block'>John Covenant</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop web2/web3 applications,<br></br> user interfaces and Data Analysis</p>

            <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6'>
            <a href='https://drive.google.com/file/d/196ofvku4H7-kVE5PpBIC8QJnTtZtudC_/view?usp=sharing'>
              <button
            type="submit"
            className='bg-[#915eff] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            Resume 
          </button>
            </a>

        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <a key={social.id} href={social.link}>
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
                }`}
              />
            </a>
          ))}
        </div>
      </div>
          </div>
          <img src={cj} alt="billing" className=' w-40 h-40 mx-auto md:w-[30%] md:h-[40%] relative flex flex-col items-end md:ml-5' />
        </div>
        
      </div>




      {/* button that moves users to the bottom of the contact section of the page */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero


