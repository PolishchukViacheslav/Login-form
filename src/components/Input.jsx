/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useReduxForm } from './useReduxForm';

export const Input = ({ id = '', label = '', type }) => {
  const isCheckbox = type === 'checkbox';
  const { setValueToReduxFor } = useReduxForm();
  const initialState = isCheckbox ? false : '';
  const [value, setValue] = useState(initialState);

  useEffect(() => {
    setValueToReduxFor(id, value);
  }, [value]);

  const handleChange = ({ target }) => {
    if (isCheckbox) {
      setValue((prevState) => !prevState);
      return;
    }
    setValue(target.value);
  };

  return (
    (isCheckbox
      ? (
        <div className="form__input--checkbox">
          <input
            type={type}
            id={id}
            checked={value}
            onChange={handleChange}
          />
          <label htmlFor={id}>Read and accept Term & Conditions</label>
        </div>
      ) : (
        <label htmlFor={id} className="form__label">
          {label}
          <input
            autoComplete="true"
            value={value}
            type={type}
            id={id}
            className="form__input"
            placeholder={`Enter ${label.toLowerCase()}`}
            onChange={handleChange}
          />
        </label>
      ))
  );
};
