import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmite = (e) => {
        e.preventDefault();
        // console.log('Bien Hecho');

        if(inputValue.trim().length > 2){
            // setCategories(['HunterXHunter', ...categories]);

            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmite}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />            
        </form>
    )
}

AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}
