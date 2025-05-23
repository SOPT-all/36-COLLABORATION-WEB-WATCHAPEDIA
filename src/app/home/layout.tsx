import Bottom from '@/shared/components/Bottom/BottomNav'
import Header from '@/shared/components/Header/Header'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children} <Bottom />
    </>
  )
}

export default RootLayout
