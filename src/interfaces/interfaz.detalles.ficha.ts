//interfaz relacionadas al area psiquica


interface TipoFarmaco{

    usoFarmaco:boolean;
    nombreFarmaco:string;


}

interface farmaco{

    fkFarmaco: number;
    fkAreaPsiquica:number; 

}

interface AreaPsiquica{

    controlEquipoSaludMental: boolean;
    psicoterapia: boolean;
    evaluacionPsiquica:boolean;
    diagnosticoPsiquiatrico:boolean;

}

//interfaces relacionadas a la funcionalidad genital

interface AntecedentesFuncionalidadGenital{

    detallesFuncionalidadGenital:string
    ;

}

//interaz relacionada al apoyo escolar

interface ApoyoEscolaridad{


    apoyoEscolar:boolean;
    actorInvolucrado:string;
    gradoEscolar:string;
}

//interface relacionada a la historia clinica del paciente

interface HistoriaClinica{

    detalleAntecedenteClinico:string;

}

//interface de personas involucrads

interface PeronasInvolucradas{

    rutPI:string;
    nombresPI:string;
    apellidoPaternoPI: string;
    apellidoMaternoPI:string;
    telefonoPi:string;
    telefonoPI:string;
}

//interfaz de paciente 

interface Pacientes{

    rutPaicente:string;
    nombrePaciente:string;
    apellidoPaterno:string;
    apellidoMaterno: string;
    pronombre:string;
    nombreSocial:string;
    fechaNacimiento: Date;
    docmilioPaciente:string;

    fkHabitos:number;
    fkAntecedentesClinicosFamiliares: number;
    fkHistoriaIdentidadGenero:number;
    

}