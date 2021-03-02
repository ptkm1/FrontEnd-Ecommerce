import { useEffect, useState } from "react"
import AdminRoutes from "./admin"
import ClientRoutes from "./client"

function AuthTreatment() {

  const [ isAdmin, setIsAdmin ]: any = useState()

  useEffect(()=>{

    const snhAdm = localStorage.getItem('@token/admin')

    snhAdm ? setIsAdmin(true) : setIsAdmin(false)

  },[])

  return isAdmin ? <AdminRoutes /> : <ClientRoutes />
}

export default AuthTreatment