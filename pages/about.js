import Link from 'next/link'
import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <div>About us</div>
      <div>
        Back to{' '}
        <Link href="/" as={process.env.BACKEND_URL + '/'}>
          <a>Home</a>
        </Link>
      </div>
    </div>
  )
}
