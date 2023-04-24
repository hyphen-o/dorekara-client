import { FC } from "react";
import Image from "next/image";
import { styles } from "@/styles/components/images/authlogo.style";

type Props = {
}

const AuthLogo: FC<Props> = () => {
  return (
    <>
      <Image src="/images/logo.png" alt="dorekara-logo" css={styles.image} width={250} height={250}></Image>
    </>
  )
}

export default AuthLogo;