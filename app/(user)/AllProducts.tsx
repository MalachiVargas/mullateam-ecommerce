import ProductCard from './ProductCard'

type AllProductsProps = {
  collection: any
}

const AllProducts = async ({ collection }: AllProductsProps) => {
  return (
    <div>
      {collection?.products?.edges.length > 0 && (
        <section className="container mx-auto py-12">
          <div className="grid grid-flow-row grid-cols-3 grid-rows-auto gap-8">
            {collection.products.edges.map((product: any) => {
              return <ProductCard key={product.id} product={product} />
            })}
          </div>
        </section>
      )}
    </div>
  )
}

export default AllProducts
