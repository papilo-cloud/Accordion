import clsx from 'clsx'
import { ComponentProps, ReactElement, ReactNode } from 'react'
interface TitleProps extends ComponentProps<'div'> {
    logo?: ReactNode,
    children?: ReactElement,
    iconStarFill?: string
}
const Title = ({logo, className, iconStarFill, children, ...props}: TitleProps) => {
  return (
    <div className={clsx('flex items-center gap-4', className)} {...props}>
        { logo &&
            <div className=' w-10 h-10 overflow-hidden object-cover'>
              {logo}
            </div>
        }
        
        <div 
          className={clsx(' text-purple-dark font-bold text-3xl uppercase font-primary', className)}>
            {children?? <h1>Accordion Title</h1> }
          </div>
    </div>
  )
}

export default Title