import React, {
  FC,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useField } from '@unform/core';

import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [showPassword, setShowPassword] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  return (
    <Container isErrored={!!error}>
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        type={showPassword ? 'text' : rest.type}
      />

      {rest.type === 'password' && !showPassword && (
        <FiEye onClick={handleShowPassword} />
      )}

      {rest.type === 'password' && showPassword && (
        <FiEyeOff onClick={handleShowPassword} />
      )}
    </Container>
  );
};

export default Input;
