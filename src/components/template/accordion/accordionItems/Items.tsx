import clsx from 'clsx'
import { ComponentProps, ReactNode, useEffect, useRef} from 'react'


const Items: React.FC<ComponentProps<'div'>>= ({className, children, ...props}) => {

    const ref = useRef<HTMLDivElement>(null!)
    useEffect(() => {
      let lastChild = ref.current.nextElementSibling as HTMLElement
        if (lastChild == null) {
            ref.current.style.borderBottom = '0'
        }
    }, [])
    
    return (
        <div  
            className={clsx(' flex flex-col gap-1 border-b-2 border-purple-grayish', className)}
            {...props}
            ref={ref}>
            {children?.[0 as keyof ReactNode]}
            {children?.[1 as keyof ReactNode]}
        </div>
    )
}

export default Items