import { style } from "@vanilla-extract/css"

import { color, font } from "@/app/styles.css"

export const divider = style({
    width: '100%',
    height: '10px',
    background: color.background.subtitle
})

export const textFieldWrapper = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "24px",
    background: "#fff",
    borderRadius: "0 0 8px 8px",
    minHeight: "400px",
    position: "relative",
})

export const reviewText = style([
    font.title_sb_14,
    { color: color.gray.gray6, marginBottom: "16px" }
])

export const textArea = style([
    font.subtitle_r_14,{
        color:color.gray.gray4,
         width: "100%",
         minHeight: "200px",
         border: "none",
         outline: "none",
         resize: "none",
         background: "transparent",
    }
])

export const counter = style({
    position: "absolute",
    right: "24px",
    bottom: "16px",
    color: color.gray.gray4,
    fontSize: "15px",
})