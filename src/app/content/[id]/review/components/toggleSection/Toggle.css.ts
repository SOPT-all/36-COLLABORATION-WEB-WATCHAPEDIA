import { color, font } from '@/app/styles.css'
import { style } from '@vanilla-extract/css'

export const toggleWrap = style({
    padding: "10px 15px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textAlign: "center"
})

export const spoiler = style([
    font.body_r_11,{
        color:color.gray.gray4
    }
])