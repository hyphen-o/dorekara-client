import { historyApi } from '@/api/routes/HistoriesApi'
import DatesButton from '@/components/buttons/squarebuttons/DatesButton'
import { createGetAppLayout } from '@/components/layouts/AppLayout'
import { NextPageWithLayout } from '@/components/types/Layout.type'
import { setDate } from '@/redux/slices/dateSlice'
import { DateState } from '@/redux/types/dateSlice.type'
import { styles } from '@/styles/pages/Songs.style'
import { authUtils } from '@/utils/authUtils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Index: NextPageWithLayout = () => {
  const router = useRouter()
  const dates = useSelector((state: DateState) => state.date.value)
  const dispatch = useDispatch()

  useEffect(() => {
    ;(async () => {
      const user = await authUtils.isAuthenticated()
      if (!user) router.push('login')
      const res = await historyApi.getDates(user.id)
      dispatch(setDate(res.data[0]))
    })()
  }, [])

  return (
    <>
      <div css={styles.wrapper}>
        {dates.map((date) => {
          return (
            <>
              <DatesButton date={date.date} />
            </>
          )
        })}
      </div>
    </>
  )
}

Index.getLayout = createGetAppLayout({isHome: false, label: "カラオケ履歴"})

export default Index
