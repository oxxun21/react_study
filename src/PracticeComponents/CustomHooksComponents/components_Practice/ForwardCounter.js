import useCounter from '../Hooks_Practice/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  const counter =  useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
