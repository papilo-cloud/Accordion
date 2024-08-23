import clsx from 'clsx'
import { ComponentProps, ReactNode } from 'react'

interface RootProps extends ComponentProps<'div'> {
    children: ReactNode
}

const Root = ({children, className, ...props}: RootProps) => {
  return (
    <div className={clsx(' text-red-500', className) }{...props}>
        {children}
    </div>
  )
}

export default Root