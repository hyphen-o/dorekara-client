import { styles } from "@/styles/components/inputs/Selector.style";
import { FC, useEffect } from "react";

type Props = {
  text: string
}

const Selector : FC<Props> = ({text}) => {
  useEffect(() => {

  })

  return (
    <>
      <select name='selector' css={styles.select}>
        <option value="">{text}</option>
      </select>
    </>
  )
}

export default Selector