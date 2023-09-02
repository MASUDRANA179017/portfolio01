import Image from 'next/image'
import styles from './page.module.css'
import Layout from '@/components/layout/Layout'
import Banar from '@/components/banar'
import OurClient from '@/components/ourclient'
import Teammember from '@/components/Team'
import Blog from '@/components/blog'
import Work from '@/components/work'

export default function Home() {
  return (
    <>
    <Layout>
      <Banar />
      <OurClient />
      <Teammember />
      <Blog/>
      <Work/>
    </Layout>
    </>
  )
}
