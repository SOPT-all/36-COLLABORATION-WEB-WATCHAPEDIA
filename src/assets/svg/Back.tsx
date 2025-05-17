import * as React from 'react'
import type { SVGProps } from 'react'
const SvgBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M23 12.846H3.968l8.156 8.885L11.1 23 1 12 11.099 1l1.025 1.27-8.156 8.884H23z"
    />
  </svg>
)
export default SvgBack
