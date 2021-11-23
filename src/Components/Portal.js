import React, { useReducer, useState } from 'react';
import { portalReducer } from '../reducer/portalReducer';
import { portalStore } from '../store/portalStore';

const Portal = () => {
    const [state, dispatch] = useReducer(portalReducer, portalStore)
    const [name, setName] = useState('');
    return (
        <div>
            <h3>Has Patients:{state.patients.length}</h3>
            <input type="text" onChange={e => setName(e.target.value)} />
            <button onClick={() => dispatch({ type: 'ADD_PATIENT', name: name })}>Add</button>
            <br />
            <h4>.......................</h4>
            {
                state.patients.map(patient => <p key={patient.id}>
                    {patient.name} {patient.id}
                    <button onClick={() => dispatch({ type: 'REMOVE', id: patient.id })}>Delete</button>
                </p>)
            }
        </div>
    );
};

export default Portal;