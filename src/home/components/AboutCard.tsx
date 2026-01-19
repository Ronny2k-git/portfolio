import { Card } from '@/ui/components'

type AboutCardProps = {
  title: string
  description?: string
  items?: Array<string>
}

export function AboutCard({ title, description, items }: AboutCardProps) {
  return (
    <Card className="p-8 gap-4 rounded-4xl" variant={'basic'}>
      <h3 className="text-xl font-bold text-solar">{title}</h3>

      {description && (
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      )}

      {items && (
        <ul className="flex flex-col gap-2 text-sm text-gray-400">
          {items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      )}
    </Card>
  )
}
