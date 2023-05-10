import { kelvinTOCelsious } from "./kelvinToCelsius"

export const kelvinToFarenheit = (kelvinDegrades) => {
    const celsius = kelvinTOCelsious(kelvinDegrades);
    const Farenheit_conversion = 9/5;
    const farenheit_initial_constant = 32;
    return (celsius * Farenheit_conversion) + farenheit_initial_constant

}