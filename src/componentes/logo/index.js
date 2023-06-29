import logo from '../../img/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 2em;
    gap: 5px;
`
const LogoImagem = styled.img`
  width: 1.3em;
`

function Logo(){
    return (
        <LogoContainer>
          <LogoImagem
            src={logo}
            alt='logo'
          />
          <p><strong>Alura</strong> Books</p>
        </LogoContainer>
    )
}

export default Logo 