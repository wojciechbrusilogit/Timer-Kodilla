import styles from './TimeCounter.module.scss';

const TimeCounter = props => {
  const formatTime = counter => {
    let miliseconds = Math.floor((counter % 1000) / 1);
    let seconds = Math.floor((counter / 1000) % 60);
    let minutes = Math.floor((counter / (1000 * 60)) % 60);
    let hours = Math.floor((counter / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + miliseconds;
  }

  return (
    <div className={styles.timeCounter}>
      {formatTime(props.time)}
    </div>
  );

};


export default TimeCounter;