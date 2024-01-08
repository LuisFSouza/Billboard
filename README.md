# Billboard

Principais funções do sistema:
 - Visualizar avisos
 - Visualizar meus avisos
 - Cadastrar um aviso
 - Alterar um aviso
 - Excluir um aviso

 ## Instalação

1. Clone o repositório
```
git clone https://github.com/LuisFSouza/Billboard.git
```

2. Instale as dependências - navegue até a pasta e execute o comando:
```
npm install
```

3. Crie um banco de dados em MySQL:
```
CREATE DATABASE nomedatabela;
```

4. Adicione a tabela avisos abaixo no banco de dados criado:
```
CREATE TABLE avisos (
	ID_avisos INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	titulo varchar(50),
	data date NOT NULL,
	mensagem text NOT NULL
)
```

5. Crie um arquivo `.env` na raiz do projeto. Modelo:
```
DB_USER=Digite aqui o usuário do banco de dados
DB_PASS=Digite aqui a senha do banco de dados
DB_DATABASE=Digite aqui o nome do banco de dados
DB_HOST=Digite aqui o hostname do banco de dados
```

5. Rode o sistema, ele estará na porta 3000
