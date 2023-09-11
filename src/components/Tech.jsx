import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-14 h-14 sm:w-28 sm:h-28" key={technology.name}>
          <img src={technology.icon} />
        </div>

      ))}
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "")