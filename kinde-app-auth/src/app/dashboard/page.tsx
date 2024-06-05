import React from 'react'
import { getKindeServerSession,createKindeManagementAPIClient } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const {
    getAccessToken,
    getIdToken,
    getUser,
    getRoles,
    getPermissions,
    isAuthenticated,
    getBooleanFlag
} = getKindeServerSession()
    const user = await getUser()
    const api = await createKindeManagementAPIClient() 

    if(!user){
        return redirect('/signin')
    }
  return (
    <div>
        <h1>Hey {user.family_name}</h1>
    </div>
  )
}

