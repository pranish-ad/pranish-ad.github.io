/**
 * Root layout: theme provider, sticky nav, main content, footer.
 * Ready for Vercel/Netlify (static build from `npm run build`).
 */
import { ThemeProvider } from './components/ThemeContext'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import './styles/globals.css'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <Footer />
    </ThemeProvider>
  )
}

export default App
