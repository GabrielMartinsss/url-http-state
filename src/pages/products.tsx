import { PlusCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Dialog, DialogTrigger } from "../components/ui/dialog";
import { ProductsFilters } from "../components/products-filters";
import { CreateProductDialog } from "../components/create-product-dialog";
import { getProducts } from "../data/products";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom"

export function Products() {
  const [search] = useSearchParams()

  const id = search.get('id')
  const name = search.get('name')

  const { data: products } = useQuery({
    queryKey: ['products', id, name],
    queryFn: () => getProducts({ id, name }),
  })

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h1 className="font-semibold text-4xl">Produtos</h1>
      <div  className="flex items-center justify-between">
        <ProductsFilters />

        <Dialog>
          <DialogTrigger asChild>
            <Button type="button" className="gap-2">
              <PlusCircle className="size-4" />
              Novo produto
            </Button>
          </DialogTrigger>

          <CreateProductDialog />
        </Dialog>

      </div>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Preço</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {products?.map((product) => {
              return (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>
                    {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
