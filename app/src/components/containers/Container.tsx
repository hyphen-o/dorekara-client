import { styles } from "@/styles/components/containers/container.style";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode
}

const Container: FC<Props> = ({ children }) => {
  return <div css={styles.container}>{children}</div>
}

export default Container;