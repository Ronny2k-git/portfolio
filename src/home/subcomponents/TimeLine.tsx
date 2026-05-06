import { Card } from '@/ui/components'
import { motion } from 'framer-motion'
import { TIMELINE } from '../utils'

export function TimeLine() {
  return (
    <Card className="w-full h-full gap-6 sm:gap-10 items-center justify-center rounded-4xl p-4 lg:p-8">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="relative h-[2.5px] bg-gradient-to-r from-solar via-solar-dim to-solar "
      />

      <div className="grid max-sm:grid-cols-3 grid-cols-6 gap-4">
        {TIMELINE.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-2"
          >
            <span className="text-muted-hi text-xs">{item.code}</span>

            <div className="flex items-center justify-center size-12 rounded-full shadow-glow-solar/30">
              <img
                className="!text-2xl rounded-full size-12"
                src={item.img}
                alt={item.alt}
              />
            </div>

            <span className="text-sm font-semibold text-solar uppercase font-display">
              {item.title}
            </span>

            <p className="text-xs text-muted-hi max-w-[140px]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Card>
  )
}
