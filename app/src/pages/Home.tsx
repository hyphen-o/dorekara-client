import SingButton from '@/components/buttons/SingButton'
import { AppLayout } from '@/components/layouts/AppLayout'
import { NextPageWithLayout } from '@/components/types/Layout.type'

const home: NextPageWithLayout = () => {
  return (
    <>
      <SingButton></SingButton>
      <h1>This is Home</h1>
    </>
  )
}

home.getLayout = AppLayout

export default home
