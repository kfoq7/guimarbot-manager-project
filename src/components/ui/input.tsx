'use client'

import { forwardRef } from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { type, label, ...restProps } = props

  return (
    <div className="rounded-sm border border-gray-600 px-2">
      {label && <label className="absolute">{label}</label>}
      <input
        type={type}
        ref={ref}
        className="w-full outline-none"
        {...restProps}
      />
    </div>
  )
})

Input.displayName = 'Input'

export { Input }
