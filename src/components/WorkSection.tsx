import { motion } from 'framer-motion'

export default function WorkSection({
  title,
  company,
  period,
  description,
  skills,
  index
}: {
  title: string
  company: string
  period: string
  description: string
  skills: string[]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="py-8 border-b border-gray-200 last:border-0"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600">{company}</p>
        </div>
        <div className="text-gray-500 whitespace-nowrap">{period}</div>
      </div>
      
      <p className="mt-4 text-gray-700">{description}</p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map(skill => (
          <span
            key={skill}
            className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}