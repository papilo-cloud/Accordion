import clsx from 'clsx'
import { ComponentProps, useRef, useState } from 'react'
import IconMinus from '../../../icons/IconMinus'
import IconPlus from '../../../icons/IconPlus'

interface Props extends ComponentProps<'button'> {
    showIcon: boolean,
    minusIconFill?: string,
    plusIconFill?: string
}

const DisplayButton = ({
        className, children, showIcon, minusIconFill, plusIconFill
    }: Props) => {

    const [isActive, setIsActive] = useState<boolean>(false)
    const myRef = useRef<HTMLButtonElement>(null!)

    function handleClick() {
        let active = myRef.current?.nextElementSibling as HTMLElement

        if (active.style.maxHeight == '0px') {
            active.style.maxHeight = active.scrollHeight+ 'px'
        } else {
            active.style.maxHeight = '0px'
        }
        setIsActive(!isActive)
    }

  return (
    <button className={clsx('text-base font-semibold w-full flex justify-between items-center text-start gap-3', className)} 
        onClick={handleClick}
        ref={myRef}>
            {children}
            <div>
            { showIcon &&
                (
                    isActive ? <IconMinus fill={minusIconFill ?? '#301534'} />:
                        <IconPlus fill={plusIconFill ?? '#AD28EB'} />
                )
            }
            </div>

    </button>
  )
}

export default DisplayButton