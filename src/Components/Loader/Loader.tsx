import './Loader.scss';

type LoaderProps<T> = {
    
}

export function Loader<T>({}:LoaderProps<T>) {
    return (
      <div className="loader">
        <img src="#" alt="#" /> 
      </div>
    );
}