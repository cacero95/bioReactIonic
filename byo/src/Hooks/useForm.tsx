import { useState } from "react";

export const useForm = <T extends Object>( state: T ) => {
  const [ form, setForm ] = useState( state );
  
  const updateForm = ( value: any, key: keyof T ) => setForm({
      ...form, [ key ]: value
  });

  return { ...form, updateForm, form };
}
