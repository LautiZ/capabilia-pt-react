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
            } else {
                formData.id = 0
            }
            const response = await axios.post(`http://localhost:4001/api/series/`, formData);
            console.log(response.data);
            // Manejar la respuesta después de actualizar el registro
        } catch (error) {
            console.error('Error al actualizar el registro:', error);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (id != 0) {
        return (
            <div>
                <h2>Editar Serie</h2>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="tv_series_id">ID de la serie:</label>
                        <input type="text" id="tv_series_id" name="tv_series_id" value={formData.tv_series_id} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="week_day">Día de la semana:</label>
                        <input type="text" id="week_day" name="week_day" value={formData.week_day} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="show_time">Hora de emisión:</label>
                        <input type="text" id="show_time" name="show_time" value={formData.show_time} onChange={handleInputChange} />
                    </div>
    
                    <button type="submit">Guardar cambios</button>
                </form>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Agregar Serie</h2>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="tv_series_id">ID de la serie:</label>
                        <input type="text" id="tv_series_id" name="tv_series_id" value={formData.tv_series_id} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="week_day">Día de la semana:</label>
                        <input type="text" id="week_day" name="week_day" value={formData.week_day} onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="show_time">Hora de emisión:</label>
                        <input type="text" id="show_time" name="show_time" value={formData.show_time} onChange={handleInputChange} />
                    </div>
    
                    <button type="submit">Agregar</button>
                </form>
            </div>
        );
    }
};

export default EditSeries;
