import AutenticacaoContext from "@/components/data/contexts/AutenticacaoContext";
import Financas from "@/components/fincancas";
import Landing from "@/components/landing";
import Carregando from "@/components/template/Carregando";
import {useContext} from "react"

export default function Home() {
  const {usuario, carregando} = useContext(AutenticacaoContext)

  if(carregando) return <Carregando/>

  return usuario ? <Financas/> : <Landing/>
  
}
