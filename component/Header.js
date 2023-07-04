import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
          <Link href="/" className="nav-link px-2 text-secondary">Home</Link>
          </li>
          <li><Link href="/features" className="nav-link px-2 text-white">Features</Link></li>
          <li><Link href="/pricing" className="nav-link px-2 text-white">Pricing</Link></li>
          <li><Link href="/faqs" className="nav-link px-2 text-white">FAQs</Link></li>
          <li><Link href="/about" className="nav-link px-2 text-white">About</Link></li>
          <li><Link href="/applications" className="nav-link px-2 text-white">Visa Applications</Link></li>
        </ul>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>
        <div className="text-end">
        <Link href="/signin" className="btn btn-outline-light me-2">Login</Link>
        <Link href="/signin" className="btn btn-warning">Sign-up</Link>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header