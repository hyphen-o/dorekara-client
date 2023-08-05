import SongForm from '@/components/forms/SongForm'
import { createGetAppLayout } from '@/components/layouts/AppLayout'
import { NextPageWithLayout } from '@/components/types/Layout.type'
import { styles } from '@/styles/pages/Create.style'
import { useRouter } from 'next/router'

const Edit: NextPageWithLayout = () => {
  const router = useRouter()
  const user_id = router.query.id

  return (
    <>
      <div css={styles.wrapper}>
        <SongForm id={Number(user_id)}></SongForm>
      </div>
    </>
  )
}

Edit.getLayout = createGetAppLayout({ label: '楽曲を編集' })

export default Edit
