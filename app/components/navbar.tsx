export default function Navbar() {
  return (
    <header className={'border border-b'}>
      <nav
        className={
          'container mx-auto px-[150px] flex justify-between items-center'
        }>
        <span>SG</span>
        <ul className={'flex space-x-[65px]'}>
          <li className={'py-[25px]'}>
            <a href="#">Accueil</a>
          </li>
          <li className={'py-[25px]'}>
            <a href="#">Portfolio</a>
          </li>
          <li className={'py-[25px]'}>
            <a href="#">CV</a>
          </li>
          <li className={'py-[25px]'}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
