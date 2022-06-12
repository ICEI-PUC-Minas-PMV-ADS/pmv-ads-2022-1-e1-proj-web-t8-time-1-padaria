# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

<b> QUEM SOMOS NÓS </b>

A página Quem Somos Nós é uma página estática que explica os objetivos da solução web e o que esta solução tem a oferecer para os clientes. Além disso, tem botões no rodapé para encaminhar o cliente à página de casdastro da padaria, padarias participantes e um fale conosco.
O testes a serem realizados devem mostrar o atendimento aos seguintes requisitos: 

|ID      | Descrição do Requisito  |Prioridade |<br>
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |   ALTA  | <br>
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)  | ALTA  |<br>

Para o RNF-002, o teste será feito alterando as proporções de tela do computador e através das ferramentas de desenvolvedor que o navegador oferece. O requesito será atendido se todos os textos e imagens se adequarem para as novas proporções, sem se sobrescrever ou distorcer.
Para o RNF-004, o teste será feito abrindo a página no Google Chrome, Firefox e Microsoft Edge. O requisito será atendido se a página se mantiver responsiva dentro desses navegadores, não houver diferença de uma visualização para outra e se as funcionalidades, como o botão "Fale Conosco", estiverem funcionando da mesma maneira.


<b> PÁGINA DE CADA PADARIA </b>

|ID      | Descrição do Requisito  |Prioridade |
|RF-03   |O site deve conter um perfil para cada padaria contendo informações sobre a mesma | alta

Para o RF-03 o teste será feito verificando se o botão do Whatsapp leva para contato diretamente com a padaria. O link será aberto em uma nova aba do navegador ou aplicativo do Whatsapp (caso a pessoa tenha instalado em seu dispositivo).O requisito será atendido se não ocorrer nenhum tipo de erro durante o redirecionamento para o Whatsapp


<b> PÁGINA DE LOGIN </b>
|ID   | Descrição do Requisito |Prioridade |
RF-11 |O site deve ter um espaço para cadastro dos clientes, posteriormente permitindo um login |Média 

 Para o RF-11 O teste será feito testando um login e senha que estará contido em um arquivo JSON se o login e senha for confirmado sem nenhum tipo de erro o requisito será atendido.
 
 Caso de teste pagina home 

RNF01 - A pagina deve conter um slide com imagens referentes a padaria 
RNF01 - A pagina deve conter um link que informa endereco da empresa 

Objetivo do teste:  Verificar se a pagina esta aparecendo corretamente 

Passos: Acessar a pagina 
               Clicar no slide de fotos
               clicar no link endereco 

Criterios de exito: As fotos devem mudar ao serem clicadas no slide
                                Ao clicar no link endereco deve aparecer o endereço da empresa


