import { notFound } from "next/navigation";

interface Props {
   params: Promise<{
      categoryId: string
   }>
}

export default async function CategoryPage({ params }: Props) {

   const { categoryId } = await params;

   if (categoryId === 'accessories') {
      notFound()
   }

   return (
      <div>
         <h1>Category Page {categoryId}</h1>
      </div>
   )
}