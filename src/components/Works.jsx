import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion';



const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1 )} 
          className="mt-3 text-secondary text-[17px]
          max-w-3xl leading-[30px]" 
        >
          Projects displayed below showcases my skills and my experience. It shows my ability to solve problems and work with different technologies. contains links to repositories and demos in it.
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-7">

        </div>
      </div>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Works, "")