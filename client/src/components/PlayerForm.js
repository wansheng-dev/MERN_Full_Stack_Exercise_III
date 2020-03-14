import React, { useState } from 'react';
import { navigate } from '@reach/router';

const PlayerForm = ({ initialValues, sendApiRequest }) => {
  const [ playerState, setPlayerState ] = useState(initialValues);
  const [ errors, setErrors ] = useState([]); 

  const handleChange = e => {
    e.preventDefault();
    setPlayerState({
      ...playerState,
      [e.target.name]: e.target.value
    })
  };

  const handleCancel = e => {
    return navigate('/')
  }

  const handleSubmit = e => {
    e.preventDefault();

    setErrors([]); // 

    sendApiRequest(playerState)
      .then(() => navigate('/'))
      .catch(err => {
        const arr = [];

        for (const key in err.response.data.errors) {
          arr.push(err.response.data.errors[key].message);
        }
        
        setErrors(arr);
      });
  }

  return (
    <>
      <form onSubmit = { e =>  handleSubmit (e, playerState) }>
        <label>Player Name:</label>
        <input 
          minLength = '2'
          type = 'text'
          name = 'name'
          value = { playerState.name }
          onChange = { handleChange }
          />
        { errors.map((error, i) => (
          <p style={{color:'red'}} key={i}> { error } </p>
        ))}
        <br/>
        <label>Preferred Position:</label>
        <input 
          type = 'text'
          name = 'position'
          value = { playerState.position }
          onChange = { handleChange }
        />
        <br/>
        <button onClick = { handleCancel }> Cancel </button> {' '}
        <button type = 'submit'> Add </button>
      </form>
    </>
  )
}

export default PlayerForm;
