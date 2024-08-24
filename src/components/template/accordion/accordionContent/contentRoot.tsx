import clsx from 'clsx'
import { ComponentProps, ReactNode, useEffect, useRef} from 'react'
import DisplayButton from './DisplayButton'
import ContentText from './contentText'


interface contentProps extends ComponentProps<'div'> {
    showIcon: boolean,
    minusIconFill?: string,
    plusIconFill?: string
}

const ContentRoot= ({className, children, showIcon=true, minusIconFill, plusIconFill, ...props}: contentProps) => {

    const ref = useRef<HTMLDivElement>(null!)
    useEffect(() => {
      let lastChild = ref.current.nextElementSibling as HTMLElement
        if (lastChild == null) {
            ref.current.style.borderBottom = '0'
            ref.current.style.borderBottom = '0'
        }
    }, [])
    
    return (
        <div  
            className={clsx(' flex flex-col gap-2 border-b-2 border-purple-grayish', className)}
            {...props}
            ref={ref}>
            <DisplayButton showIcon={showIcon} 
                minusIconFill={minusIconFill}
                plusIconFill={plusIconFill}>
                    {children?.[0 as keyof ReactNode]}
            </DisplayButton>
            <ContentText>
                {children?.[1 as keyof ReactNode]}
            </ContentText>
        </div>
    )
}

export default ContentRoot