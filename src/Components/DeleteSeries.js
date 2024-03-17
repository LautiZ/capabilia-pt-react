import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditSeries = ({ id }) => {
    const [formData, setFormData] = useState({
        tv_series_id: '',
        week_day: '',
        show_time: ''
    });
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            if (id != 0) {
                const response = await axios.get(`http://localhost:4001/api/series/${id}`);
                console.log(response)
                const data = response.data.body[0];
        
                // Ajusta los nombres de las claves de los datos devueltos por la API
                setFormData({
                    tv_series_id: data.tv_series_id,
                    week_day: data.week_day,
                    show_time: data.show_time
                });
            }
        } catch (error) {
            console.error('Error al cargar los datos:', error);
        }
    };
    

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id != 0) {
                formData.id = id
            }
            const response = await axios.put(`http://localhost:4001/api/series/`, formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error al eliminar el registro:', error);
        }
    };

    return (
        <div>
            <h2>Eliminar Serie</h2>
            <form onSubmit={handleFormSubmit}>
                <button type="submit">Eliminar</button>
            </form>
        </div>
    );
};

export default EditSeries;
