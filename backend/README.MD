

-------------
# BACKEND
-------------

# Getting Started with Create Node.js App

Crear proyecto de Node js
```bash
npm init -y
```
-------------
# DEPENDENCIAS
```bash
npm install express morgan oracledb cors
```
Por ultimo instalar la libería nodemon para que cada vez que se actualice un cambión lo vaya a realizar la appi.
```bash
npm install nodemon
```

-------------
# Execute

```bash
npm start
```

-------------

# CONFIGURACIONES
-------------
### JDK

Cambiar la versión de java

```bash
sudo update-alternatives --config java
```


Version de JDK 11 o 8
```bash
sudo gedit /etc/bash.bashrc
```

-------------
### Sqldeveloper


Configurar el SetJavaHome a la versión 11

<code># SetJavaHome /usr/lib/jvm/java-11-openjdk-amd64</code>
```bash
sudo gedit ~/.sqldeveloper/21.2.1/product.conf
```

-------------
#### Execute


Cargar imagen de Docker
```bash
sudo docker start oracle
sudo docker logs oracle
sudo docker ps
```

Abrir sqldeveloper
```bash
sh /opt/sqldeveloper/sqldeveloper.sh 
```

-------------
### Datamodeler


Configurar el SetJavaHome a la versión 8

<code># SetJavaHome /usr/lib/jvm/java-8-openjdk-amd64</code>
```bash
sudo gedit ~/.oraclesqldeveloperdatamodeler/21.4.1/product.conf
```



# Procedimiento Almacenado


```sql
 -- Solicitamos todos los objetos que son procedimientos:
 select *from user_objects where object_type='PROCEDURE';
 -- Eliminar Procedure
 DROP PROCEDURE name_procedure;
```

### Crear un Procedimiento Almacenado
```sql
    
CREATE OR REPLACE PROCEDURE nombre_procedimiento
(<param1> [IN|OUT|IN OUT] <type>,
 <param2> [IN|OUT|IN OUT] <type>, ...)
 
IS
-- Declaracion de variables locales
BEGIN
-- Sentencias
EXCEPTION
-- Sentencias control de excepcion
END nombre_procedimiento;

Cuando crea un procedimiento o una función, puede definir parámetros. Hay tres tipos de parámetros que se pueden declarar:

1) Parámetro de tipo IN: Estos tipos de parámetros se utilizan para enviar valores a procedimientos almacenados por lo tanto su valor de parámetro no puede ser reemplazado.

2) Parámetro de tipo OUT: Estos tipos de parámetros se utilizan para obtener valores de los procedimientos almacenados. Por consiguiente es similar a un tipo de retorno en funciones.

3) Parámetro IN OUT: Estos tipos de parámetros se utilizan para enviar valores aunque también para obtener valores en los procedimientos almacenados
```

### Llamada de un procedimiento almacenado

```sql
BEGIN
   insert_alumno (
    <param1>,
    <param2>, ...
    );
END;
```

