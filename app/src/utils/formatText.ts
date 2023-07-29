type TruncateType = {
  text: string
  maxLength: number
}

export const truncateString = ({ text, maxLength }: TruncateType): string => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...'
  }
  return text
}
