# Case the news

Redesign front-end de telas do app **the news**, criado como case de Dev Front-end & Design. O projeto foca em duas áreas estratégicas da experiência: **Hábitos** e **Mais**.

## Contexto

A proposta parte da pergunta: quais telas poderiam gerar mais impacto real na experiência do usuário? A resposta foi trabalhar em duas frentes:

- aumentar o incentivo ao acesso diário por meio de progresso, sequência e recompensas visuais;
- melhorar a descoberta das funcionalidades secundárias do app com uma navegação mais clara.

## Telas redesenhadas

### Hábitos

A tela de Hábitos foi escolhida por estar diretamente ligada à retenção diária. O redesign dá mais destaque ao streak, aos check-ins, aos dias perfeitos, aos desafios e ao histórico mensal.

A ideia foi usar gamificação como apoio ao hábito de leitura, sem transformar o produto em algo infantil ou distante da proposta editorial do the news.

### Mais

A tela Mais concentra caminhos importantes do app e funciona como uma área de descoberta. O redesign reorganiza as funcionalidades em blocos mais escaneáveis, com cards, ícones claros e hierarquia visual mais objetiva.

## Principais decisões

- Dark mode como base visual, preservando a atmosfera do produto.
- Amarelo como cor principal de destaque e ação.
- Verde para progresso concluído e sucesso.
- Azul/ciano para dias ativos no calendário.
- Cards arredondados para agrupar informações por contexto.
- Números grandes para reforçar progresso e recorrência.
- Emojis e ícones simples para leitura rápida e personalidade.
- Bottom navigation fixa para manter a navegação principal sempre disponível.

## Funcionalidades implementadas

- Tela de Hábitos com streak, hábitos do dia, desafios, calendário mensal e melhor hábito.
- Tela Mais com resumo superior, ações do dia, exploração, comunidade e conta.
- Header com comportamento dinâmico: some ao rolar para baixo e volta ao rolar para cima.
- Navegação entre áreas principais.
- Dados mockados localmente.
- Layout responsivo mobile-first.

## Stack

- React
- TypeScript
- Vite
- CSS Modules
- lucide-react
- React Router

## Como rodar

```bash
npm install
npm run dev
```

Depois acesse:

```txt
http://127.0.0.1:5173/habitos
```

## Rotas

- `/habitos`
- `/habitos/calendario` redireciona para `/habitos`
- `/mais`

## Autocrítica

Com mais tempo, eu refinaria mais estados de interação, criaria fluxos para edição de hábitos, faria ajustes finais comparando com o app original.

Mesmo assim, o case cumpre o objetivo principal: propor melhorias coerentes com a marca, aumentar clareza visual e tornar a experiência mais estimulante para uso recorrente.
