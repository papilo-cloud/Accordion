import clsx from 'clsx'
import { ComponentProps, ReactElement, ReactNode } from 'react'
import IconStar from '../../icons/IconStar'
interface HeadingProps extends ComponentProps<'div'> {
    logo?: ReactNode,
    children: ReactElement,
    iconStarFill?: string
}
const Heading = ({logo, className, iconStarFill, children, ...props}: HeadingProps) => {
  return (
    <div className={clsx('flex items-center gap-4', className)} {...props}>
        {
            logo ? logo : <IconStar  fill={iconStarFill?? '#AD28EB'} />
        }
        <div className={clsx(' text-purple-dark font-bold text-3xl uppercase font-primary', className)}>{children}</div>
    </div>
  )
}

export default Heading