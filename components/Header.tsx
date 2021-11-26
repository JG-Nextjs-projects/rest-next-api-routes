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
            <Link href="/favorites">
              <a>Favorites</a>
            </Link>
          </li>
          <li>
            <Link href="/directory">
              <a>Author Direcotry</a>
            </Link>
          </li>
          <li>
            <Link href="/admin/add-author">
              <a>Add Author</a>
            </Link>
          </li>
          <li>
            <Link href="/admin/add-book">
              <a>Add Book</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
