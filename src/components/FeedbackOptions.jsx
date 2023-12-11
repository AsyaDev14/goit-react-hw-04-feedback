import React from "react";
import css from './feedback.module.css'
export const FeedbackOptions = (props) => {
  const { options, onLeaveFeedback } = props;
  
  return (
  <div className={css.buttons_thumb}>
    {
      options.map(({ name, title }) => {
        return (
          <button
            key={name}
            type="button"
            name={name}
            className={css.feedback_button}
            onClick={onLeaveFeedback}
          >
            {title}
          </button>
        );
      })
      }
  </div>
  );
};