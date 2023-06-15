import styles from "../styles/Home.module.css"

import Cartao from "./components/Cartao"
import Link from "next/link"
import EntrdaNumerica from "./components/EntradaNumerica"
import { useState } from "react"

export default function Home() {

  const [qtdePortas, setQtdePortas] = useState(3) 
  const [portaPremiada, setPortaPremiada] = useState(1) 

  return (
    <div className={styles.home}>
      <div>
        <Cartao bgcolor="#c0392c"> <h1>Monty Hall</h1></Cartao>
        <Cartao>
          <EntrdaNumerica value={qtdePortas} text="Qtd portas? " onChange={(novaQtd) => setQtdePortas(novaQtd)} />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntrdaNumerica value={portaPremiada} text="Porta premiada? " onChange={(nPorta) => setPortaPremiada(nPorta)} />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${portaPremiada}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
