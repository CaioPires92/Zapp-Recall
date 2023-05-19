import {
  ButtonContainer,
  GreenButton,
  OrangeButton,
  RedButton,
  SCCampResposta
} from './TextCamp/Styles'

import iconeCerto from '../assets/icone_certo.png'
import iconeErrado from '../assets/icone_erro.png'
import iconeQuase from '../assets/icone_quase.png'

export default function CardResposta({ answer, handleClick }) {
  return (
    <>
      <SCCampResposta>
        <p>{answer}</p>
        <ButtonContainer>
          <RedButton
            onClick={() => handleClick('nao-lembrei', '#ff3030', iconeErrado)}
          >
            Não lembrei
          </RedButton>
          <OrangeButton
            onClick={() =>
              handleClick('quase-nao-lembrei', '#ff922e', iconeQuase)
            }
          >
            Quase não lembrei
          </OrangeButton>
          <GreenButton
            onClick={() => handleClick('zap', '#2fbe34', iconeCerto)}
          >
            Zap!
          </GreenButton>
        </ButtonContainer>
      </SCCampResposta>
    </>
  )
}
