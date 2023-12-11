import { useState } from "react";
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
 
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (event) => {
    const name = event.target.name
    console.log("name", name);
    // setState(prev => ({ [name]: prev[name] + 1 }));
    switch (name) {
      case 'good':
        setGood(prev => (prev + 1));
        break;
      case 'neutral':
        setNeutral(prev => (prev + 1));
        break;
      case 'bad':
        setBad(prev => (prev + 1));
        break;
      // add default because of err in terminal
      default: break;
    }
  };

  const countTotalFeedback = () => {
    // const { good, neutral, bad } = state;
    const result = good + neutral + bad;
    return result;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const result = total ? Math.round((good * 100) / total) : 0;
    return result;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={css.feedback_box}>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleClick}
        />
      </Section>

      <Section title='Statistics'>
        {
          total
            ? (
              <Statistic
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            )
            : <Notification message="There is no feedback" />
        }
      </Section>
    </div>
  );
}

export default App;
// state and App class before refactoring

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//   handleClick = (event) => {
//     const name = event.target.name
//     console.log("event", name);
//     this.setState(prev => ({ [name]: prev[name] + 1 }));
//   };
   
//    countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
// 		const result = good + neutral + bad;
// 		return result;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const result = total ? Math.round((this.state.good * 100) / total) : 0;
//     return result;
//   };
 
  
//   render() {
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div className={css.feedback_box}>
//         <Section title='Please leave feedback'> 
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleClick}
//           />
//         </Section>
        
//         <Section title='Statistics'>
//           {
//             total 
//               ? (
//                 <Statistic
//                   good={this.state.good}
//                   neutral={this.state.neutral}
//                   bad={this.state.bad}
//                   total={total}
//                   positivePercentage={positivePercentage}
//                 />
//               )
//               : <Notification message="There is no feedback"/>
//           }
//         </Section>
//       </div>
//     )
//   }
// }
