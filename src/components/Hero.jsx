import { motion } from 'framer-motion';
import {cj} from '../assets';

import { styles } from '../styles';



const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className='flex flex-col md:flex-row items-center'>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I&apos;m <span className='text-[#915eff] sm:block'>John Covenant</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop web2/web3 applications,<br></br> user interfaces and Data Analysis</p>
          </div>
          <img src={cj} alt="billing" className='w-40 h-40 mx-auto md:w-[30%] md:h-[40%] relative flex flex-col items-end md:ml-5' />
        </div>
      </div>

      {/* button that moves users to the bottom of the contact section of the page */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#contact">
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


