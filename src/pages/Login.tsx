import Input from '@src/components/Input'
import React, { ReactElement, useState } from 'react'

interface Props {}

interface initialState {
    email: string
    password: string
}

const initialState: initialState = {
    email: '',
    password: '',
}

export default function Login({}: Props): ReactElement {
    const [loginForm, setLoginForm] = useState(initialState)

    const handleInputChange = ({ target }) =>
        setLoginForm(data => ({ ...data, [target.name]: target.value }))

    return (
        <div className="auth-page">
            <a className="auth-back-arrow"></a>
            <Input label={'Email'} onClick={handleInputChange} />
            <a className="auth-footer">Forgot your password?</a>
        </div>
    )
}
