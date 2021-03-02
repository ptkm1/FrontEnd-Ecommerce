import { useContext } from "react"
import AuthContext from "../providers/Auth/AuthContextProvider"
import AuthTreatment from "./AuthTreatment"
import NotAuthenticatedRoutes from "./NotAuthenticatedRoutes"

function AllRoutes() {

  const { loggedIn } = useContext(AuthContext)

  return loggedIn ? <AuthTreatment /> : <NotAuthenticatedRoutes />
}

export default AllRoutes