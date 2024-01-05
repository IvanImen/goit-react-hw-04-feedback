import React from 'react';

export const StatisticButton = ({ onLeaveFeedback, children }) => {
  return <button onClick={() => onLeaveFeedback(children)}>{children}</button>;
};
