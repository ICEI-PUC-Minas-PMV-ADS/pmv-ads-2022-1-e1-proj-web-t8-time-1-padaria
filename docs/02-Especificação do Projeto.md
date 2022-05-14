# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

<p>A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.</p>

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas nos quadros que se seguem:
<br>
<li><b>João Gonçalves</b>: 62 anos, aposentado. Não possui aplicativos de banco. Curti a aposentadoria e aproveitar a família. Tem como frustração não morar perto dos netos. Gosta de pescaria e assistir televisão.
<li><b>Carina Barreiros</b>: 30 anos, publicitária, funcionária de uma empresa de planos de saúde e seguros. Utiliza Facebook, Instagram e aplicativos de banco. Gosta de aproveitar a vida, assistir filmes e ir à lanchonetes. Tem como frustração não seguir dieta e ter pouco tempo disponível durante a semana.
<li><b>Manuel Paulo</b>: Portuuês de 55 anos, dono de padaria, que veio para o Brasil aos 5 anos de idade e aprendeu o ofício com seu pai. Utiliza Facebook e aplicativos de banco. Tem como motivação dar uma boa qualidade de vida para sua família. Tem como frustração a constante redução do fluxo de clientes no pós-pandemia.

## Histórias de Usuários

A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários:
 <br>
|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`       |PARA ... `MOTIVO/VALOR`                        |
|--------------------|------------------------------------------|-----------------------------------------------|
|João Gonçalves      | Saber que horas saem as fornadas de pão  | Comprar pão quente para café da manhã e tarde |
|João Gonçalves      | Receber alertas sobre novidades          | Experimentar novos quitutes                   |
|João Gonçalves      | Saber se uma nova padaria é boa          | Para consumir um bom produto                  |
|Carina Barreiros    | Receber produtos em casa                 | Para não sair de casa para buscar             |
|Carina Barreiros    | Comprar itens que faltam                 | Para terminar uma receita em andamento        |
|Carina Barreiros    | Saber se há outras padarias na região    | Para ter mais opções de compra                |
|Manuel Paulo        | Atrair clientes para sua padaria         | Aumentar o faturamento                        | 
|Manuel Paulo        | Conhecer os clientes da padaria          | Para realizar ações de marketing estratégico  |
|Manuel Paulo        | Ter um relatório das entregas do dia     | Para organizar o serviço de entregas          |
 

## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
