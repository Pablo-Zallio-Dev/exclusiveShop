import { useEffect } from "react"
import { apiProductRepository } from "./infrastructure/repositories/apiProductRepository"





const App = () => {



      useEffect(() => {

            const prueba = async () => {
                  apiProductRepository()
                  const response = await apiProductRepository().getAllProducts()
                  console.log(response)
            }
            prueba()
      }, [])


      return (
            <div>App</div>
      )
}

export default App


