import { styles } from "@/styles/components/inputs/InputKey.style";
import { FC, useState } from "react";


const InputKey : FC = () => {

  const [key, setKey] = useState('0');

  return (
    <>
      <input css={styles.input} type="number" min='-5' max='5' value={key} placeholder='key' onChange={(e) => setKey(e.target.value)}/>
    </>
  )
}

export default InputKey