import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import MainPage from './router/MainPage/MainPage'
import ErrorPage from './router/ErrorPage/ErrorPage'
import SignUpPage from './router/SignUpPage/SignUpPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}
export default App;