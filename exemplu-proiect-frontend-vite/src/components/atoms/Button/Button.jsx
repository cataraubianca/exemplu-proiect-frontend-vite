import styles from './Button.module.css';
import clsx from 'clsx';

function Button({ onClick, variant = 'secondary', size = 'medium', rounded, ...props }) {
  return (
    <button
      //variant can be primary for the red button and secondary for the grey one
      className={clsx(
        { [styles.Button]: true},
        { [styles.rounded]: rounded },
        { [styles.primary]: variant === 'primary' },
        { [styles.secondary]: variant === 'secondary' },
        { [styles.medium]: size === 'medium' },
        { [styles.small]: size === 'small' },
        { [styles.large]: size === 'large' }
      )}
      onClick={onClick}
      {...props}
    ></button>
  );
}

export default Button;