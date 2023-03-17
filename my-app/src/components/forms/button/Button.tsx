import React from 'react';

import styles from './Button.module.scss';

type Props = {
  text: string,
  onClick?: any
}

function Button({text, onClick}: Props) {

  return (
    <button onClick={onClick} className={styles.button}>{text}</button>
  );
}

export default Button;
