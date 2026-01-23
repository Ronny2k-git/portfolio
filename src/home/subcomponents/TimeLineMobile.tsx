import { motion } from 'framer-motion'
import { TIMELINE } from '../utils'

export function TimeLineMobile() {
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="relative h-[2.5px] bg-gradient-to-r from-blue-400 via-gray-400 to-blue-400 mb-12"
      />

      <div className="grid max-sm:grid-cols-3 grid-cols-6 gap-6">
        {TIMELINE.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-3"
          >
            <span className="text-gray-400 text-xs">{item.code}</span>

            <div className="flex items-center justify-center size-12 rounded-full bg-black/60 border border-white/10 shadow-[0_0_20px_rgba(96,165,250,0.25)]">
              <img
                className="!text-2xl rounded-full text-blue-300"
                src={item.img}
              />
            </div>
            <h4 className="text-sm font-semibold text-solar">{item.title}</h4>
            <p className="text-xs text-gray-400 max-w-[140px]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}
