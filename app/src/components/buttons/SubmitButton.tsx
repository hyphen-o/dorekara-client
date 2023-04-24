import { styles } from "@/styles/components/buttons/button.style"
import type { FC } from "react"

type Props = {
  text: string
}

const SubmitButton: FC<Props> = ({ text }) => {
  return (
    <>
        <button css={styles.button({isSubmit: true})} type="submit">{text}</button>
    </>
  )
}

export default SubmitButton