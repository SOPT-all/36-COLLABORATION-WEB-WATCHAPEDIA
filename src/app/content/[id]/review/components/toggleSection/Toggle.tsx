"use client"
import { IcSeparator, IcTwitterIcon } from "@/assets/svg"
import SpoilerToggle from "@/shared/components/SpoilerToggle/SpoilerToggle"

import * as styles from "./Toggle.css"

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
