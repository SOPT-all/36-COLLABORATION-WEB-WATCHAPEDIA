import * as React from 'react'
import type { SVGProps } from 'react'
const SvgIconLike = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#5F5F5F"
      d="M14 6.35c0-.345-.134-.675-.373-.92a1.26 1.26 0 0 0-.9-.38H8.705l.611-2.97q.02-.1.02-.209a1 1 0 0 0-.28-.688L8.38.5 4.194 4.777c-.236.24-.376.566-.376.923v6.5c0 .345.134.675.373.92.239.243.562.38.9.38h5.727c.528 0 .98-.325 1.171-.793l1.922-4.583q.087-.222.089-.474zM0 13.5h2.545V5.7H0z"
    />
  </svg>
)
export default SvgIconLike
