import tw from 'tailwind-styled-components'
import './App.css';

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
    text-3xl
    font-bold
    text-white
`

function App() {
  return (
    <Container>
        <div>Use the Container as any other React Component</div>
    </Container>
  );  
}

export default App;