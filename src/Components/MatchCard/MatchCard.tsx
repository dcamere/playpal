import { Trait } from '../Trait';
import './MatchCard.scss';

type MatchCardProps<T> = {
    onClick: (value: T) => void;
    value: T;
    children?: React.ReactNode;
    name: string;
    trait: string;
    image: string;
    imgAlt: string;
    id: string;
}

export function MatchCard<T>({onClick, value, children, name, trait, image, imgAlt, id}:MatchCardProps<T>) {
    const onClickFn = () => {
        onClick(value); 
    }

    return (
      <div className="match-card" onClick={onClickFn}>
        <div className="match-card__image">
          <img className="match-card__image" src={image} alt={imgAlt ? imgAlt : ""} /> 
        </div>

        <div className="match-card__content">
          <h2 className="match-card__name">{name}</h2>
          <Trait 
            traitName={trait}
            size="m" 
            close={false}
            id={id}
            // backgroundColor="gray" 
            // color="white" 
          />
          {children}
        </div>
      </div>
    );
}

  