import React, { memo, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';

const VALID_CHARS_REGEX =
  /^[\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD]*$/;

function Input2(): React.ReactElement {
  /* States */
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [userInput, setUserInput] = useState<string>('');
  const isValidInput = !!userInput.match(VALID_CHARS_REGEX);

  /* Functions */
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInput(e.target.value);
  };

  /* Main */
  return (
    <TextField
      error={!isValidInput}
      fullWidth
      helperText={isValidInput ? '' : '只能輸入中文字'}
      label="輸入一些中文（在你輸入注音時，會判定內容無效）"
      margin="normal"
      onChange={handleUserInput}
      ref={inputRef}
      value={userInput}
      variant="standard"
    />
  );
}

export default memo(Input2);
