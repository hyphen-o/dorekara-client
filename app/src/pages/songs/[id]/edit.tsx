import SongForm from '@/components/forms/SongForm'
import { createGetAppLayout } from '@/components/layouts/AppLayout'
import Title from '@/components/texts/PageTitle'
import { NextPageWithLayout } from '@/components/types/Layout.type'
import { styles } from '@/styles/pages/Create.style'
import { useRouter } from 'next/router'

const Edit: NextPageWithLayout = () => {
  const router = useRouter()
  const user_id = router.query.id

  return (
    <>
      <div css={styles.wrapper}>
        <Title title='編集'></Title>
        <SongForm id={Number(user_id)}></SongForm>
      </div>
    </>
  )
}

Edit.getLayout = createGetAppLayout()

export default Edit
