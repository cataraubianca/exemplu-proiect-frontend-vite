import React, { useState } from 'react';
import { AddItemBar } from '../../molecules/addItemBar/addItemBar';
import { _post } from '../../../utils/api';
const AddItem = () => {
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleOnClick = async () => { 
        try {
            await _post("http://localhost:3000/texts", {
              value: input
            });
            window.location.reload()
          } catch (e) {
            console.log(e);
          }
    };

    return (
        <div>
            <AddItemBar handleInput={handleInput} handleOnClick={handleOnClick} /> {/* Pass the function itself */}
        </div>
    );
};

export default AddItem;
