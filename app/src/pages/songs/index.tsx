
import { createGetAppLayout } from '@/components/layouts/AppLayout'
import { NextPageWithLayout } from '@/components/types/Layout.type'
import { styles } from '@/styles/pages/Home.style'

const Index: NextPageWithLayout = () => {
  return (
    <>
      <div css={styles.wrapper}>
        
      </div>
    </>
  )
}

Index.getLayout = createGetAppLayout()

export default Index
