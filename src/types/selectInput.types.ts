export interface ISelectProps {

    placeholder: string,
    className?: string,
    selectData: ISelectData[]



}

interface ISelectData {

    group?: string,
    valueData: ISelectValues[] 


}

interface ISelectValues {

    value:string,
    place: string


}

