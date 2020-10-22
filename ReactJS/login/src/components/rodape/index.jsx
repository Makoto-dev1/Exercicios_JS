//Mesma coisa que 'using EntityFrameworkCore'
import React from 'react';
import './index.css';

//Criada uma function pois renderiza somente html
function Rodape() {
    return (
        <footer className='background'>
            <h1>Senai Informática 132</h1>
        </footer>
    )
}

//Deixa o webComponent visivel para outros webcomponets
export default Rodape