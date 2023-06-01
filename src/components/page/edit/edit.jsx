import React, { useEffect, useState } from 'react'
import TextField from '../../common/form/textField'
import SelectField from '../../common/form/selectField'
import RadioField from '../../common/form/radioField'
import MultiSelectField from '../../common/form/multiSelectField'
import { useHistory, useParams } from 'react-router-dom'
import api from '../../../api'

const Edit = () => {
	const [professions, setProfession] = useState()
	const [qualities, setQualities] = useState({})
	const history = useHistory()
	const params = useParams()

	const [data, setData] = useState({
		name: '',
		email: '',
		profession: '',
		sex: 'male',
		qualities: []
	})

	const userId = params.userId

	useEffect(() => {
		api.users.getById(userId).then((user) => {
			setData({
				name: user.name,
				email: user.email,
				profession: user.profession,
				sex: user.sex,
				qualities: user.qualities.map((quality) => ({
					label: quality.name,
					value: quality._id
				}))
			})
		})
	}, [])

	useEffect(() => {
		api.professions.fetchAll().then((data) => setProfession(data))
		api.qualities.fetchAll().then((data) => setQualities(data))
	}, [])

	const handleChange = (target) => {
		setData((prevState) => ({ ...prevState, [target.name]: target.value }))
	}

	const handleUpdate = (e) => {
		e.preventDefault()
		api.users.update(userId, data)
		history.push(`/users/${userId}`)
	}

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-6 offset-md-3 shadow p-5">
					<form>
						<TextField
							label="Имя"
							name="name"
							value={data.name}
							onChange={handleChange}
						/>
						<TextField
							label="Электронная почта"
							name="email"
							value={data.email}
							onChange={handleChange}
						/>
						<SelectField
							value={data.profession._id}
							label="Выбери свою профессию"
							defaultOption="Chose..."
							options={professions}
							name="professions"
							onChange={handleChange}
						/>
						<RadioField
							options={[
								{ name: 'Male', value: 'male' },
								{ name: 'Female', value: 'female' },
								{ name: 'Other', value: 'other' }
							]}
							name="sex"
							onChange={handleChange}
							value={data.sex}
							label="
				Выберете ваш пол"
						/>
						<MultiSelectField
							name="qualewities"
							label="Выберете ваши качества"
							options={qualities}
							onChange={handleChange}
							defaultValue={data.qualities}
						/>
						<button
							onClick={handleUpdate}
							type="submit"
							className="btn btn-primary w-100 mx-auto"
						>
							Обновить
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Edit
