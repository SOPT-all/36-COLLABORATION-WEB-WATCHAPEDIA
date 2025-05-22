import { style } from "@vanilla-extract/css";

import { font,color } from "@/app/styles.css";

export const tabBar = style({
  display: "flex",
  flexDirection: "row", 
  justifyContent: "space-between",
  padding: "8px 0",
  color:color.gray.gray4,
});

export const tabItem = style([
    font.label_m_10,
    {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
    }
]);

export const tabIcon = style({
  width: "24px",
  height: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});