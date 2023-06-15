import styles from "../../../styles/Jogo.module.css"

import Porta from "./../../components/Porta"
import { useEffect, useState } from "react"
import { atualizarPortas, criarPortas } from "../../../../functions/portas"

import Link from "next/link"
import { useRouter } from "next/router"

export default function jogo() {

    const router = useRouter()

    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        const qtdPortasValidas = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente>=1 && temPresente <= portas

        setValido(qtdPortasValidas && temPresenteValido)
    }, [portas])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])

    function renderizarPortas() {
        return valido && portas.map(porta => {
            return <Porta key={porta.numero} value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }
    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {valido ? renderizarPortas() : "Jogo inválido"}
            </div>
            <div className={styles.botoes}>
                <Link href={'/'}>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}