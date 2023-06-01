import React, { useEffect, useState } from 'react'
import { validator } from '../../utils/validator'
import TextField from '../common/form/textField'
import api from '../../api'
import SelectField from '../common/form/selectField'
import RadioField from '../common/form/radioField'
import MultiSelectField from '../common/form/multiSelectField'
import CheckBoxField from '../common/form/checkBoxField'

const RegisterForm = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
		profession: '',
		sex: 'male',
		qualities: [],
		licence: false
	})
	const [professions, setProfession] = useState()
	const [errors, setErrors] = useState({})
	const [qualities, setQualities] = useState({})

	const handleChange = (target) => {
		setData((prevState) => ({ ...prevState, [target.name]: target.value }))
	}
	useEffect(() => {
		api.professions.fetchAll().then((data) => setProfession(data))
		api.qualities.fetchAll().then((data) => setQualities(data))
	}, [])

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
		},
		profession: {
			isRequired: {
				message: 'Обязательно выберете вашу профессию'
			}
		},
		licence: {
			isRequired: {
				message:
					'Вы не можете использовать наш сервис без подтверждения лицензионного соглашения'
			}
		}
	}

	const validate = () => {
		const errors = validator(data, validatorConfig)
		setErrors(errors)
		return Object.keys(errors).length === 0
	}

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
			<SelectField
				label="Выбери свою профессию"
				options={professions}
				defaultOption="Chose..."
				name="professions"
				onChange={handleChange}
				error={errors.profession}
				value={data.profession}
			/>
			<RadioField
				options={[
					{ name: 'Male', value: 'male' },
					{ name: 'Female', value: 'female' },
					{ name: 'Other', value: 'other' }
				]}
				value={data.sex}
				name="sex"
				onChange={handleChange}
				label="
				Выберете ваш пол"
			/>
			<MultiSelectField
				options={qualities}
				onChange={handleChange}
				defaultValue={data.qualities}
				name="qualities"
				label="Выберете ваши качества"
			/>
			<CheckBoxField
				name="licence"
				value={data.licence}
				onChange={handleChange}
				error={errors.licence}
			>
				Подтвердить <a>лицензионное соглашение</a>
			</CheckBoxField>
			<button type="submit" className="btn btn-primary w-100 mx-auto">
				Submit
			</button>
		</form>
	)
}

export default RegisterForm
