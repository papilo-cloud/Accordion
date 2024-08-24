import clsx from 'clsx'
import { ComponentProps, ReactNode} from 'react'
import DisplayButton from './DisplayButton'
import ContentText from './contentText'


interface contentProps extends ComponentProps<'div'> {
    showIcon: boolean,
    minusIconFill?: string,
    plusIconFill?: string
}

const ContentRoot= ({className, children, showIcon=true, minusIconFill, plusIconFill, ...props}: contentProps) => {

    return (
        <div className={clsx(' flex flex-col gap-3 border-b-2 border-purple-grayish', className)} {...props}>
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