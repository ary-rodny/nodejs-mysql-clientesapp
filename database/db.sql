CREATE DATABASE IF NOT EXISTS nodemysqlcrud;

USE nodemysqlcrud;

CREATE TABLE clientes(
    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(30) NOT NULL,
    direccion varchar(30) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    PRIMARY KEY(id)
)