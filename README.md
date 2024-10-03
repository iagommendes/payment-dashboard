
# Painel de Transações de Pagamento

Este projeto é um protótipo de um painel de transações de pagamento, desenvolvido utilizando **React.js** e **TypeScript**. A aplicação permite visualizar uma lista de transações de pagamento, com informações como ID, data, descrição e valor em USD. Além disso, há a possibilidade de filtrar as transações por um intervalo de datas.

## 📋 Funcionalidades

- Visualizar uma lista de transações de pagamento.
- Filtrar as transações por um intervalo de datas específico.
- Interface amigável e responsiva com uso de Bootstrap.
- Simulação de API para carregar dados de transações fictícias.
- Tratamento de erros em caso de falha no carregamento de dados.
- Área rolável para exibir múltiplas transações sem comprometer o layout da página.

## 🚀 Tecnologias Utilizadas

- **React.js** e **TypeScript**: Framework e linguagem principal do projeto.
- **Bootstrap**: Para estilização e tornar a interface mais atraente e responsiva.
- **Vite**: Utilizado para criação rápida do ambiente de desenvolvimento.
- **date-fns**: Biblioteca para manipulação de datas e permitir filtragens eficazes.

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/painel-transacoes-pagamento.git
```

### 2. Navegar para o Diretório do Projeto
```bash
cd painel-transacoes-pagamento
```

### 3. Instalar as Dependências
```bash
npm install
```

### 4. Executar o Projeto
```bash
npm run dev
```

Após executar o comando acima, a aplicação estará disponível em `http://localhost:3000`.

## 🧩 Estrutura do Projeto

- **`src/`**: Contém os componentes principais e arquivos de configuração.
  - **`components/`**: Componentes reutilizáveis da aplicação.
  - **`mock/transactions.ts`**: Dados simulados das transações e função para simular a API.
  - **`App.tsx`**: Componente principal que exibe as transações e permite filtrar por data.

## 📖 Exemplo de Uso

Após iniciar a aplicação, você verá uma lista de transações financeiras. A partir dessa interface, você poderá:
- **Visualizar as transações**: Cada cartão na lista exibe a descrição, data e valor da transação.
- **Filtrar as transações por data**: Utilize os campos "Start Date" e "End Date" para escolher o intervalo desejado.

## 🎨 Interface

A interface foi criada utilizando componentes do Bootstrap, com cartões (`cards`) para representar cada transação, resultando em um visual mais profissional e moderno. A área de transações possui rolagem vertical para facilitar a navegação, mantendo a interface limpa.

## 🛠️ Melhorias Futuras

- **Paginação**: Adicionar paginação para melhorar a navegação em listas longas de transações.
- **Ordenação**: Permitir que o usuário ordene as transações por data ou valor.
- **Seção de Resumo**: Incluir um resumo com o total de transações e o valor total de acordo com o filtro aplicado.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma **issue** ou enviar um **pull request** para sugerir melhorias ou correções.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ por [Iago Maciel](https://github.com/iagommendes)
