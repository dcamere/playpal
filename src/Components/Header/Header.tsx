import './Header.scss';

type HeaderProps<T> = {
    
}

export function Header<T>({}:HeaderProps<T>) {
    return (
      <header className="header">
        <h1 className="logo">Play<span>Pal</span></h1>
      </header>
    );
}

  