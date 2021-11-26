import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <div>
        <Link href="/">
          <a className="logo">Site Name</a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>Favorites</a>
            </Link>
            <Link href="/">
              <a>Author Direcotry</a>
            </Link>
            <Link href="/">
              <a>Add Author</a>
            </Link>
            <Link href="/">
              <a>Add Book</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;
