import { FormControl } from "@angular/forms";


export const nombreApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern          : string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

export const noPuedeSer = ( control: FormControl ) => {
    const valor: string = control.value?.trim().toLowerCase();
    if( valor === 'ferveg' ){
        return {
            userValid: false
        }
    }
    return null;
}


// noPuedeSer( control: FormControl ) {
//     const valor: string = control.value?.trim().toLowerCase();
//     if( valor === 'ferveg' ){
//         return {
//             userValid: false
//         }
//     }

//     return null;
// }
