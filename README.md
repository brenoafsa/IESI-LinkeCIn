# IESI-LinkeCIn

## Configurando variáveis de ambiente

1. Crie um arquivo chamado `.env` na raiz do projeto.
2. Adicione o seguinte conteúdo ao arquivo:

    ```env
    DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

    ACCESS_TOKEN_SECRET=422b85902ca037bec3aac4a33b0bf8a0b355a720d8212d336436e23babbe6de20a659f36936919d22fbec00bdf0259d9a670e42622704315c03e512b027fb8ab
    ```

## Como executar a aplicação

1. Abra o repositório em um editor de código, como o Visual Studio Code.
2. Inicie o Docker e aguarde o Docker Engine inicializar.
3. Execute o comando abaixo na raiz do projeto:

    ```sh
    docker-compose up --build
    ```

4. Acesse [http://localhost:5173/](http://localhost:5173/)

## Problema comum na inicialização
![alt text](image.png)

Caso aconteça dos containers do frontend e database serem inicializados, mas o do backend não:
1. Clique no botão de 'start' correspondente ao container do backend, correspondente ao da imagem.
2. Aguarde o container ser inicializado corretamente.