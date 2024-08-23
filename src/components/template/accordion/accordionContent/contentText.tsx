import clsx from 'clsx'
import React, { ComponentProps } from 'react'

const ContentText: React.FC<ComponentProps<'div'>> = ({children, className, ...props}) => {
  return (
    <div style={{
        maxHeight: 0,
        transition: ' .2s ease-out',
        overflow: 'hidden'
    }}
    className={clsx('', className)} {...props}>
        {children}
    </div>
  )
}

export default ContentText