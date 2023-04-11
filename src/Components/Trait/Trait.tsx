import { useEffect, useState } from 'react';
import './Trait.scss';
import ReactDOM from 'react-dom';

type SizeType = "s" | "m" | "l"; 

type TraitProps<T> = {
    traitName: string;
    size: SizeType;
    backgroundColor?: string;
    color?: string;
    close?: boolean;
    id: string;
}


export function Trait<T>({traitName, size, backgroundColor, color, close, id}: TraitProps<T>) {
    const inlineStyles = {
        color: color || "white",
        backgroundColor: backgroundColor || "gray"
    }

    // const destroyComponent = (componentId: string) => {
    //     console.log(componentId)
    //     const componentNode = document.getElementById(componentId);
    //     if (componentNode) {
    //       ReactDOM.unmountComponentAtNode(componentNode);
    //     }
    // };

    return (
      <div className={`trait trait--${size}`} style={inlineStyles} id={id}>
        {
            traitName &&
            <span>{traitName}</span>
        }
        {
            close &&
            <div className="trait__close" onClick={() => {
                // destroyComponent(id); 
            }}>X</div>
        }
        
      </div>
    );
  }
  