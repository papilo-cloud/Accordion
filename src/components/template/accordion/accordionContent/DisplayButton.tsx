import clsx from 'clsx'
import { ComponentProps, useRef, useState } from 'react'
import IconMinus from '../../../icons/IconMinus'
import IconPlus from '../../../icons/IconPlus'

interface Props extends ComponentProps<'button'> {
    showIcon: boolean,
    minusIconFill: string,
    plusIconFill: string
}

const DisplayButton = ({
        className, children, showIcon, minusIconFill, plusIconFill
    }: Props) => {

    const [isActive, setIsActive] = useState<boolean>(false)
    const myRef = useRef<HTMLButtonElement>(null!)

    function handleClick() {
        let active = myRef.current?.nextElementSibling as HTMLElement

        if (active.style.maxHeight == '0px') {
            active.style.maxHeight = active.scrollHeight + 'px'
        } else {
            active.style.maxHeight = '0px'
        }
        setIsActive(!isActive)
    }

  return (
    <button className={clsx(' flex gap-4', className)} 
        onClick={handleClick}
        ref={myRef}>
            {children}
            { showIcon &&
                (
                    isActive ? <IconMinus className={clsx(minusIconFill &&' fill-inherit')} />:
                        <IconPlus fill={plusIconFill} />
                )
            }

    </button>
  )
}

export default DisplayButton