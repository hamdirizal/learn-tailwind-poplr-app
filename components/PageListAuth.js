export default function PageListAuth(){
  return (
    <div className="fixed z-50 bottom-0 left-0 text-xs">
      <a className="mr-2 mb-2" href="/login">Login</a>
      <a className="mr-2 mb-2" href="/login-error">Login Error</a>
      <a className="mr-2 mb-2" href="/forgot-password">Forgot Password</a>
    </div>
  )
}