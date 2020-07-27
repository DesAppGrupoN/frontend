export const validateProductName = (name, setError) => {
    if((name!==null) && (name.length>1 && name.length<35)){
            return(true)
    }   else    {
          setError("El nombre debe tener entre 2 y 35 digitos.");
    }
}
export const validateProductCategory = (category, setError) => {
    if( (category!==undefined) && category!== null){
            return(true)
    }   else    {
          setError("Debe especificar una categoria");
    }
}

export const validateCommerceName = (name, setError) => {

        if((name!==undefined) && (name.length>1 && name.length<25)){
                return(true)
        }   else    {
              setError("El nombre debe tener entre 2 y 25 digitos.");
        }
}
export const validateAddress = (address, setError) => {
    if((address!==undefined) && (address.length>1 && address.length<50)){
            return(true)
    }   else    {
          setError("La direccion debe tener entre 2 y 50 digitos.");
    }
}
export const validateOpeningsTime = (openingTime, closingTime, setError) => {
    if(openingTime !== undefined && closingTime !== undefined){
    if((openingTime < closingTime) && (openingTime != closingTime)){
            return(true)
    }   else    {
          setError("El horario de apertura debe ser menor al horario de Cierre.");
    }}else { setError("Debe definir horario apertura o cierre.");}
}
export const validateOpeningsDays = (openingDays, setError) => {
    if((openingDays).length>0){
            return(true)
    }   else    {
          setError("Debe tener al menos 1 dia de apertura");
    }}

    export const validateCommerce = (name,address,openingTime,closingTime,openingDays,setError) => {
        if(validateCommerceName(name,setError) &&
        validateAddress(address,setError) && 
        validateOpeningsTime(openingTime,closingTime,setError) &&
        validateOpeningsDays(openingDays,setError)){
            return true;
        }else
        {return false;}    
    } 
    
    export const validateProduct = (name,category,setError) => {
        console.log(name,category);
        if(validateProductName(name,setError) &&
        validateProductCategory(category,setError)){
            return true;
        }else
        {return false;}    
    } 
