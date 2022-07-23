import React, { useState } from 'react'

function Count() {
    const [name, setName] = useState({ firstName: '', lastName: '' });
    return (
        <div className="tc">
            <form action="">
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })}
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })}
                />
                <h2>First name is: {name.firstName}</h2>
                <h2>Last name is: {name.lastName}</h2>


            </form>


        </div>
    )
}
export default Count