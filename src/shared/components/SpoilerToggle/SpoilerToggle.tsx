'use client';
import * as style from './SpoilerToggle.css';
import { useState } from 'react';

const SpoilerToggle = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSpoilerToggleClick = () => {
    setIsSelected(!isSelected);
  }
  return (
    <div className={style.spoilerToggleWrapper}>
      <div className={style.spoilerToggleBar({active: isSelected})}>
        <div 
          className={style.spoilerToggleButton({active: isSelected})}
          onClick={handleSpoilerToggleClick}>
        </div>
      </div>
    </div>
  );
};

export default SpoilerToggle;