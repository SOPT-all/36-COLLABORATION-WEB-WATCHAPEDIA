
import { PATH } from '@/shared/constants/path'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect(PATH.HOME)

}
