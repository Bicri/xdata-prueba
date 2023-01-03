import { useState } from "react";

export const useForm = ( inicioForm = {} ) => {

    const [formState, setformState] = useState(inicioForm);
    
    
    const onInputChange = ( {target} ) => {

        const {name, value} = target;
        setformState( {
            ...formState,
            [name] : value
        })
    }


    return {
        ...formState,
        formState,
        onInputChange
    };
}
