import {useContext} from 'react'
import { Context, IContext } from '../ContextProvider'
export const UseContext = () =>{
    const currentContext:IContext | null = useContext(Context);

    if(!currentContext){
        throw new Error("El contexto no ha sido creado");
    }

    return currentContext;
}