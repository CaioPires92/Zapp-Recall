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
        <p data-test="flashcard-text">{answer}</p>
        <ButtonContainer>
          <RedButton
            data-test="no-btn"
            onClick={() => handleClick('nao-lembrei', '#ff3030', iconeErrado)}
          >
            Não lembrei
          </RedButton>
          <OrangeButton
            data-test="partial-btn"
            onClick={() =>
              handleClick('quase-nao-lembrei', '#ff922e', iconeQuase)
            }
          >
            Quase não lembrei
          </OrangeButton>
          <GreenButton
            data-test="zap-btn"
            onClick={() => handleClick('zap', '#2fbe34', iconeCerto)}
          >
            Zap!
          </GreenButton>
        </ButtonContainer>
      </SCCampResposta>
    </>
  )
}
