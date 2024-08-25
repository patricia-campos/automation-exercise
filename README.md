# Automation Exercise 

Bem-vindo(a)!
Este projeto foi criado para avaliação da disciplina de Testes Web da Pós Graduação em Automação de Testes.

## 📋 Descrição do Projeto

Este repositório contém uma suíte de testes automatizados desenvolvida para validar as funcionalidades críticas da aplicação web https://automationexercise.com/. 
Casos de teste desenvolvidos no projeto: https://automationexercise.com/test_cases

## 🛠️ Tecnologias Utilizadas

- **Linguagem**: JavaScript
- **Framework de Automação**: Cypress
- **Relatórios de Teste**: Mochawesome
- **Integração**: Browserstack

## 🚀 Instalação e Execução

Siga os passos abaixo para configurar o ambiente e executar os testes:

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/patricia-campos/automation-exercise.git
    cd nome-do-repositorio
    ```

2. **Instale o cypress:**

    ```bash
    npm install -D cypress@13.7.3
    ```

3. **Execute os testes:**

    Para executar todos os testes na interface cypress:

    ```bash
    npx cypress open
    ```

    Para executar todos os testes gerando relatórios:

    ```bash
    npx cypress run
    ```
<!--
## 🧪 Estrutura de Pastas

A estrutura de pastas do projeto segue as melhores práticas de automação de testes:

```
/tests
  /ui
  /api
  /integration
  /fixtures
  /support
/reports
/config
```

- **/tests**: Contém todos os scripts de testes organizados por tipo.
- **/ui**: Scripts de teste para a interface do usuário.
- **/api**: Scripts de teste para APIs RESTful.
- **/integration**: Scripts de teste para cenários de integração.
- **/fixtures**: Arquivos JSON para dados de teste.
- **/support**: Funções utilitárias e comandos personalizados.
- **/reports**: Relatórios de testes gerados após a execução.
- **/config**: Configurações do projeto e variáveis de ambiente.

-->

## 📊 Relatórios

Os relatórios de testes são gerados automaticamente após cada execução e podem ser encontrados na pasta `/results`. 

## 📧 Contato

Para dúvidas ou sugestões, entre em contato pelo e-mail: qa.patriciacampos@gmail.com
