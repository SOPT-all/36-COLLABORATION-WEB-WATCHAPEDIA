import SectionHeader from './SectionHeader'

interface SectionProps {
  title: string
  children: React.ReactNode
  showRight?: boolean
  showNotice?: boolean
}

const Section = ({
  title,
  children,
  showRight = false,
  showNotice = false,
}: SectionProps) => {
  return (
    <div>
      <SectionHeader
        text={title}
        showRight={showRight}
        showNotice={showNotice}
      />
      <div style={{ marginTop: '12px' }}>{children}</div>
    </div>
  )
}

export default Section
