import styles from './box.module.scss';

export const Box = () => {
  const { box } = styles;
  return (
    <div className={box}>
      <h1>This is a box</h1>
    </div>
  );
};
