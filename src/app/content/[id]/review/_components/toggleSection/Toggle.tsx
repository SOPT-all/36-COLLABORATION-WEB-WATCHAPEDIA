"use client"
import { IcSeparator, IcTwitterIcon } from "@/assets/svg"
import * as styles from "./Toggle.css"
import SpoilerToggle from "@/shared/components/SpoilerToggle/SpoilerToggle"

const Toggle = () => {
  return (
    <div className={styles.toggleWrap}>
      <IcTwitterIcon />
      <IcSeparator />
      <span className= {styles.spoiler}> 스포일러 </span>
      <SpoilerToggle />
    </div>
  )
}

export default Toggle
