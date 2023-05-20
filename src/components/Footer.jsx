import styled from 'styled-components'

export default function Footer({ completedCount, totalQuestions }) {
  return (
    <SCFooter>
      <footer data-test="footer">
        <p>
          {completedCount}/{totalQuestions} CONCLUÍDOS
        </p>
      </footer>
    </SCFooter>
  )
}

const SCFooter = styled.footer`
  footer {
    margin: 0 auto;
    width: 375px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fff;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    p {
      font-family: 'Recursive';
      font-weight: 400;
      font-size: 18px;
      text-align: center;
      color: #333333;
    }
  }
`
