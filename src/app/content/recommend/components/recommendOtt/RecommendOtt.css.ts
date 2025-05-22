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

export const blockTitle = style({
    display: 'flex',
    alignItems: 'center',
    marginBottom: "5px",
    gap:"6px"
})

export const cardList = style({
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
})

export const selectedChip = style({
    display:"flex",
    marginBottom:"12px"
})