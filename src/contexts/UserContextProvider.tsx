import { useUser } from '@clerk/nextjs'
import React, { type ReactNode } from 'react'
import { api } from '~/utils/api'

type UserContextProps = {
  profileImageUrl: string
  isSignedIn: boolean
  isLoaded: boolean
}

export const UserContext = React.createContext<UserContextProps>({
  profileImageUrl: '',
  isSignedIn: false,
  isLoaded: false,
})
export const UserProvider = function ({ children }: { children: ReactNode }) {
  const user = useUser()
  const { data: currentUser } = api.users.getById.useQuery({
    userId: user.user?.id,
  })

  return (
    <UserContext.Provider
      value={{
        profileImageUrl:
          currentUser?.profileImageUrl ||
          'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
        isSignedIn: !!user?.isSignedIn,
        isLoaded: !!user?.isLoaded,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}