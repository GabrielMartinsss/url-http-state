import { Button } from "./ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product, createProduct } from "@/data/products";

const createProductSchema = z.object({
  name: z.string().min(1),
  price: z.coerce.number()
})

type CreateProductSchema = z.infer<typeof createProductSchema>

export function CreateProductDialog() {
  const { register, handleSubmit } = useForm<CreateProductSchema>({
    resolver: zodResolver(createProductSchema)
  })

  const queryClient = useQueryClient()

  const { mutateAsync: createProductfn } = useMutation({
    mutationFn: createProduct,
    onSuccess(responseFromAPI) {
      // const cached = queryClient.getQueryData(['products'])
      
      queryClient.setQueryData<Product[]>(['products'], data => {
        if (!data) return 

        return [...data, responseFromAPI]
      })
    },
  })

  async function handleCreateProduct({ name, price }: CreateProductSchema) {
    try {
      await createProductfn({
        name,
        price,
      })  

      alert('Produto cadastrado com sucesso.')
    } catch (error) {
      alert('Erro ao cadastrar produto')
      console.log(error)
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo produto</DialogTitle>
        <DialogDescription>Criar um novo produto no sistema</DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleCreateProduct)} className="space-y-6">
        <div className="grid grid-cols-4 items-center gap-3 text-right">
          <Label htmlFor="name">Produto</Label>
          <Input className="col-span-3" {...register('name')} />
        </div> 

        <div className="grid grid-cols-4 items-center gap-3 text-right">
          <Label htmlFor="price">Preço</Label>
          <Input className="col-span-3" {...register('price')} />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">Cancelar</Button>
          </DialogClose>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )  
}