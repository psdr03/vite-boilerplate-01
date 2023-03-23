import styles from './box.module.scss';

const Box = () => {
  const { box } = styles;
  return (
    <div className={box}>
      <h1>This is a box</h1>
    </div>
  );
};

export default Box;
