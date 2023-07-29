import type { FC } from 'react';

type Props = {
  text: string,
  maxLength: number,
}

const TruncateString : FC<Props> = ({ text, maxLength }) => {
  if (text.length > maxLength) {
    return <span>{text.slice(0, maxLength)}...</span>;
  }
  return <span>{text}</span>;
};

export default TruncateString