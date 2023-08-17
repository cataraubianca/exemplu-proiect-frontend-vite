import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../atoms/Button/Button.jsx';
import TextField from '../../atoms/TextField/TextField.jsx';
import styles from './addItemBar.module.css';

export const AddItemBar = ({ handleInput, handleOnClick }) => {
    
    return (
        <div className={styles.contentWrapper}>
            <TextField onChange={handleInput} placeholder={'Type in here'} width={'370px'} />
            <Button onClick={handleOnClick} size='small'>Add</Button>
        </div>
    );
};

AddItemBar.propTypes = {
    handleInput: PropTypes.func,
    handleOnClick: PropTypes.func,
};

export default AddItemBar;
