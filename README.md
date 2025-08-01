# Site de Estudos

Este repositório contém um site estático gerado a partir de dois documentos
fornecidos. O objetivo é permitir a consulta integral do conteúdo e oferecer
uma ferramenta de simulação de perguntas de múltipla escolha. O site é
responsivo, acessível e inclui um modo automático para temas escuros.

## Como usar

1. Acesse `index.html` para navegar pelo guia de estudo. Utilize o campo de
   busca no cabeçalho para encontrar rapidamente seções ou termos específicos.
   O sumário apresenta links ancorados para cada seção.
2. Acesse `simulacao.html` para realizar uma simulação de quiz. As questões
   são geradas aleatoriamente a partir das definições encontradas nos
   documentos.

## Desenvolvimento local

Para visualizar o site localmente sem um servidor, abra os arquivos HTML
diretamente no seu navegador. Não há dependências externas.

## Workflow de Deploy

Um workflow do GitHub Actions está incluído em `.github/workflows/deploy.yml`. Este
workflow verifica links quebrados usando o [lychee](https://github.com/lycheever/lychee)
e publica os arquivos na branch de GitHub Pages. Cada push na branch `main`
disparará o deploy automaticamente.

## Conteúdo

Todo o conteúdo de `index.html` e as questões da simulação são extraídos
integralmente dos documentos `Guia Completo de Estudo: Salesforce Marketing
Cloud Engagement (Aprofundado)` e `Salesforce Sales Cloud`.
