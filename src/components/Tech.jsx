import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from '../utils/motion';

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  return (
    
    <div>
      <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>My Skills</h2>
    </motion.div>

    <motion.div 
      variants={fadeIn("right", "spring", 0.5 )}
      className="flex flex-row flex-wrap justify-center gap-10"
    >
      {technologies.map((technology) => (
        <div className="mt-4 w-14 h-14 sm:w-28 sm:h-28" key={technology.name}>
          <img src={technology.icon} />
        </div>

      ))}
      </motion.div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "")