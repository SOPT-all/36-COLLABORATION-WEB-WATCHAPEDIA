import { style } from '@vanilla-extract/css'

import { color, font } from '@/app/styles.css'


export const keywordWrapper = style([
    font.label_r_12,{
        color: color.gray.gray4,
        display:"flex",
        width:"375px",
        padding:"10px 15px",
        alignItems:"flex-start",
        gap:"10px"
    }
])
export const chipWrapper= style({
    padding:"10px 15px",
    gap:"10px"
})

export const chipLetter = style([
    font.title_sb_14,{
        color:color.gray.gray6,
        marginBottom:"8px"
    }
])