import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

export type GetLayout = (page: ReactElement) => ReactNode // eslint-disable-line no-unused-vars

export type CreateLayout = (page: ReactElement) => ReactElement // eslint-disable-line no-unused-vars

export type NextPageWithLayout = NextPage & {
  getLayout: GetLayout
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
