
//interfaces relacionadas al genero del paciente
export interface ElementosDisforia{

    disforia: boolean;
    detallesDisforia: string;

}

export interface PrendasDisconformidad{

    usoPrendas: boolean;
    tipoPrenda:string;


}
export interface HistoriaIndentidadGenero{

    identidadGenero: string;
    orientacionSexual:string;
    inicioTransicion:Date;
    tiempoLatencia:string;
    apoyoNucleoFamiliar: boolean;
    fkPrendasDisconformidad: number;
    fkElementosDisforia:number;

}

//interfaces relacionadas a los antecedentes clinicos de la familia 

export interface AntecedenetesFamilia{

    antecedentesPadres: boolean;
    antecedentesHermanos:boolean;
    fkPadecimientosFamiliares: number;
}

export interface PadecimientosFamilia{

    detallesPadecimiento: string;

}

//interface relacionada a los habitos

export interface HabitosAlimenticios{

    detalleHabitoAlimenticio: string;


}
export interface HabitosDrogas{

    usoDrogas: boolean;
    detalleHabitoDorga: string;


}
export interface Habitos{

    fkHabitosAlimenticios:number;
    fkHabitsoDrogas:number;

}
