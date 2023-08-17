import React from 'react';

import styles from './TextField.module.css';

const TextField = ({ placeholder, width, onChange }) => {
  return (
    <div className={styles.componentWrapper}>
      <div className={styles.textField} style={{ width }}>
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          onChange={onChange} 
        />
      </div>
    </div>
  );
};

export default TextField;
