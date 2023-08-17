import React, { useEffect, useState } from 'react';
import TableComponent from "../../atoms/Table/Table"; 
import { _delete, _get } from "../../../utils/api";
import Button from '../../atoms/Button/Button';
import styles from './allItems.module.css'; // Import your module-specific CSS

const AllItems = () => {
    const [data, setData] = useState([]); 
    const columns = [
        { header: 'ID', field: 'id' },
        { header: 'Text', field: 'value' },
        { header: 'Delete', field: 'delete' },
    ];

    const handleDelete = async (id) => {
        try {
            await _delete(`http://localhost:3000/texts/${id}`);
            window.location.reload()
          } catch (e) {
            console.log(e);
          }
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await _get("http://localhost:3000/texts");

                const modifiedData = response.data.map(item => ({
                    ...item,
                    delete: (
                        <div className={styles.centered}>
                            <Button variant="primary" size="small" onClick={() => handleDelete(item.id)}>Delete</Button>
                        </div>
                    )
                }));

                setData(modifiedData);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <TableComponent data={data} columns={columns} />
    );
}

export default AllItems;
