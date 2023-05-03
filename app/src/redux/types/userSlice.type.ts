export type User = {
  id: number | null
  name: string | null
}

export type UserValue = {
  value: User
}

export type UserState = {
  user: UserValue
}
