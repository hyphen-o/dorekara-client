import SongForm from '@/components/forms/SongForm'
import { createGetAppLayout } from '@/components/layouts/AppLayout'
import { NextPageWithLayout } from '@/components/types/Layout.type'
import { styles } from '@/styles/pages/Create.style'

const Create: NextPageWithLayout = () => {
  return (
    <>
      <div css={styles.wrapper}>
        <SongForm></SongForm>
      </div>
    </>
  )
}

Create.getLayout = createGetAppLayout({ label: '楽曲を作成' })

export default Create
