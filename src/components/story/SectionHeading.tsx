import { type JSX } from 'react'

export default function SectionHeading({
  eyebrow,
  title,
  copy,
  align = 'left'
}: {
  eyebrow: string
  title: string
  copy?: string
  align?: 'left' | 'center'
}): JSX.Element {
  return (
    <header className={align === 'center' ? 'story-heading story-heading-center' : 'story-heading'}>
      <p className="story-eyebrow">{eyebrow}</p>
      <h2 className="story-title">{title}</h2>
      {copy ? <p className="story-copy">{copy}</p> : null}
    </header>
  )
}
