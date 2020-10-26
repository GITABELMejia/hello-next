import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link href="/">
                <a className="navbar-brand">Home</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="nav-link" >About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href = "/services">
                        <a className="nav-link" >Services</a>
                        </Link>
                    </li>


                </ul>
            </div>
        </nav>
    );
}

export default Navigation;