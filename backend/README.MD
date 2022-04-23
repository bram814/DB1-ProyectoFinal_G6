

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
