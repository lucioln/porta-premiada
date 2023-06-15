import Presente from "./components/Presente"
import Porta from "./components/Porta"
export default function Home() {
  return (
    <div style={{display: "flex"}}>
     {/* <Presente /> */}
     <Porta selecionada />
     <Porta />
    </div>
  )
}
