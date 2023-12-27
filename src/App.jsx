import { useEffect, useState } from "react"

function App() {

  const [alpha, setAlpha] = useState("")

  useEffect(() => {
    handleLoading("_", 8)
  }, [])

  function handleLoading(str, num) {
    const alphaNumeric = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}?[]<>";
    let randomChar = str
    for (let x = 0; x < num; x++) {
      let randomNum = Math.floor(Math.random() * alphaNumeric.length)
      randomChar += alphaNumeric.substring(randomNum, randomNum + 1)
    }

    setAlpha(randomChar)
    if (str === "Loading") {
      return;
    }

    setTimeout(() => {
      switch (str) {
        case "L_":
          handleLoading("Lo_", 6);
          break;
        case "Lo_":
          handleLoading("Loa_", 5);
          break;
        case "Loa_":
          handleLoading("Load_", 4);
          break;
        case "Load_":
          handleLoading("Loadi_", 3);
          break;
        case "Loadi_":
          handleLoading("Loadin_", 2);
          break;
        case "Loadin_":
          handleLoading("Loading", 0);
          break;
        default:
          handleLoading("L_", 7);
          break;
      }
    }, 500)
  }

  return (
    <main className="h-screen w-screen">
      <h1 className="dots relative text-[4rem] font-medium">
        {alpha}
      </h1>
    </main>
  )
}

export default App
