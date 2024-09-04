import clsx from 'clsx'
import { ComponentProps, ReactNode, useRef, useState } from 'react'
import IconMinus from '../../../icons/IconMinus'
import IconPlus from '../../../icons/IconPlus'

interface Props extends ComponentProps<'button'> {
    showIcon: boolean;
    minusIconFill?: string;
    plusIconFill?: string;
    children?: ReactNode;
}

const DisplayButton = ({
        className, children, showIcon, minusIconFill, plusIconFill
    }: Props) => {

    const [isActive, setIsActive] = useState<boolean>(false)
    const myRef = useRef<HTMLDivElement>(null!)

    function handleClick() {
        let active = myRef.current?.nextElementSibling as HTMLElement

        if (active.style.maxHeight == '0px') {
            active.style.maxHeight = active.scrollHeight+ 'px'
        } else {
            active.style.maxHeight = '0px'
        }
        setIsActive(!isActive)
        // console.log(active)
    }

  return (
    <div className={clsx('text-purple-dark cursor-pointer text-base font-semibold w-full flex justify-between items-center text-start gap-3 hover:text-[#AD28EB]', className)} 
        onClick={handleClick}
        ref={myRef}>
            {children?? <span>Content header</span> }
            <span>
            { showIcon &&
                (
                    isActive ? <IconMinus fill={minusIconFill ?? '#301534'} />:
                        <IconPlus fill={plusIconFill ?? '#AD28EB'} />
                )
            }
            </span>

    </div>
  )
}

export default DisplayButton