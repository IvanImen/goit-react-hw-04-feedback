import { StatisticButton } from 'components';
import React from 'react';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(option => (
        <StatisticButton key={option} onLeaveFeedback={onLeaveFeedback}>
          {option}
        </StatisticButton>
      ))}
    </>
  );
};
