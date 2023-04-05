import './Loader.scss';

type LoaderProps<T> = {
    isLoading: boolean;
}

export function Loader<T>({isLoading}:LoaderProps<T>) {
    return (
      <div className={`loader ${isLoading ? "loader--open" : ""}`}>
        <img src="#" alt="#" /> 
      </div>
    );
}