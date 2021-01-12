import React, { useEffect, useState } from 'react';
// import propTypes from 'prop-types';
import FeedbackOptions from './Controls/Controls';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function Feedback() {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = event => {
    setOptions({
      ...options,
      [event.target.name]: options[event.target.name] + 1,
    });
  };

  const countTotalFeedback = () =>
    Object.values(options).reduce((total, option) => total + option);

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 / countTotalFeedback()) * options.good);
  };

  return (
    <div className="feedback">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
        {countTotalFeedback() === 0 && (
          <Notification message="No feedback given" />
        )}
      </Section>

      {!(countTotalFeedback() === 0) && (
        <Section title="Statistics">
          <Statistics
            options={options}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );

  //   state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };

  //   countTotalFeedback = () => {
  //     const { good, neutral, bad } = this.state;
  //     return good + neutral + bad;
  //   };

  //   countPositiveFeedbackPercentage = () => {
  //     return Math.round((100 / this.countTotalFeedback()) * this.state.good);
  //   };

  //   onLeaveFeedback = (event) => {
  //     return this.setState((prevState) => ({
  //       [event.target.value]: prevState[event.target.value] + 1,
  //     }));
  //   };

  //   render() {
  //     const { good, neutral, bad } = this.state;
  //     return (
  //       <div className="feedback">
  //         <Section title="Please leave feedback">
  //           <FeedbackOptions
  //             options={["Good", "Neutral", "Bad"]}
  //             onLeaveFeedback={this.onLeaveFeedback}
  //           />
  //           {this.countTotalFeedback() === 0 && (
  //             <Notification message="No feedback given" />
  //           )}
  //         </Section>

  //         {!(this.countTotalFeedback() === 0) && (
  //           <Section title="Statistics">
  //             <Statistics
  //               good={good}
  //               neutral={neutral}
  //               bad={bad}
  //               total={this.countTotalFeedback()}
  //               positivePercentage={this.countPositiveFeedbackPercentage()}
  //             />
  //           </Section>
  //         )}
  //       </div>
  //     );
  //   }
}
export default Feedback;
