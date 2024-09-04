import clsx from 'clsx'
import { ComponentProps, createContext, ReactNode } from 'react'

export const RootContext = createContext('single')
interface RootProps extends ComponentProps<'div'> {
    children: ReactNode;
    type: 'single'| 'multiple'
}

const Root = ({children, className, type, ...props}: RootProps) => {
  return (
    <div className={clsx(' bg-white max-[550px]:w-full w-[500px] p-5 rounded-xl flex flex-col gap-5 shadow-md', className) }{...props}>
        {children}
    </div>
  )
}

export default Root