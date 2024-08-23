import clsx from 'clsx'
import React, { ComponentProps, ReactNode, useRef, useState } from 'react'
import DisplayButton from './DisplayButton'
import ContentText from './contentText'


interface contentProps extends ComponentProps<'div'> {
    showIcon: boolean,
    minusIconFill: string,
    plusIconFill: string
}

const ContentRoot= ({className, children, showIcon=true, minusIconFill, plusIconFill, ...props}: contentProps) => {

    return (
        <div className={clsx('', className)} {...props}>
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