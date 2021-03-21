import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'

import client from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'

import PagesTemplate, { PageTemplateProps } from 'templates/Pages'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  //retorna um loading ou qlqr coisa enquanto está sendo criado
  if (router.isFallback) return null

  return <PagesTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pages } = await client.request(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!pages) return { notFound: true }

  return {
    props: {
      heading: pages[0].heading,
      body: pages[0].body.html
    }
  }
}

// getStaticPaths => serve para gerar as urls em build time /about, /trips/himalaias
// getStaticProps => serve para buscar os dados da página (props) - build time
// getServerSideProps => serve para buscar os dados da página (props) - runtime
// - em toda requisição
// getInitialProps => serve para buscar os dados da página (props) - runtime -
// em toda requisição (bundle também vem para o client) - hydrate
