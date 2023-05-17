import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import QuizList from "./pages/QuizList";
import QuizForm from "./pages/QuizForm";
import QuizPage from './pages/QuizPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <QuizList isAdmin = {false}/> }/>
        <Route path = '/admin' element = { <QuizList isAdmin = {true}/> }/>
        <Route path = '/form' element = { <QuizForm/> }/>
        <Route path = '/quiz' element = { <QuizPage/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
