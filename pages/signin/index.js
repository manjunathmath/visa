import Head from 'next/head'
import Header from '@/component/Header'
import { useRouter } from 'next/router';




export default function Signin() {
  const router = useRouter()
  const onSignIn = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/dashboard',
      query: { loggedIn: true }
    }, '/dashboard');

  };
  return (
    <>
      <Head>
        <title>Signin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="form-signin w-100 m-auto">
          <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="ba2qyr" />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" fdprocessedid="exnz" />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button onClick={onSignIn} className="btn btn-primary w-100 py-2" type="submit" fdprocessedid="ivcsmh">Sign in</button>
          </form>
        </div>
      </div>
    </>
  )
}