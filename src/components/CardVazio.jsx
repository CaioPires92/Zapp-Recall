import { SCTextCampVazio } from './TextCamp/Styles'

export default function CardVazio({
  texto,
  onClick,
  color,
  showLineThrough,
  imageSrc
}) {
  const lineThroughStyle = showLineThrough
    ? { textDecoration: 'line-through' }
    : {}

  return (
    <SCTextCampVazio>
      <p data-test="flashcard-text" style={{ color, ...lineThroughStyle }}>
        {texto}
      </p>
      <img
        data-test={
          imageSrc === 'setaPlay'
            ? 'play-btn'
            : imageSrc === 'iconeErrado'
            ? 'no-icon'
            : imageSrc === 'iconeQuase'
            ? 'partial-icon'
            : imageSrc === 'iconeCerto'
            ? 'zap-icon'
            : ''
        }
        style={{ width: '20px', height: '23px' }}
        src={imageSrc}
        alt="icone"
        onClick={onClick}
      />
    </SCTextCampVazio>
  )
}
