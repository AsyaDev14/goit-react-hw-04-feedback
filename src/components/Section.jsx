import React from "react";
import css from './feedback.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <p className={css.feedback_title}>{title}</p>
      {children}
    </>
  );
};