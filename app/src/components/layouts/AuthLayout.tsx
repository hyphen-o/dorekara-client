import { useEffect } from 'react';
import AuthLogo from '../images/AuthLogo'
import { GetLayout } from "../types/Layout.type";
import { useRouter } from 'next/router';

export const AuthLayout: GetLayout = (page) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      router.push('home')
    }
  })

  return (
    <>
    <header>
      <AuthLogo />
    </header>
    <main>
      {page}
    </main>
    </>
  )
  
}