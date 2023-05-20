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
      <p style={{ color, ...lineThroughStyle }}>{texto}</p>
      <img
        style={{ width: '20px', height: '23px' }}
        src={imageSrc}
        alt="icone"
        onClick={onClick}
      />
    </SCTextCampVazio>
  )
}
