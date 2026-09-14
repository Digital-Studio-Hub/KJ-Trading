# KJ Trading (Pty) Ltd

Professional website for **KJ Trading (Pty) Ltd** — gate automation, custom steel gate fabrication, sectional garage doors and CCTV installation in Cape Town and the Western Cape.

- **Live domain:** https://kjtradeversatile.co.za/
- **Organisation:** [Digital-Studio-Hub](https://github.com/Digital-Studio-Hub)

## Pages

Each brief section is a separate page, linked from the sticky header and footer:

| Page | File |
| --- | --- |
| Home | `index.html` |
| About | `about.html` |
| Services | `services.html` |
| Gate Automation | `gate-automation.html` |
| Gate Fabrication | `gate-fabrication.html` |
| Garage Doors | `garage-doors.html` |
| CCTV | `cctv.html` |
| Why Choose Us | `why-choose-us.html` |
| Projects | `projects.html` |
| Gallery | `gallery.html` |
| Brands | `brands.html` |
| Request a Quote | `quote.html` |
| Contact | `contact.html` |
| FAQ | `faq.html` |
| Privacy Policy | `privacy.html` |
| Terms & Conditions | `terms.html` |

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx --yes serve .
```

## Deploy

GitHub Pages is enabled on `main` (root). Custom domain is set in `CNAME` to `kjtradeversatile.co.za`.

Live preview: https://digital-studio-hub.github.io/KJ-Trading/

### Cloudflare DNS (fixes Error 525)

The domain is already on Cloudflare (`brian.ns.cloudflare.com` / `jule.ns.cloudflare.com`). Point the apex at GitHub Pages and set SSL to **Full**:

| Type | Name | Content | Proxy |
| --- | --- | --- | --- |
| CNAME | `@` | `digital-studio-hub.github.io` | DNS only until GitHub issues the certificate, then Proxied |
| CNAME | `www` | `digital-studio-hub.github.io` | Same |

Alternatively use GitHub Pages A records on `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
