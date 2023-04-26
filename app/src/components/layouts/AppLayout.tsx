import { styles } from '@/styles/components/layouts/AppLayout.styles';
import { GetLayout } from "../types/Layout.type";
import AppLogo from '../images/AppLogo';
import LogoText from '../texts/LogoText';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const AppLayout: GetLayout = (page) => {
  const router = useRouter()

  useEffect(()=> {
    const token = localStorage.getItem('token')
    if(!token) router.push('login');
  })

  return (
    <>
    <header css={styles.header} >
      <AppLogo />
      <LogoText />
    </header>
    <main>
      {page}
    </main>
    </>
  )
  
}