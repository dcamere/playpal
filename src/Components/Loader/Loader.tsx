import './Loader.scss';

type LoaderProps<T> = {
    isLoading: boolean;
}

export function Loader<T>({isLoading}:LoaderProps<T>) {
    return (
      <div className={`loader ${isLoading ? "loader--open" : ""}`}>
        <svg width="100" height="100">
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="gray" stroke-width="10"  />
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="white" stroke-width="10" stroke-dasharray="50 200" stroke-linecap="round" />
        </svg>
      </div>
    );
}