import React, { useState } from 'react';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  const [feedback, setFeedback] = useState({ ...initialState });

  const handleClick = statsKey => {
    setFeedback(f => ({ ...f, [statsKey]: f[statsKey] + 1 }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() === 0
      ? 'There is no feedback'
      : Math.ceil((feedback.good / countTotalFeedback()) * 100) + '%';
  };

  const statsTitles = Object.keys(feedback);

  return (
    <div>
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={statsTitles}
            onLeaveFeedback={handleClick}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              stats={feedback}
              options={statsTitles}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    </div>
  );
};
