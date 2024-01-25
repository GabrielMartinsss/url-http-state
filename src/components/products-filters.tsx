import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const productsFiltersSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
})

type ProductsFiltersSchema = z.infer<typeof productsFiltersSchema>

export function ProductsFilters() {
  const { register, handleSubmit } = useForm<ProductsFiltersSchema>(({
    resolver: zodResolver(productsFiltersSchema)
  }))

  function handleFilterProducts({ id, name }: ProductsFiltersSchema) {
    console.log({name, id})
  }

  return (
    <form onSubmit={handleSubmit(handleFilterProducts)} className="flex items-center gap-2">
      <Input placeholder="ID do produto" {...register('id')} />
      <Input placeholder="Nome do produto" {...register('name')}/>

      <Button type="submit" variant="ghost" className="gap-2">
        <Search className="size-4"/>
        Filtrar
      </Button>
    </form>
  )  
}