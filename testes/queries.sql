create view vw_funcionario as
select f.*,t.numero as telefone
from funcionario f left join telefone t
on f.matricula = t.matricula;