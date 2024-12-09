import React, { useEffect, useState } from 'react';

const Cube = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://api.example.com/cube-data'); // Ruta a la API de datos del cubo
                if (!response.ok) {
                    throw new Error('Error fetching data');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []); // Dependencia vacía para que se ejecute solo una vez

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Datos de Cube</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default Cube;
