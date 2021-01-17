import React, { FC, SelectHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  placeholder: string;
  options: Array<{
    value: string;
    key: string;
  }>;
}

const Select: FC<InputProps> = ({ name, placeholder, options, ...rest }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      isErrored={!!error}
      defaultValue={defaultValue}
      ref={selectRef}
      {...rest}
    >
      <option value="0">{placeholder}</option>

      {options.map(option => (
        <option key={option.key} value={option.value}>
          {option.value}
        </option>
      ))}
    </Container>
  );
};

export default Select;
