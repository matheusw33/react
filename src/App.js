import Header from './componentes/header';
import Pesquisar from './componentes/search';
import Lancamentos from './componentes/Lancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisar />
      <Lancamentos />
    </AppContainer>
  );
}

export default App;
