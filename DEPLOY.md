# Deploy na VPS Hostinger (Nginx)

Site convertido para **SPA estática** (Vite + React + TanStack Router). Sem SSR, sem Cloudflare Worker.

## 1. Build local

```bash
npm install
npm run build
```

A pasta `dist/` é o site pronto.

## 2. Enviar para a VPS

```bash
# Da sua máquina:
rsync -avz --delete dist/ usuario@SEU_IP:/var/www/zibbe/dist/
```

Ou via SCP / painel de arquivos da Hostinger.

## 3. Configurar Nginx

```bash
sudo cp nginx.conf.example /etc/nginx/sites-available/zibbe.com.br
sudo ln -s /etc/nginx/sites-available/zibbe.com.br /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 4. Apontar o domínio

No painel DNS do `zibbe.com.br`, criar registros **A**:
- `@`   → IP da VPS
- `www` → IP da VPS

## 5. SSL (HTTPS)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d zibbe.com.br -d www.zibbe.com.br
```

Depois descomente o bloco HTTPS / redirect no `nginx.conf.example`.

## Atualizações futuras

```bash
npm run build
rsync -avz --delete dist/ usuario@SEU_IP:/var/www/zibbe/dist/
```

Não precisa reiniciar nada — Nginx serve o novo conteúdo automaticamente.
