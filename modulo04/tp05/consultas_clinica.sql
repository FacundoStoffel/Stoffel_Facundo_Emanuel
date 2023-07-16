-- a) insert into PACIENTE(nss, nombre, apellido, domicilio, codigo_postal, telefono, nro_historial_clinico, observaciones) values ('22558', 'Antonio', 'Magallanes', 'Dos Pindo 260', '3640',null ,1932, null);
-- b) update paciente set telefono = '3745-589174' where nro_historial_clinico = 1932;
-- c) select concat(apellido,', ', nombre) as Paciente, observaciones as Observacion_registrada from paciente where observaciones is not null;
-- d) select concat(paciente.apellido,', ', paciente.nombre) as Paciente, medico.especialidad from paciente inner join ingreso on paciente.nro_historial_clinico = ingreso.nro_historial_paciente inner join medico on medico.matricula = ingreso.matricula_medico;
-- e) delete from medico where matricula not in (select matricula_medico from ingreso);
-- f) select ingreso.nro_cama, count(*) as Usos from ingreso group by nro_cama order by usos desc;
-- g) select paciente.apellido,paciente.nombre,ingreso.nro_historial_paciente,count(ingreso.nro_historial_paciente) from paciente inner join ingreso on paciente.nro_historial_clinico = ingreso.nro_historial_paciente group by ingreso.nro_historial_paciente having count(ingreso.nro_historial_paciente) >= 4 order by count(ingreso.nro_historial_paciente) desc;
select * from paciente