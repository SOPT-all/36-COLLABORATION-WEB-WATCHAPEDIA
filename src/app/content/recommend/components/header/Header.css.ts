import { style } from "@vanilla-extract/css";

import { font } from "@/app/styles.css";

export const HeaderWrapper = style({
    display:"flex",
    width:"375px",
    height:"48px",
    alignItems:"center",
    gap:"56px",
})

export const title = style ([
    font.headline_sb_16,{
        fontWeight:"600"
    }
])

export const backBtn = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  fontWeight: 500,
  fontSize: '15px',
  color: '#222',
  marginRight: '12px',
})

export const back= style ([
    font.body_r_15,{
        marginLeft:"8px"
    }
])