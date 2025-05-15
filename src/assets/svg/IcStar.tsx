import * as React from 'react'
import type { SVGProps } from 'react'
const SvgIcStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={11}
    fill="none"
    {...props}
  >
    <path
      fill="#FF2F6E"
      d="m5.5.5 1.658 3.217 3.573.583-2.548 2.572.55 3.578L5.5 8.822 2.267 10.45l.55-3.578L.269 4.3l3.573-.583z"
    />
  </svg>
)
export default SvgIcStar
