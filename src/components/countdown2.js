import React,{Component,Fragment} from 'react';

export default class CountDown extends Component {
  state = {
    remaining: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    },
    isExpired: false
  };
  // used to set and clear interval
  timer;
  // used to calculate the distance between "current date and time" and the "target date and time"
  distance;

  componentDidMount() {
    this.setDate();
    this.counter();
  }

  setDate = () => {
    const { targetDate, targetTime } = this.props,
      // Get todays date and time
      now = new Date().getTime(),
      // Set the date we're counting down to
      countDownDate = new Date(targetDate + " " + targetTime).getTime();
    
    // Find the distance between now and the count down date
    this.distance = countDownDate - now;
    
    // target date and time is less than current date and time
    if (this.distance < 0) {
      clearInterval(this.timer);
      this.setState({ isExpired: true });
    } else {
      this.setState({
        remaining: {
          days: Math.floor(this.distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((this.distance % (1000 * 60)) / 1000)
        },
        isExpired: false
      });
    }
  };

  counter = () => {
    this.timer = setInterval(() => {
      this.setDate();
    }, 1000);
  };

  render() {
    const { remaining, isExpired } = this.state,
    {targetDate, targetTime} = this.props;
    
    return (
      <div>
        {!isExpired && targetDate && targetTime ? (
          <div style={{direction:'rtl',display:'flex',flexDirection:'row-reverse'}} className="counter">
            {Object.entries(remaining).map((el, i) => (
              <div key={i} className="entry">
                <div key={el[1]} className="entry-value">
                  <span className="count top curr flipTop">{el[1] + 1}</span>
                  <span className="count top next">{el[1]}</span>
                  <span className="count bottom next flipBottom">{el[1]}</span>
                  <span className="count bottom curr">{el[1] + 1}</span>
                </div>
                <div className="entry-title">{el[0].toUpperCase()}</div>
              </div>
            ))}
          </div>
        ) : (
            <span></span>
        )}
      </div> 
    );
  }
}

//const app = <CountDown targetDate="Jun 25, 2020" targetTime="18:00:00" />;

