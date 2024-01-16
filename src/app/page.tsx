import Login from '@/components/login/Login'
import SplineWrapper from '@/components/login/SplineWrapper'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 z-[-1] bg-[#FFE8DC]">
      <Login />
      <SplineWrapper />
    </main>
  )
}
