import clsx from 'clsx'
import React, { ComponentProps, ReactNode, useEffect, useRef } from 'react'

// interface ContentProps extends ComponentProps<'div'> {}
const Content: React.FC<ComponentProps<'div'>> = ({children}:{children?: ReactNode}, {className, ...props}) => {

  const ref = useRef<HTMLDivElement>(null!)
    useEffect(() => {
      let lastChild = ref.current?.parentElement?.parentElement?.lastElementChild?.lastElementChild as HTMLElement
        lastChild.style.marginBottom = '0'
    }, [])

  return (
    <div style={{
        maxHeight: 0,
        transition: ' .2s ease-out',
        overflow: 'hidden'
    }}
    ref={ref}
    className={clsx('text-sm mb-5 text-opacity-70 text-purple-dark font-normal', className)} {...props}>
        {children?? <p>Accordion Content: Lorem ipsum dolor sit amet</p> }
    </div>
  )
}

export default Content