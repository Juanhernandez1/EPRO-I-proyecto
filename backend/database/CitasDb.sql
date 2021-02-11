-- ***************************************************************************************
-- * Base de Datos para Control de Citas de Tu negocio
-- * Diseñada por:
-- *
-- * Version: 2.0.0
-- * Ultima modificación: 6/02/2021
-- * servidores de Bases de datos
-- * - PostgreSQL
-- ***************************************************************************************
-- * Creando Base de Datos
-- ***************************************************************************************
-- DROP DATABASE IF EXISTS "CitasDB";
-- CREATE DATABASE "CitasDB" WITH OWNER = Postgres E
--					NCODING = 'UTF8'
--					LC_COLLATE = 'es_SV.UTF-8'
--					LC_CTYPE = 'es_SV.UTF-8'
--					TABLESPACE = Pg_default
--					Connection LIMIT = - 1;
-- ***************************************************************************************
-- * Tablas Usuario
-- ***************************************************************************************
Create Table Usuarios (
    Uid_usuario Varchar(255) Not null,
    Primary Key (Uid_usuario),
    Nombre Varchar(255) Not null,
    Apellido Varchar(255) Not null,
    Telefono Varchar(255) Not null,
    Correo Varchar(255) Not null Unique,
    Idfacebook Varchar(255) Null Unique,
    Estado Varchar(255) Not null
);

-- ***************************************************************************************
-- * Tablas Accesos
-- ***************************************************************************************
Create Table Accesos (
    Uid_usuario Varchar(255) Not null,
    Primary Key (Uid_usuario),
    Foreign Key (Uid_usuario) References Usuarios (Uid_usuario),
    Usuario Varchar(255) Not null,
    Contraseña Varchar(255) Not null,
    Tipo Char(1) Not null
);

-- ***************************************************************************************
-- * Tablas Negocios
-- ***************************************************************************************
Create Table Negocios (
    Uid_negocio Varchar(255) Not null,
    Primary Key (Uid_negocio),
    Nombre Varchar(255) Not null,
    Descripcion Varchar(255) Not null,
    Uid_usuario Varchar(255) Not null,
    Foreign Key (Uid_usuario) References Usuarios (Uid_usuario),
    Estado Varchar(255) Not null
);

-- ***************************************************************************************
-- * Tablas Negocios Contacto
-- ***************************************************************************************
Create Table Inf_contato (
    Uid_negocio Varchar(255) Not null,
    Primary Key (Uid_negocio),
    Foreign Key (Uid_negocio) References Negocios (Uid_negocio),
    Telefono Varchar(255) Not null,
    Redes_sociales Jsonb Not null,
    Email Varchar(255) Not null Unique
);

-- ***************************************************************************************
-- * Tablas Negocios Direcciones
-- ***************************************************************************************
Create Table Direcciones (
    Uid_negocio Varchar(255) Not null,
    Primary Key (Uid_negocio),
    Foreign Key (Uid_negocio) References Negocios (Uid_negocio),
    Departamento Varchar(255) Not null,
    Direccion Varchar(255) Not null,
    Url_direccion Varchar(255) Not null
);

-- ***************************************************************************************
-- * Tablas Negocios Configuracion
-- ***************************************************************************************
-- CSC: cantida de sevicios por cita
-- TEC: tiempo estimado por cita
-- ITC: intevalo de tiempo entre citas
-- CCD: Cantidad de Citas por Dia
Create Table Configuracion (
    Uid_negocio Varchar(255) Not null,
    Primary Key (Uid_negocio),
    Foreign Key (Uid_negocio) References Negocios (Uid_negocio),
    Hora_inicio Varchar(255) Not null,
    Hora_fin Varchar(255) Not null,
    Csc Varchar(255) Not null,
    Tec Varchar(255) Not null,
    Itc Varchar(255) Not null,
    Ccd Varchar(255) Not null,
    Dias_laborales Varchar(255) Not null,
    Tiempo_almuerzo Varchar(255) Not null
);

-- ***************************************************************************************
-- * Tablas Negocios Servicios
-- ***************************************************************************************
Create Table Servicios (
    Id_servicio Varchar(255) Not null,
    Primary Key (Id_servicio),
    Uid_negocio Varchar(255) Not null,
    Foreign Key (Uid_negocio) References Negocios (Uid_negocio),
    Nombre_servicio Varchar(255) Not null,
    Descipcion Varchar(255) Not null,
    Url_imagen Varchar(255) Not null,
    Precio decimal Not null,
    Estado Varchar(255) Not null
);

-- ***************************************************************************************
-- * Tablas Dias Bloqueados o Libres
-- ***************************************************************************************
Create Table Bloqueados (
    Uid_negocio Varchar(255) Not null,
    Primary Key (Uid_negocio),
    Foreign Key (Uid_negocio) References Negocios (Uid_negocio),
    Dia_inicio date Not null,
    Dia_final date Not null,
    Mañana boolean Not null,
    Tarde boolean Not null
);

-- ***************************************************************************************
-- * Tablas Citas
-- ***************************************************************************************
Create Table Citas (
    Id_cita Varchar(255) Not null,
    Primary Key (Id_cita),
    Uid_usuario Varchar(255) Not null,
    Foreign Key (Uid_usuario) References Usuarios (Uid_usuario),
    Uid_negocio Varchar(255) Not null,
    Foreign Key (Uid_negocio) References Negocios (Uid_negocio),
    Fecha Timestamp Not null,
    Estado Varchar(255) Not null
);

-- ***************************************************************************************
-- * Tablas Citas Detalle
-- ***************************************************************************************
Create Table Detalle (
    Id_cita Varchar(255) Not null,
    Foreign Key (Id_cita) References Citas (Id_cita),
    Id_servicio Varchar(255) Not null,
    Foreign Key (Id_servicio) References Servicios (Id_servicio)
);