import { useState } from "react";
import "./App.css";
import { Section } from "./components/Section/Section";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./components/Statistics/TStatistics";
import { Notification } from "./components/Notification/Notification";

const INITIAL_FEEDBACK = {
  good: 0, neutral: 0, bad: 0
}

function App() {

  const [feedback, setFeedback] = useState(INITIAL_FEEDBACK);

  const handleFeedbackChange = (event) => {
    const { name } = event.target;
    setFeedback({ ...feedback, [name]: feedback[name] + 1 });
  }

  // countTotalFeedback() {
  //   return Object.values(this.state).reduce(
  //     (total, feedback) => (total += feedback)
  //   );
  // }

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce(
      (total, votes) => (total += votes)
    );
  }

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? Math.round((feedback.good / countTotalFeedback()) * 100)
      : "can't count";
  }

  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleFeedbackChange}
        />
      </Section>
      {countTotalFeedback ? (
        <Section title='Statistic'>
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message='There is no feedback' />
      )}
    </>
  );
}

export default App;
