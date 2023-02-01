import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className="home-container">
        <h1 className="employee_portal_title">Employee Portal</h1>
        <p>Employee Portal</p>
      </div>
  )
}
