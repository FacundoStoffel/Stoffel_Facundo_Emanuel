CREATE TABLE ALUMNO
(
  cod_matricula INT NOT NULL,
  nombre varchar(40) NOT NULL,
  dni varchar(10) NOT NULL,
  fecha_nac date NOT NULL,
  email varchar(40) NOT NULL,
  PRIMARY KEY (cod_matricula)
);

CREATE TABLE CURSO
(
  cod_curso INT NOT NULL,
  nombre varchar(40) NOT NULL,
  PRIMARY KEY (cod_curso)
);

CREATE TABLE PROFESOR
(
  profesor_id INT NOT NULL,
  nombre varchar(40) NOT NULL,
  especialidad varchar(40) NOT NULL,
  email varchar(40) NOT NULL,
  PRIMARY KEY (profesor_id)
);

CREATE TABLE Cursa
(
  cod_matricula INT NOT NULL,
  cod_curso INT NOT NULL,
  PRIMARY KEY (cod_matricula, cod_curso),
  FOREIGN KEY (cod_matricula) REFERENCES ALUMNO(cod_matricula),
  FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso)
);

CREATE TABLE Enseña
(
  profesor_id INT NOT NULL,
  cod_curso INT NOT NULL,
  PRIMARY KEY (profesor_id, cod_curso),
  FOREIGN KEY (profesor_id) REFERENCES PROFESOR(profesor_id),
  FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso)
);

insert into alumno(cod_matricula, nombre, dni, fecha_nac, email)
values ('1','Juan', '43234654', '2023-06-26', 'elcapo@gmail.com'),
('2','Baki', '43124653', '2000-05-22', 'baki69@gmail.com'),
('3','Goku', '23043546', '2002-07-12', 'gokuui@gmail.com');

insert into curso(cod_curso, nombre)
values ('1', 'Lengua'), ('2', 'Biolodia'), ('3', 'Programacion');

insert into profesor(profesor_id, nombre, especialidad, email)
values ('1', 'Maria', 'Lengua', 'sportacus@gmail.com'),
('2', 'Susana', 'Biologia', 'pezecitoazul@gmail.com'),
('3', 'Lucas', 'Programacion', 'elmasfacha@gmail.com');


select * from alumno
select * from profesor
select * from curso