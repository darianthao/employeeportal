import { Inter } from '@next/font/google'
import {Employee} from "@/components/employee/Employee";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className="home-container">
        <h1 className="employee_portal_title">Employee Portal</h1>
          <Employee/>
      </div>
  )
}
