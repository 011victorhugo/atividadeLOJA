# Mercearia Proz

## Executar

Sirva esta pasta usando um servidor local para que as páginas `index.html` e
`admin.html` compartilhem o mesmo armazenamento do navegador. Por exemplo, no
terminal aberto nesta pasta:

```powershell
python -m http.server 8000
```

Depois, acesse `http://localhost:8000/`. Os produtos cadastrados em
`admin.html` ficam salvos no `localStorage` do navegador.