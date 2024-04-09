import React from 'react';
import styles from './Button.module.scss'
export default function Button({ text, children, type, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className}`}
      type={type}>
      {text} {children}
    </button>
  )
}