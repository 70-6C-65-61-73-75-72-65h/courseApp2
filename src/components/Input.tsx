import React, { ReactElement } from 'react'
import classNames from '@src/utils/classNames'

interface Props {
    readonly classNameInput?: string
    readonly className?: string
    // readonly children?: any
    readonly label?: string
    // readonly outlined?: boolean
    readonly password?: boolean
    readonly search?: boolean
    readonly disabled?: boolean
    readonly onClick?: (ev?) => void
    readonly value: any
}
// .input-field
export default function Input(props: Props): ReactElement {
    return (
        <div className={classNames([props.className ?? 'input-field'])}>
            {!!props.label && <label className="input-label"></label>}
            <input
                className={classNames([
                    props.classNameInput,
                    props.search && 'input-search',
                ])}
                onClick={props.onClick}
                disabled={props.disabled}
                type={`${props.password ? 'password' : 'text'}`}
            />
        </div>
    )
}
