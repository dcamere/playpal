import './FlexContainer.scss';

type FlexContainerProps<T> = {
    children?: React.ReactNode;
    center?: boolean;
    isColumn?: boolean;
    isInline?: boolean;
}

export function FlexContainer<T>({children, isColumn, isInline, center}:FlexContainerProps<T>) {
    return (
      <div className={`flex-container ${isColumn ? "flex-container--column" : ""} ${isInline ? "flex-container--inline" : ""} ${center ? "flex-container--center" : ""}`}>
        {children}
      </div>
    );
  }
  