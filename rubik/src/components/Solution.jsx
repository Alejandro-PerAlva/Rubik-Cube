import React, { useEffect, useState } from 'react';

const Solution = () => {
    const [solutions, setSolutions] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchSolutions() {
            try {
                const response = await fetch('https://api.example.com/solutions'); // Ruta a la API de soluciones
                if (!response.ok) {
                    throw new Error('Error fetching solutions');
                }
                const solutionsData = await response.json();
                setSolutions(solutionsData);
            } catch (error) {
                setError(error);
                console.error('Error fetching solutions:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchSolutions();
    }, []); // Dependencia vacía para que se ejecute solo una vez

    if (loading) return <div>Cargando soluciones...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h2>Soluciones</h2>
            <ul>
                {solutions.map(solution => (
                    <li key={solution.id}>{solution.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Solution;
