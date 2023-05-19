import { SCTextCampPergunta } from './TextCamp/Styles'
import setaVirar from '../assets/seta_virar.png'

export default function CardPergunta({ question, onClick }) {
  return (
    <SCTextCampPergunta>
      <p>{question}</p>
      <img src={setaVirar} alt="icone" onClick={onClick} />
    </SCTextCampPergunta>
  )
}
