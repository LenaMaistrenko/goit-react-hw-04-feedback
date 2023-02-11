import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  countTotalFeedback = () => {
    const arr = Object.values(this.state);
    return arr[0] + arr[1] + arr[2];
  };
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.ceil((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const persentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.container}>
        <Section title="Please live feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
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
}
