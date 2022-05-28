import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import Dashboard from '../components/Dashboard'
import Loader from '../components/Loader'

const Home: NextPage = () => {
  const router = useRouter()
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/auth/signin')
    },
  })

  // Loading animation...
  if (status === 'loading') {
    return <Loader />
  }
  
  return (
    <div className="">
      <Head>
        <title>Spotify | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard />
    </div>
  )
}

export default Home
