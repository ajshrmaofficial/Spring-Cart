
export interface FormFieldPropsType extends React.InputHTMLAttributes<HTMLInputElement>{
    id: string;
    label: string;
    errorMessage: string;
}

function FormField(props: FormFieldPropsType): React.JSX.Element{
    const {label, errorMessage, onChange, ...inputProps} = props;
    return(
     <div className="flex flex-col">
        <label className="text-slate-600 font-semibold">{label}</label>
        <input className="border border-black rounded p-1 peer" {...inputProps} onChange={onChange}/>
        <span className="text-red-600 font-semibold text-sm hidden peer-invalid:block">{errorMessage}</span>
     </div>   
    )
}

export default FormField;
