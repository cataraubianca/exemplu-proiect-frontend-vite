import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';

const TableComponent = ({ columns, data }) => {
    return (
        <table className={styles.tableComponent}>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column, columnIndex) => (
                            <td key={columnIndex}>{row[column.field]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TableComponent.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            header: PropTypes.string,
            field: PropTypes.string,
        })
    ),
    data: PropTypes.arrayOf(PropTypes.object),
};

export default TableComponent;
