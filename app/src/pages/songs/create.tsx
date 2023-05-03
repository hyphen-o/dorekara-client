import SongForm from '@/components/forms/SongForm'
import { createGetAppLayout } from '@/components/layouts/AppLayout'
import Title from '@/components/texts/PageTitle'
import { NextPageWithLayout } from '@/components/types/Layout.type'
import { styles } from '@/styles/pages/Create.style'

const Create: NextPageWithLayout = () => {
  return (
    <>
      <div css={styles.wrapper}>
        <Title title='作成'></Title>
        <SongForm></SongForm>
      </div>
    </>
  )
}

Create.getLayout = createGetAppLayout()

export default Create
