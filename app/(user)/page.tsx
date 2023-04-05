import { gql, GraphQLClient } from 'graphql-request'
import AllProducts from './AllProducts'
import Row from './Row'
import SlideShow from './SlideShow'

const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_SHOPIFY_URL!, {
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_TOKEN!
  }
})
export default async function Home() {
  const COLLECTION_QUERY = gql`
    {
      collectionByHandle(handle: "mens-products") {
        id
        title
        products(first: 12) {
          edges {
            node {
              id
              title
              variants(first: 6) {
                edges {
                  node {
                    id
                  }
                }
              }
              images(first: 1) {
                edges {
                  node {
                    altText
                    transformedSrc
                  }
                }
              }
            }
          }
        }
      }
    }
  `
  const res: any = await graphQLClient.request(COLLECTION_QUERY)
  if (res.errors) {
    console.log(JSON.stringify(res.errors, null, 2))
    throw Error('Unable to retrieve Shopify Products. Please check logs')
  }

  const collection = res.collectionByHandle
  return (
    <main>
      <Row />
      <SlideShow />
      <AllProducts collection={collection} />
    </main>
  )
}
