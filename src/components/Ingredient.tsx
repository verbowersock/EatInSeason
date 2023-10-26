import { IngredientType } from '@/types';
import React from 'react';

const Ingredient = ({ label, selected, onChange }: IngredientType) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className='my-4 flex items-center gap-2 text-xl'>
      <input
        type='checkbox'
        id={label}
        className='
    h-4 w-4 appearance-none rounded-sm border-2 border-leafyGreen bg-white checked:border-transparent checked:bg-leafyGreen
    focus:outline-none'
        checked={selected}
        onChange={handleInputChange}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Ingredient;
