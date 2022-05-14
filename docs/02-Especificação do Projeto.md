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
|RF-001| O site deve apresentar na página principal informações sobre como funciona o serviço                   | ALTA  | 
|RF-002| O site deve apresentar, para cada produto, uma imagem correspondente ao mesmo (thumbnail)              | MÉDIA |
|RF-003| O site deve conter um perfil para cada padaria contendo informações sobre a mesma                      | ALTA  |
|RF-004| O site deve conter uma barra para pesquisa de produtos                                                 | ALTA  |
|RF-005| O site deve permitir ao usuário visualizar a disponibilidade do produto em tempo real                  | BAIXA |
|RF-006| O site deve conter um sistema de pagamentos                                                            | ALTA  | 
|RF-007| O site deve notificar sobre novidades                                                                  | BAIXA | 
|RF-008| O site deve informar o horário de fornadas de pão para cada padaria                                    | BAIXA |
|RF-009| O site deve exibir a avaliação média de cada padaria                                                   | BAIXA | 
|RF-010| O site deve ter uma página para que os donos de padarias possam cadastrar seus produtos e empresas     | ALTA  | 
|RF-011| O site deve ter um espaço para cadastro dos clientes, posteriormente permitindo um login               | MÉDIA |
|RF-012| O site deve ter uma página para gerenciamento do sistema interno de Delivery (ordem dos pedidos, horário das entregas, aprovação do pedido etc.)   | ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser hospedado em uma hospedagem de qualidade                                                      | ALTA  | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada                        | ALTA  | 
|RNF-003| O site deve ser leve e pontuar ao menos 50 pontos no PageSpeed Insights para mobile e desktop respectivamente | MÉDIA | 
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)  | ALTA  |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A primeira parte de apresentação do projeto deve ser entregue até a data de 03/04/2022. |
|02| O Sistema deve ser implementado em Front End, usando HTML/CSS.|
|03| Informações sobre valores de preços do produto devem ser dadas somente em moeda local (R$).|
|04| Todas informações de horário devem estar alinhadas com o Horário de Brasília.| 
|05| Informações de cadastro devem seguir a seguinte ordem e são necessários todos os dados. Nome completo do cliente, Rua, bairro, número da residência e telefone de contato.|  
|06| Informações referentes a clientes cadastrados devem ser acessadas somente por usuários autenticados pelo sistema.|  
