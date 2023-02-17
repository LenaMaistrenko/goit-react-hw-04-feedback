import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import css from './App.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    return Number(good + bad + neutral);
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.ceil((good / countTotalFeedback()) * 100)
      : 0;
  };

  const total = countTotalFeedback();
  const persentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.container}>
      <Section title="Please live feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          persentage={persentage}
        />
      </Section>
    </div>
  );
}
