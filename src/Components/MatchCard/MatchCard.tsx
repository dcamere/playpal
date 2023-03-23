import './MatchCard.scss';

type MatchCardProps<T> = {
    onClick: (value: T) => void;
    value: T;
    children?: React.ReactNode;
    name: string;
    trait: string;
    image: string;
    imgAlt: string;
}

export function MatchCard<T>({onClick, value, children, name, trait, image, imgAlt}:MatchCardProps<T>) {
    const onClickFn = () => {
        onClick(value); 
    }

    return (
      <div className="match-card" onClick={onClickFn}>
        { image && <img className="match-card__image" src={image} alt={imgAlt ? imgAlt : ""} /> }
        { name && <h2 className="match-card__name">{name}</h2> }
        { trait && <div className="match-card__trait">{trait} 😄</div> }
        {children}
      </div>
    );
  }
  