import { Search, ShoppingCart, LogOut } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const SearchBar = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = React.useState('')
  const serchHandler = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(searchTerm){
      router.push(`/list?name=${searchTerm}`)
    }
  }
  return (
    <div>
       <form action="" onSubmit={serchHandler}>
       <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
       </form>
    </div>
  )
}

export default SearchBar