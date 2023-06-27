CREATE TABLE PAIS
(
  pais_id INT NOT NULL,
  nombre_pais varchar(40) NOT NULL,
  PRIMARY KEY (pais_id)
);

CREATE TABLE PROVINCIA
(
  nombre_provincia varchar(40) NOT NULL,
  provincia_id INT NOT NULL,
  pais_id INT NOT NULL,
  PRIMARY KEY (provincia_id),
  FOREIGN KEY (pais_id) REFERENCES PAIS(pais_id)
);

CREATE TABLE LOCALIDAD
(
  codigo_postal varchar(6) NOT NULL,
  codigo_localidad INT NOT NULL,
  nombre varchar(40) NOT NULL,
  provincia_id INT NOT NULL,
  PRIMARY KEY (codigo_postal),
  FOREIGN KEY (provincia_id) REFERENCES PROVINCIA(provincia_id)
);

CREATE TABLE EMPLEADO
(
  empleado_id INT NOT NULL,
  dni varchar(40) NOT NULL,
  nombre varchar(40) NOT NULL,
  telefono varchar(20) NOT NULL,
  email varchar(40) NOT NULL,
  fecha_alta date NOT NULL,
  codigo_postal varchar(6) NOT NULL,
  PRIMARY KEY (empleado_id),
  FOREIGN KEY (codigo_postal) REFERENCES LOCALIDAD(codigo_postal)
);

insert into pais(pais_id, nombre_pais)
values ('1', 'Argentina'), ('2', 'Bolivia'), ('3', 'Brasil');

insert into provincia(nombre_provincia, provincia_id, pais_id)
values ('Misiones', '1', '1'), ('Jujuy','2', '1'), ('Corrientes','3', '1');

insert into localidad(codigo_postal, codigo_localidad, nombre, provincia_id)
values ('3334', '1', 'Puerto Rico', '1'), ('2345', '2', 'Corrientes', '3'), ('3333', '3', 'Jardin America', '1');


insert into EMPLEADO(empleado_id, dni, nombre, telefono, email, fecha_alta, codigo_postal)
values ('1', '32543456', 'Juan', '3243342354','2020-06-26', '3334'),
('2', '23546345', 'Hernesto', '43543456','2019-03-25', '2345'),
('3', '43655234', 'Goku', '2345764523','2018-02-12', '3333');

-- no se por que pero no me dejaba ingresar este ultimo insert a empleados :(



