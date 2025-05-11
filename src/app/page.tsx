import { container } from '@/styles/styles.css'
import '@/styles/theme.css'
import { brandText } from './styles.css'

export default function Home() {
  return (
    <div>
      <main className={container}>
        <p className={brandText}>모웹 5조 왓챠피디아 화이팅 ~</p>
      </main>
    </div>
  )
}
