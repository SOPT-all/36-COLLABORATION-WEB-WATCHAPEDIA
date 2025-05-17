import * as React from 'react'
import type { SVGProps } from 'react'
const SvgIcProfileCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={20}
    fill="none"
    {...props}
  >
    <circle cx={9.5} cy={10} r={9} fill="#F5F5F5" stroke="#E7E7E7" />
    <path
      fill="#C3C3C3"
      d="M10.708 10.917a2.917 2.917 0 0 1 2.917 2.916c0 .161-.13.292-.292.292H5.667a.29.29 0 0 1-.292-.292 2.917 2.917 0 0 1 2.917-2.916zM9.5 5.875a2.292 2.292 0 1 1 0 4.584 2.292 2.292 0 0 1 0-4.584"
    />
  </svg>
)
export default SvgIcProfileCircle
