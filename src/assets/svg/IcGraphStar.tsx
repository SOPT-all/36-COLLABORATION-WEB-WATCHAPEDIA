import * as React from 'react'
import type { SVGProps } from 'react'
const SvgIcGraphStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={11}
    fill="none"
    {...props}
  >
    <path
      fill="#5F5F5F"
      d="m6 0 1.622 3.767 4.084.379-3.081 2.707.902 4.001L6 8.76l-3.527 2.094.902-4.001L.294 4.146l4.084-.379z"
    />
  </svg>
)
export default SvgIcGraphStar
