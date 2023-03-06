import React, {useState} from 'react'
import api from '../api'

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDeleteUser = (id) => {
        setUsers((prevState) => prevState.filter(users => users._id !== id))
    }

    return (
        <>
            <span className="badge bg-primary m-3 fs-6">Тусанут с тобой</span>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.qualities.map(item => (
                            <span
                                key={item._id}
                                className={'m-1 badge bg-' + item.color}
                            >
                                {item.name}
                            </span>
                        ))}</td>
                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate + ' / 5'}</td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => handleDeleteUser(user._id)}
                            >
                                delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default Users