-- Generado por Oracle SQL Developer Data Modeler 21.4.1.349.1605
--   en:        2022-04-23 01:55:27 CST
--   sitio:      Oracle Database 11g
--   tipo:      Oracle Database 11g



-- predefined type, no DDL - MDSYS.SDO_GEOMETRY

-- predefined type, no DDL - XMLTYPE

CREATE TABLE actividad (
    id_actividad               INTEGER NOT NULL,
    titulo                     VARCHAR2(50 CHAR) NOT NULL,
    descripcion                VARCHAR2(100 CHAR) NOT NULL,
    fecha_publicacon           DATE NOT NULL,
    cantidad_alumnos_asignados INTEGER NOT NULL,
    valor                      NUMBER(3, 2) NOT NULL,
    fecha_entrega              DATE NOT NULL
);

ALTER TABLE actividad ADD CONSTRAINT actividad_pk PRIMARY KEY ( id_actividad );

CREATE TABLE alumno (
    id_alumno        INTEGER NOT NULL,
    nombre           VARCHAR2(50 CHAR) NOT NULL,
    apellido         VARCHAR2(50 CHAR) NOT NULL,
    carnet           INTEGER NOT NULL,
    telefono         VARCHAR2(20 CHAR) NOT NULL,
    direccion        VARCHAR2(100 CHAR) NOT NULL,
    correo           VARCHAR2(50 CHAR) NOT NULL,
    password         VARCHAR2(50 CHAR) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    dpi              VARCHAR2(50 CHAR) NOT NULL
);

ALTER TABLE alumno ADD CONSTRAINT alumno_pk PRIMARY KEY ( id_alumno );

CREATE TABLE asig_estudiante (
    id_ae              INTEGER NOT NULL,
    alumno_id_alumno   INTEGER NOT NULL,
    materia_id_materia INTEGER NOT NULL
);

ALTER TABLE asig_estudiante ADD CONSTRAINT asig_estudiante_pk PRIMARY KEY ( id_ae );

CREATE TABLE asignacion_maestro (
    id_am              INTEGER NOT NULL,
    maestro_id_maestro INTEGER NOT NULL,
    materia_id_materia INTEGER NOT NULL
);

ALTER TABLE asignacion_maestro ADD CONSTRAINT asignacion_maestro_pk PRIMARY KEY ( id_am );

CREATE TABLE aviso (
    id_aviso    INTEGER NOT NULL,
    descripcion VARCHAR2(100 CHAR) NOT NULL
);

ALTER TABLE aviso ADD CONSTRAINT aviso_pk PRIMARY KEY ( id_aviso );

CREATE TABLE carrera (
    id_carrera INTEGER NOT NULL,
    nombre     VARCHAR2(100 CHAR) NOT NULL
);

ALTER TABLE carrera ADD CONSTRAINT carrera_pk PRIMARY KEY ( id_carrera );

CREATE TABLE carrera_materia (
    id_cm              INTEGER NOT NULL,
    carrera_id_carrera INTEGER NOT NULL,
    materia_id_materia INTEGER NOT NULL
);

ALTER TABLE carrera_materia ADD CONSTRAINT carrera_materia_pk PRIMARY KEY ( id_cm,
                                                                            carrera_id_carrera );

CREATE TABLE d_publicacion (
    id_dp                        INTEGER NOT NULL,
    publicacion_id_publicaicon   INTEGER NOT NULL,
    actividad_id_actividad       INTEGER NOT NULL,
    notificacion_id_notificacion INTEGER NOT NULL,
    aviso_id_aviso               INTEGER NOT NULL
);

ALTER TABLE d_publicacion ADD CONSTRAINT d_publicacion_pk PRIMARY KEY ( id_dp );

CREATE TABLE dc_alumno (
    id_dca             INTEGER NOT NULL,
    alumno_id_alumno   INTEGER NOT NULL,
    carrera_id_carrera INTEGER NOT NULL
);

ALTER TABLE dc_alumno ADD CONSTRAINT dc_alumno_pk PRIMARY KEY ( id_dca,
                                                                carrera_id_carrera );

CREATE TABLE dc_profesor (
    id_dc_profesor     INTEGER NOT NULL,
    carrera_id_carrera INTEGER NOT NULL,
    maestro_id_maestro INTEGER NOT NULL
);

ALTER TABLE dc_profesor ADD CONSTRAINT dc_profesor_pk PRIMARY KEY ( id_dc_profesor );

CREATE TABLE dm_nota (
    id_dmn             INTEGER NOT NULL,
    materia_id_materia INTEGER NOT NULL,
    alumno_id_alumno   INTEGER NOT NULL
);

ALTER TABLE dm_nota ADD CONSTRAINT dm_nota_pk PRIMARY KEY ( id_dmn );

CREATE TABLE dr (
    id_dr                INTEGER NOT NULL,
    respuesta_opcional   VARCHAR2(100 CHAR) NOT NULL,
    examen_id_examen     INTEGER NOT NULL,
    pregunta_pregunta_id NUMBER NOT NULL
);

ALTER TABLE dr ADD CONSTRAINT dr_pk PRIMARY KEY ( id_dr );

CREATE TABLE examen (
    id_examen          INTEGER NOT NULL,
    fecha_publicacion  DATE NOT NULL,
    hora_inicio        DATE NOT NULL,
    hora_fin           DATE NOT NULL,
    materia_id_materia INTEGER NOT NULL
);

ALTER TABLE examen ADD CONSTRAINT examen_pk PRIMARY KEY ( id_examen );

CREATE TABLE maestro (
    id_maestro       INTEGER NOT NULL,
    nombre           VARCHAR2(50 CHAR) NOT NULL,
    apellido         VARCHAR2(50 CHAR) NOT NULL,
    telefono         VARCHAR2(20 CHAR) NOT NULL,
    direccion        VARCHAR2(100 CHAR) NOT NULL,
    correo           VARCHAR2(50 CHAR) NOT NULL,
    password         VARCHAR2(50 CHAR) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    dpi              VARCHAR2(50 CHAR) NOT NULL
);

ALTER TABLE maestro ADD CONSTRAINT maestro_pk PRIMARY KEY ( id_maestro );

CREATE TABLE materia (
    id_materia INTEGER NOT NULL,
    nombre     VARCHAR2(50 CHAR) NOT NULL
);

ALTER TABLE materia ADD CONSTRAINT materia_pk PRIMARY KEY ( id_materia );

CREATE TABLE notificacion (
    id_notificacion INTEGER NOT NULL,
    contenido       VARCHAR2(100 CHAR) NOT NULL,
    fecha           DATE NOT NULL,
    hora            DATE NOT NULL
);

ALTER TABLE notificacion ADD CONSTRAINT notificacion_pk PRIMARY KEY ( id_notificacion );

CREATE TABLE pregunta (
    id_pregunta INTEGER NOT NULL,
    pregunta    VARCHAR2(100 CHAR),
    respuesta   VARCHAR2(100 CHAR) NOT NULL,
    pregunta_id NUMBER NOT NULL
);

ALTER TABLE pregunta ADD CONSTRAINT pregunta_pk PRIMARY KEY ( pregunta_id );

CREATE TABLE publicacion (
    id_publicaicon     INTEGER NOT NULL,
    maestro_id_maestro INTEGER NOT NULL
);

ALTER TABLE publicacion ADD CONSTRAINT publicacion_pk PRIMARY KEY ( id_publicaicon );

CREATE TABLE resultado_nota (
    id_rn                  INTEGER NOT NULL,
    actividad_id_actividad INTEGER NOT NULL,
    dm_nota_id_dmn         INTEGER NOT NULL
);

ALTER TABLE resultado_nota ADD CONSTRAINT resultado_nota_pk PRIMARY KEY ( id_rn );

ALTER TABLE asig_estudiante
    ADD CONSTRAINT asig_estudiante_alumno_fk FOREIGN KEY ( alumno_id_alumno )
        REFERENCES alumno ( id_alumno );

ALTER TABLE asig_estudiante
    ADD CONSTRAINT asig_estudiante_materia_fk FOREIGN KEY ( materia_id_materia )
        REFERENCES materia ( id_materia );

ALTER TABLE asignacion_maestro
    ADD CONSTRAINT asignacion_maestro_maestro_fk FOREIGN KEY ( maestro_id_maestro )
        REFERENCES maestro ( id_maestro );

ALTER TABLE asignacion_maestro
    ADD CONSTRAINT asignacion_maestro_materia_fk FOREIGN KEY ( materia_id_materia )
        REFERENCES materia ( id_materia );

ALTER TABLE carrera_materia
    ADD CONSTRAINT carrera_materia_carrera_fk FOREIGN KEY ( carrera_id_carrera )
        REFERENCES carrera ( id_carrera );

ALTER TABLE carrera_materia
    ADD CONSTRAINT carrera_materia_materia_fk FOREIGN KEY ( materia_id_materia )
        REFERENCES materia ( id_materia );

ALTER TABLE d_publicacion
    ADD CONSTRAINT d_publicacion_actividad_fk FOREIGN KEY ( actividad_id_actividad )
        REFERENCES actividad ( id_actividad );

ALTER TABLE d_publicacion
    ADD CONSTRAINT d_publicacion_aviso_fk FOREIGN KEY ( aviso_id_aviso )
        REFERENCES aviso ( id_aviso );

ALTER TABLE d_publicacion
    ADD CONSTRAINT d_publicacion_notificacion_fk FOREIGN KEY ( notificacion_id_notificacion )
        REFERENCES notificacion ( id_notificacion );

ALTER TABLE d_publicacion
    ADD CONSTRAINT d_publicacion_publicacion_fk FOREIGN KEY ( publicacion_id_publicaicon )
        REFERENCES publicacion ( id_publicaicon );

ALTER TABLE dc_alumno
    ADD CONSTRAINT dc_alumno_alumno_fk FOREIGN KEY ( alumno_id_alumno )
        REFERENCES alumno ( id_alumno );

ALTER TABLE dc_alumno
    ADD CONSTRAINT dc_alumno_carrera_fk FOREIGN KEY ( carrera_id_carrera )
        REFERENCES carrera ( id_carrera );

ALTER TABLE dc_profesor
    ADD CONSTRAINT dc_profesor_carrera_fk FOREIGN KEY ( carrera_id_carrera )
        REFERENCES carrera ( id_carrera );

ALTER TABLE dc_profesor
    ADD CONSTRAINT dc_profesor_maestro_fk FOREIGN KEY ( maestro_id_maestro )
        REFERENCES maestro ( id_maestro );

ALTER TABLE dm_nota
    ADD CONSTRAINT dm_nota_alumno_fk FOREIGN KEY ( alumno_id_alumno )
        REFERENCES alumno ( id_alumno );

ALTER TABLE dm_nota
    ADD CONSTRAINT dm_nota_materia_fk FOREIGN KEY ( materia_id_materia )
        REFERENCES materia ( id_materia );

ALTER TABLE dr
    ADD CONSTRAINT dr_examen_fk FOREIGN KEY ( examen_id_examen )
        REFERENCES examen ( id_examen );

ALTER TABLE dr
    ADD CONSTRAINT dr_pregunta_fk FOREIGN KEY ( pregunta_pregunta_id )
        REFERENCES pregunta ( pregunta_id );

ALTER TABLE examen
    ADD CONSTRAINT examen_materia_fk FOREIGN KEY ( materia_id_materia )
        REFERENCES materia ( id_materia );

ALTER TABLE publicacion
    ADD CONSTRAINT publicacion_maestro_fk FOREIGN KEY ( maestro_id_maestro )
        REFERENCES maestro ( id_maestro );

ALTER TABLE resultado_nota
    ADD CONSTRAINT resultado_nota_actividad_fk FOREIGN KEY ( actividad_id_actividad )
        REFERENCES actividad ( id_actividad );

ALTER TABLE resultado_nota
    ADD CONSTRAINT resultado_nota_dm_nota_fk FOREIGN KEY ( dm_nota_id_dmn )
        REFERENCES dm_nota ( id_dmn );

CREATE SEQUENCE Pregunta_Pregunta_ID_SEQ 
START WITH 1 
    NOCACHE 
    ORDER ;

CREATE OR REPLACE TRIGGER Pregunta_Pregunta_ID_TRG 
BEFORE INSERT ON Pregunta 
FOR EACH ROW 
WHEN (NEW.Pregunta_ID IS NULL) 
BEGIN
:new.pregunta_id := pregunta_pregunta_id_seq.nextval;

end;
/



-- Informe de Resumen de Oracle SQL Developer Data Modeler: 
-- 
-- CREATE TABLE                            19
-- CREATE INDEX                             0
-- ALTER TABLE                             41
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           1
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          1
-- CREATE MATERIALIZED VIEW                 0
-- CREATE MATERIALIZED VIEW LOG             0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   0
-- WARNINGS                                 0