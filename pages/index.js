import Head from 'next/head'
import Link from 'next/link'

const index = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      Hello World.{' '}
      <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
        <a>About</a>
      </Link>
    </div>
  )
}

export default index