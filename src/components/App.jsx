import { Component } from "react";
import css from './feedback.module.css';
import { FeedbackOptions } from "./FeedbackOptions";
import { Notification } from "./Notification";
import { Section } from "./Section";
import { Statistic } from "./Statistics/Statistics";

 const options = [
  {
    name: "good",
    title: "Good",
   },
   {
    name: "neutral",
    title: "Neutral",
   },
   {
    name: "bad",
    title: "Bad",
  }
];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClick = (event) => {
    const name = event.target.name
    console.log("event", name);
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };
   
   countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
		const result = good + neutral + bad;
		return result;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const result = total ? Math.round((this.state.good * 100) / total) : 0;
    return result;
  };
 
  
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.feedback_box}>
        <Section title='Please leave feedback'> 
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        
        <Section title='Statistics'>
          {
            total 
              ? (
                <Statistic
                  good={this.state.good}
                  neutral={this.state.neutral}
                  bad={this.state.bad}
                  total={total}
                  positivePercentage={positivePercentage}
                />
              )
              : <Notification message="There is no feedback"/>
          }
        </Section>
      </div>
    )
  }
}
