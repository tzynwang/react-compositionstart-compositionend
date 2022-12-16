import React, { memo, useRef, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

const VALID_CHARS_REGEX =
  /^[\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD]*$/;

function Input1(): React.ReactElement {
  /* States */
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [canVerify, setCanVerify] = useState<boolean>(true);
  const [userInput, setUserInput] = useState<string>('');
  const isValidInput = canVerify ? !!userInput.match(VALID_CHARS_REGEX) : true;

  /* Functions */
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInput(e.target.value);
  };
  const startVerify = (): void => {
    setCanVerify(true);
  };
  const stopVerify = (): void => {
    setCanVerify(false);
  };

  /* Hooks */
  useEffect(() => {
    const ref = inputRef.current;
    ref?.addEventListener('compositionstart', stopVerify);
    ref?.addEventListener('compositionend', startVerify);
    return () => {
      ref?.removeEventListener('compositionstart', stopVerify);
      ref?.removeEventListener('compositionend', startVerify);
    };
  }, []);

  /* Main */
  return (
    <TextField
      error={!isValidInput}
      fullWidth
      helperText={isValidInput ? '' : '只能輸入中文字'}
      label="輸入一些中文（在你輸入注音時，不會進行內容判定）"
      margin="normal"
      onChange={handleUserInput}
      ref={inputRef}
      value={userInput}
      variant="standard"
    />
  );
}

export default memo(Input1);
