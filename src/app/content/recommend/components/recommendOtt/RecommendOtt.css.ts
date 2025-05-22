import { font } from "@/app/styles.css";
import { style } from "@vanilla-extract/css";

export const recommendWrapper = style({
    display: "flex",
    flexDirection: "column",
    width: "100%",
})

export const block = style({
    background: "#fff",
    borderRadius: "12px",
    gap:"10px",
    padding: "0px 15px 0px 15px"
})

export const blockTitle = style([
    font.headline_sb_16
])

export const cardList = style({
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
})


