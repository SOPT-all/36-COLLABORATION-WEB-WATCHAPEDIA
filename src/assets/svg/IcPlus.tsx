import * as React from 'react'
import type { SVGProps } from 'react'
const SvgIcPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={14}
    fill="none"
    {...props}
  >
    <g stroke="#fff" strokeWidth={2}>
      <path d="M0 6.5h13M6.5.5v13" />
    </g>
  </svg>
)
export default SvgIcPlus
