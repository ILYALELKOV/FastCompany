import React, { useState } from 'react'
import TextField from '../common/form/textField'
import CheckBoxField from '../common/form/checkBoxField'
import { validator } from '../../utils/validator'

const LoginForm = () => {
	const [data, setData] = useState({ email: '', password: '', stayOn: false })
	const [errors, setErrors] = useState({})

	const handleChange = (target) => {
		setData((prevState) => ({ ...prevState, [target.name]: target.value }))
	}

	const validatorConfig = {
		email: {
			isRequired: { message: 'Электронная почта обязательна для заполнения' },
			isEmail: {
				message: 'Email введен некорректно'
			}
		},
		password: {
			isRequired: { message: 'Пароль обязателен для заполнения' },
			isCapitalSymbol: {
				message: 'Пароль должен содержать хотя бы одну заглавную букву'
			},
			isContainDigit: {
				message: 'Пароль должен содержать хотя бы одну цифру'
			},
			min: {
				message: 'Пароль должен состоять минимум из 8 символов',
				value: 8
			}
		}
	}

	const validate = () => {
		const errors = validator(data, validatorConfig)
		setErrors(errors)
		return Object.keys(errors).length === 0
	}

	// const isValid = Object.keys(errors).length === 0
	const handleSubmit = (e) => {
		e.preventDefault()
		const isValid = validate()
		if (!isValid) return
	}

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				label="Email"
				name="email"
				value={data.email}
				onChange={handleChange}
				error={errors.email}
			/>
			<TextField
				label="Password"
				type="password"
				name="password"
				value={data.password}
				onChange={handleChange}
				error={errors.password}
			/>
			<CheckBoxField name="stayOn" value={data.stayOn} onChange={handleChange}>
				Оставаться в системе
			</CheckBoxField>
			<button type="submit" className="btn btn-primary w-100 mx-auto">
				Submit
			</button>
		</form>
	)
}

export default LoginForm
