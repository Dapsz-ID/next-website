export default function Navbar(){
  const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null
  const avatar = typeof window !== 'undefined' ? (JSON.parse(localStorage.getItem('localProfiles')||'[]').find(u=>u.username===user)?.avatar) : null
  return (
    <nav className="bg-white/80 backdrop-blur sticky top-0 z-40 border-b">
      <div className="container flex items-center justify-between h-14">
        <a href="/" className="text-xl font-bold text-indigo-600">HostingKu</a>
        <div className="hidden md:flex items-center gap-4">
          <a href="/pricing">Pricing</a>
          <a href="/codeshare">Codeshare</a>
          <a href="/docs">API Docs</a>
          <a href="/dashboard">Dashboard</a>
          {!user ? <><a href="/login" className="btn btn-outline">Login</a><a href="/register" className="btn btn-primary">Register</a></> :
            <a href="/dashboard" className="flex items-center gap-3"><img src={avatar||'/default-avatar.png'} alt="pp" className="avatar"/><span>{user}</span></a>
          }
        </div>
        <div className="md:hidden">
          <a href="/docs" className="btn btn-outline">Menu</a>
        </div>
      </div>
    </nav>
  )
    }
