# YouTube Knowledge Hub Pro

Versão mais robusta do app para organizar vídeos, cursos e referências de estudo com foco em IA, programação e tecnologia.

## O que esta versão inclui

- Landing page moderna + catálogo funcional
- Cadastro manual de itens
- Busca por título, canal, insights, notas e tags
- Filtros por categoria e status
- Dashboard com gráficos
- Exportação para CSV
- Persistência local no navegador
- Base preparada para integração com Supabase
- Estrutura em React + Vite + TypeScript + Tailwind

## Como executar

```bash
npm install
npm run dev
```

## Como gerar build

```bash
npm run build
```

## Publicação

Você pode publicar facilmente em:

- Vercel
- Netlify
- Cloudflare Pages

## Preparação para Supabase

1. Copie `.env.example` para `.env`
2. Preencha:

```env
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

3. A camada `src/supabase.ts` já está pronta para uso.

## Próxima evolução recomendada

- autenticação por e-mail
- sincronização online entre dispositivos
- tabela `videos`
- upload de thumbnail personalizada
- extração automática de metadados do YouTube via backend/serverless
- favoritos e coleções
- modo admin / usuário
