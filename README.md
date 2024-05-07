# Aula 2: Criando uma tabela com HTML

Durante essa aula, vamos abordar os tópicos:

* Estrutura inicial do projeto;
* Estrutura base de uma tabela com HTML;

## Contexto

Primeiro, vamos anotar as nossas tarefas semanais:

* Português - páginas 30 a 35, exercícios 1 a 20 (20/07/2024)
* Matemática - capítulo 5, exercícios 1 a 10 (22/07/2024)
* Ciências - páginas 50 a 55, exercícios 1 a 15 (23/07/2024)
* História - capítulo 3, exercícios 1 a 5 (24/07/2024)
* Inglês - páginas 40 a 45, exercícios 1 a 10 (25/07/2024)

## Problema

Precisamos de um espaço que possa armazenar esses dados de forma organizada.


## Solução

Vamos criar uma tabela, onde podemos manter todas as nossas tarefas organizadas.


## Teoria

Uma tabela é uma estrutura de dados que organiza informações em linhas e colunas. Ela é amplamente utilizada para exibir dados de forma organizada e legível.

Em HTML, podemos dividir a estrutura da tabela com algumas tags principais:

* `<table>`: Essa é a tag principal que define a estrutura da tabela. Ela envolve todo o conteúdo da tabela, incluindo as linhas e colunas.

* `<tr>`: Essa tag representa uma **linha** na tabela. Dentro dela, você pode adicionar células de dados ou células de cabeçalho.

* `<th>`: Essa tag é usada para criar **células de cabeçalho** na tabela. Geralmente, as células de cabeçalho são usadas para rotular as colunas ou fornecer informações adicionais sobre os dados na tabela. Por exemplo, se você estiver criando uma tabela de tarefas, as células de cabeçalho podem ser "Tarefa", "Data de Vencimento" e assim por diante.

* `<td>`: Essa tag é usada para criar **células de dados** na tabela. As células de dados contêm as informações reais que você deseja exibir na tabela. Por exemplo, se você estiver criando uma tabela de tarefas, as células de dados podem conter os nomes das tarefas, as datas de vencimento, etc.

## PARA SABER MAIS: `thead` e `tbody`

A tag `<tbody>` e a tag `<thead>` são usadas para organizar o conteúdo de uma tabela HTML de forma mais semântica e estruturada.

A tag `<thead>` é usada para agrupar as células de cabeçalho da tabela. Geralmente, as células de cabeçalho são usadas para rotular as colunas ou fornecer informações adicionais sobre os dados na tabela. Por exemplo, se você estiver criando uma tabela de tarefas, as células de cabeçalho podem ser "Tarefa", "Data de Vencimento" e assim por diante. Ao envolver as células de cabeçalho com a tag `<thead>`, você está indicando que essas células são os cabeçalhos da tabela.

A tag `<tbody>` é usada para agrupar as células de dados da tabela. As células de dados contêm as informações reais que você deseja exibir na tabela. Por exemplo, se você estiver criando uma tabela de tarefas, as células de dados podem conter os nomes das tarefas, as datas de vencimento, etc. Ao envolver as células de dados com a tag `<tbody>`, você está indicando que essas células são os dados da tabela.

A utilização dessas tags (`<thead>` e `<tbody>`) é opcional, mas é uma prática recomendada para melhorar a legibilidade e a acessibilidade da tabela. Além disso, elas também podem ser úteis para estilizar diferentes partes da tabela usando CSS.

Aqui está um exemplo de como as tags `<thead>` e `<tbody>` podem ser usadas em uma tabela HTML:
