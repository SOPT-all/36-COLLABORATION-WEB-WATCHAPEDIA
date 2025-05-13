<<<<<<< HEAD
import { container, font } from '@/app/styles.css'
import Bottom from "@/shared/components/Bottom/Bottom"

export default function Home() {
  return (
    <div>
      <main className={container}>
        <p className={font.headline_b_24}>모웹 5조 왓챠피디아 화이팅 ~</p>
        <Bottom />
      </main>
    </div>
  )
=======
import { PATH } from '@/shared/constants/path'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect(PATH.HOME)
>>>>>>> main
}
