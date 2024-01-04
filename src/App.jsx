import { useEffect } from "react"
import StartAnimation from "./components/StartAnimation"
import { useDispatch, useSelector } from "react-redux";
import { hideLoading } from "./features/loader/loaderSlice";
import Home from "./pages/Home";

function App() {

  const { isLoading } = useSelector((store) => store.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideLoading())
    }, 3500)
  }, [])

  return (
    <>
      {isLoading && <StartAnimation />}
      {
        !isLoading && <Home />
      }
    </>
  )
}

export default App
