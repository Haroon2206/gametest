import {Link} from 'react-router-dom'

const MainNavigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Hjem</Link></li>
                <li><Link to="/about">Om oss</Link></li>
                <li><Link to="/games">Spill</Link></li>
            </ul>
        </nav>
    )
}

export default MainNavigation;