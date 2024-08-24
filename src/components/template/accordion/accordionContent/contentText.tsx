import clsx from 'clsx'
import React, { ComponentProps } from 'react'

const ContentText: React.FC<ComponentProps<'div'>> = ({children, className, ...props}) => {
  return (
    <div style={{
        maxHeight: 0,
        transition: ' .2s ease-out',
        overflow: 'hidden'
    }}
    className={clsx('text-sm mb-5 text-opacity-70 text-purple-dark font-normal', className)} {...props}>
        {children}
    </div>
  )
}

export default ContentText