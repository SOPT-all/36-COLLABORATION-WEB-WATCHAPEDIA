import * as React from 'react'
import type { SVGProps } from 'react'
const SvgIcInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path stroke="#818181" d="M8 6V5M8 7v5" />
    <circle cx={8} cy={8} r={7.5} stroke="#818181" />
  </svg>
)
export default SvgIcInfo
