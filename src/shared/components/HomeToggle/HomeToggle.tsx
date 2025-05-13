'use client';
import React, { useState } from 'react';
import * as style from "./HomeToggle.css";
import clsx from 'clsx';

const HomeToggle = () => {

  const TOGGLE_OPTIONS = {
    WATCHA_HOME: '왓챠홈',
    MAGAZINE: '매거진',
  };

  const [selected, setSelected] = useState<string>(TOGGLE_OPTIONS.WATCHA_HOME);

  const handleToggle = (value: string) => {
    setSelected(value);
  };

  const handleStopClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }

  return (
    <div className={style.toggleWrapper}>
      <div className={style.toggleContainer}>
          <p 
            className={style.toggleText({ active: selected === TOGGLE_OPTIONS.WATCHA_HOME })}
            onClick={() => handleToggle(TOGGLE_OPTIONS.WATCHA_HOME)}
            >왓챠홈
          </p>
          <p 
            className={style.toggleText({ active: selected === TOGGLE_OPTIONS.MAGAZINE})}
            onClick={() => handleToggle(TOGGLE_OPTIONS.MAGAZINE)}
          >매거진
          </p>
          <div className={clsx(
            style.toggleButton,
            selected === TOGGLE_OPTIONS.MAGAZINE ? style.toggleButtonOn : style.toggleButtonOff)}
            onClick={handleStopClick}
          ></div>
        </div>
      </div>
  );
};

export default HomeToggle;