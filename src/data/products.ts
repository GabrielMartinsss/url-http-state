export interface Product {
  id: string
  name: string
  price: number
}

interface GetProductsByFilters {
  id: string | null
  name: string | null
}

export async function getProducts({ id, name }: GetProductsByFilters) {
  // delay 1,5s
  await new Promise((resolve) => setTimeout(resolve, 1500))

  let products = [
    {id: '123', name: 'Product 903', price: 135 },
    {id: '321', name: 'Product 423', price: 412 },
    {id: '141', name: 'Product 602', price: 531 },
    {id: '151', name: 'Product 146', price: 153 },
    {id: '125', name: 'Product 240', price: 125 },
    {id: '251', name: 'Product 892', price: 163 },
    {id: '351', name: 'Product 234', price: 865},
    {id: '512', name: 'Product 635', price: 863},
    {id: '613', name: 'Product 532', price: 836 },
    {id: '173', name: 'Product 432', price: 936 },
    {id: '316', name: 'Product 363', price: 965 },
    {id: '713', name: 'Product 634', price: 195 },
    {id: '732', name: 'Product 754', price: 139 },
    {id: '956', name: 'Product 745', price: 965 },
    {id: '568', name: 'Product 856', price: 658 },
    {id: '865', name: 'Product 654', price: 765 },
    {id: '468', name: 'Product 334', price: 563 },
    {id: '957', name: 'Product 453', price: 621 },
    {id: '978', name: 'Product 457', price: 251 },
    {id: '589', name: 'Product 567', price: 451 },
  ]

  if (id) {
    products = products.filter((product) => product.id.includes(id))
  }

  if (name) {
    products = products.filter((product) => product.name.includes(name))
  }
  
  return products
}

interface CreateProductProps {
  name: string
  price: number
}

// simulation
export async function createProduct({ name, price }: CreateProductProps) {
  // delay 1,5s
  await new Promise((resolve) => setTimeout(resolve, 1.500))

  return {
    id: Math.floor(Math.random() * 999).toString(),
    name,
    price,
  }
}