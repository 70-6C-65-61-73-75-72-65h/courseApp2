import React, { ReactElement } from 'react'
import classNames from '@src/utils/classNames'

interface Props {
    readonly className?: string
    readonly children?: any
    // readonly label: string
    readonly outlined?: boolean
    // readonly icon?: any
    readonly disabled?: boolean
    // readonly iconPosition?: 'left' | 'right'
    readonly purple?: boolean
    readonly onClick?: (ev?) => void
}

// .button
export default function Button(props: Props): ReactElement {
    return (
        <button
            className={classNames([
                props.className ?? 'button',
                props.purple && 'purple',
                props.outlined && 'outlined',
            ])}
            onClick={props.onClick}
            disabled={props.disabled}
            type="button">
            {/* {!!props.icon && props.iconPosition === 'left' ? props.icon: } */}
            {props.children}
        </button>
    )
}
