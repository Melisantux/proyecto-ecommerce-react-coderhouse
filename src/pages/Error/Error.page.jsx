import imageError from '../../assets/wooloo-sleeping.png';

import styles from './Error.module.css';

export const Error = ({
  firstErrorMessage = "Oops! It looks like we've hit a temporary snag on our Pokemon adventure.",
  secondErrorMessage = "Our apologies, but we're currently experiencing an error that's preventing access to the page you're looking for.",
}) => {
  return (
    <div className={styles.container}>
      <div>
        <img alt='Sleeping Wooloo' src={imageError} />
      </div>
      <div className={`${styles['error-message']} press-start-font`}>
        <p>{firstErrorMessage} </p>
        <p>{secondErrorMessage}</p>
      </div>
    </div>
  );
};
