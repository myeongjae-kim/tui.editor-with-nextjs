import Link from 'next/link'
import Layout from '../components/Layout'
import WysiwygEditor from '../components/WysiwygEditor'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <WysiwygEditor onChange={(value) => console.log(value)} />
  </Layout>
)

export default IndexPage
