
<p align="center">
  <img src="https://github.com/user-attachments/assets/c5a91943-c02d-41cf-9eeb-8c30f3abad9e" alt="Logo" style="width: 300px; height: auto;" />
</p>


# LinkeCIn – Sistema de Oportunidades Acadêmicas e Profissionais do CIn-UFPE

Permite que alunos e professores publiquem, filtrem e acompanhem oportunidades, além de simular horas do SIGAA.


## Repositorio Git

O código fonte do projeto está disponível no repositório GitHub:

[https://github.com/brenoafsa/IESI-LinkeCIn](https://github.com/brenoafsa/IESI-LinkeCIn)


### Pré-requisitos

- Docker instalado (versão recomendada 20.x ou superior)  
- Docker Compose instalado (ou Docker Desktop que já inclui Compose)

  
## Como Executar o Software com Docker

Para facilitar a execução do projeto, utilizamos **Docker** e **Docker Compose**. Siga os passos abaixo para rodar o sistema em containers:

1. Clone o repositório:
   ```bash
   git clone https://github.com/brenoafsa/IESI-LinkeCIn
   ```
   
2. Acesse a pasta do projeto:
```bash
   cd IESI-LinkeCIn
```
 ### Configurando variáveis de ambiente

3. Crie um arquivo chamado `.env` na raiz do projeto.
4. Adicione o seguinte conteúdo ao arquivo:

    ```env
    DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

    ACCESS_TOKEN_SECRET=422b85902ca037bec3aac4a33b0bf8a0b355a720d8212d336436e23babbe6de20a659f36936919d22fbec00bdf0259d9a670e42622704315c03e512b027fb8ab
    ```



   ```
5. Construa e inicie os containers:

```bash
   docker-compose up --build
   ```
6. Para parar os containers:
```bash
   docker-compose down
   ```

## Funcionalidades (MVP)

### 1. Gerenciamento de Usuários
- Cadastre-se como *Aluno* (informe o curso, o semestre atual e as disciplinas concluídas).
- Cadastre-se como *Professor*.
- Login seguro usando credenciais institucionais com validação básica.

### 2. Publicação de Oportunidades
- Professores e alunos podem publicar oportunidades (estágios, eventos, pesquisa, voluntariado, etc.).
- Campos obrigatórios: título, descrição, tipo, prazo e pré-requisitos (semestre mínimo, disciplinas obrigatórias).

### 3. Visualização e Filtragem Personalizadas
- As oportunidades são adaptadas ao perfil de cada aluno.
- Suporta filtros por tipo e prazo.
- Tanto alunos quanto professores podem visualizar as listagens.

### 4. Relatórios e Gestão de Horas Complementares
Visualize relatórios como:
- Número de eventos em que já participou.
- Tipos de oportunidades mais frequentes publicadas.
  
Acompanhe e gerencie a estimativa de horas complementares:
- Os alunos podem registrar oportunidades já cursadas ou interessadas.
- O sistema estima as horas restantes para atividades complementares e de extensão.

## Estrutura do Projeto

``` bash
LinkeCIn/

├── frontend/ # Frontend React (Vite)
├── backend/ # Backend Node.js + Express (TypeScript, Prisma)
├── docker-compose.yml # Configuração do Docker para desenvolvimento
├── package.json # Dependências e scripts raiz
└── README.md # Visão geral e instruções do projeto
```

## Autores

- [Adrieli Queiroz](https://www.github.com/adriqueirozz)
- [Ana Julia Ferreira](https://github.com/jujubsfs)
- [Breno Augusto](https://github.com/brenoafsa)
- [Camily Saraiva](https://github.com/CamilySaraiva)
- [Maria Leticia Figueiroa](https://github.com/LetsFigueiroa)


