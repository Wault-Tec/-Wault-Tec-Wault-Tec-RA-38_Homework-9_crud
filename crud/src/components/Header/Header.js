import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="page-header">
      <Link to="/posts/new">
        <button className="page-header__btn">Создать пост</button>
      </Link>
    </div>
  )
}

export default Header