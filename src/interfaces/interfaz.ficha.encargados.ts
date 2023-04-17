//interfaz de ficha tecnica

interface FichaTecnica{

    fechaIngreso:Date;
    fkPaciente: number;
    fkApoyoEscolaridad:number;
    fkAreaPsiquica:number;
    fkFuncionalidadGenital: number;
    fkHistoriaClinica: number;
    fkPersonaAcompañante: number;
    fkPersonaEncargada: number;

}

//interfaz del profesional de la salud 

interface ProfesionalSalud{
    rutPS: string;
    nombresPS:string;
    emailPS:string;
    cargoPS:string;
    fkFichaTecnica:number;

}

//INTERFAZ RELACIONADA AL CENTRO DE SALUD 

interface CentroSalud{

    nombreCentro: string;
    logoCentro: string;
    fkProfesional: number;


}