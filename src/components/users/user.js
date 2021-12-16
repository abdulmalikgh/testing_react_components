import { useState, useEffect } from 'react'
import axios from 'axios'
export default function User({ id }) {
    const [user, setUser] = useState(null)

    async function fetchUser(id) {
        try {
            const { data } = await axios.get(`/user/${id}`)
            setUser( data )
        } catch (error) {
            console.error(error)
        }
        
    }

    useEffect(() => {
        fetchUser(id)
    },[id])

    if(!user) {
        return <div role='loading'>{'Loading...'}</div>
    }
    return (
        <details>
            <summary role='name'>
                {user.name}
            </summary>
            <strong role='age'>
                {user.age}
            </strong> years old
            <br />
            <address role='address'>lives in {user.address}</address>
        </details>
    )
}