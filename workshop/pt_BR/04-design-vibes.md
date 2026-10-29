<!-- l10n-sync: source-file="workshop/04-design-vibes.md" -->
# Parte 4: Tematização orientada ao design

---

Nesta parte, você usará os ciclos de planejamento e implementação do Copilot para projetar uma transformação completa do tema. Este é um desenvolvimento orientado ao design — comece pela visão, itere nos visuais e deixe o Copilot cuidar do trabalho pesado de CSS.

## Tarefa 1: Planeje o tema retrô

<!-- track:vscode:start -->
Mude para o modo **Plan** no GitHub Copilot Chat.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Use `/plan` no GitHub Copilot CLI ou pressione **Shift+Tab** até o modo de planejamento ficar ativo.
<!-- track:cli:end -->

Insira este prompt:

> I want to transform this page into a full retro arcade experience. Plan a comprehensive visual overhaul that includes: CRT scanline effects on the background, neon glow on the title that pulses like a neon sign, animated VS badge with gradient color shifts, shine/shimmer overlay on the user result cards, float-in animations for input fields, color-shifting loading text between green and purple, and hover glow effects on contribution squares. Keep the dark background (`#0a0a1a`) with green (`#5fed83`) and purple (`#8a2be2`) accent colors. Use a dark theme with the Press Start 2P retro gaming font from Google Fonts.

O Copilot gerará um plano detalhado de implementação cobrindo todos os efeitos visuais. **Não o aceite imediatamente** — revise o plano e itere:

- Sugira ajustes no tempo das animações (por exemplo, *"Make the neon pulse slower, around 3 seconds"*)
- Pergunte sobre efeitos específicos (por exemplo, *"How will the shimmer overlay work on the cards?"*)
- Peça mudanças na abordagem se algo não parecer adequado

## Tarefa 2: Implemente o tema

Quando estiver satisfeito com o plano, peça ao Copilot para implementá-lo.

> Implement the retro arcade theme plan we just designed.

O Copilot adicionará várias animações CSS, pseudo-elementos e transições à sua folha de estilos. Isso pode incluir:

- `@keyframes` para efeitos de scanlines, pulso neon, shimmer e float-in
- Pseudo-elementos (`::before`, `::after`) para efeitos de sobreposição
- Propriedades personalizadas de CSS para as cores do tema
- Estados de transição e hover para elementos interativos

<!-- track:cli:start -->
Depois que as alterações forem aplicadas, use `/diff` para revisar as alterações de estilo antes de aprová-las.
<!-- track:cli:end -->

## Tarefa 3: Ajuste fino das vibes

> **⚠️ Não está vendo as alterações?** Se o novo tema ou as animações não aparecerem, pare o servidor (`Ctrl+C`), reinicie com `npm run dev` e atualize forçadamente (`Ctrl+Shift+R`) o navegador.

Mantenha a pré-visualização do navegador aberta e continue iterando no design. Experimente prompts como:

> The scanline effect is too strong, reduce opacity to 0.03

> Add a subtle electrical flicker to the title text

> The VS badge should pulse more dramatically

Este é um desenvolvimento orientado ao design — você está iterando na saída visual em tempo real. Cada prompt refina a experiência até que ela fique adequada. Não se contente com algo apenas "bom o suficiente" — aprimore as vibes até a página parecer pertencer a um gabinete de arcade.

## Tarefa 4: Atualize as instruções

Suas instruções devem refletir as principais decisões de design para manter os prompts futuros alinhados.

<!-- track:vscode:start -->
Peça ao Copilot Chat:

> Add a design guide section to copilot-instructions.md describing our retro arcade theme: colors, fonts, animation style
<!-- track:vscode:end -->

<!-- track:cli:start -->
Peça ao Copilot CLI:

> Update our repository instructions with a short design guide for the retro arcade theme: colors, fonts, animation style, and the rule that new UI should keep the neon aesthetic.
<!-- track:cli:end -->

Faça commit das instruções e das alterações de design quando a página estiver adequada.

## ✅ Parte 4 concluída

**O que você aprendeu:**

- Usar fluxos de planejamento para esboçar um **sistema de design antes da implementação**
- **Iterar na saída visual** com prompts rápidos de acompanhamento
- **Atualizar as instruções após decisões importantes** para que o Copilot mantenha a identidade visual consistente
