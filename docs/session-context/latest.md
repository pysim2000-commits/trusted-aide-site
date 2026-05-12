# Trusted-Aide Project Context
Last Updated: 2026-05-13

## Live Sites
- Production: https://trusted-aide-site.pages.dev
- Domain: https://trusted-aide.com (Cloudflare DNS)
- GitHub: pysim2000-commits/trusted-aide-site
- Email: pengyong.sim@trusted-aide.com (Vodien, working on iPhone, NOT working on Outlook Mac)

## Completed
✓ Micro-SMEs section rewritten (commit aa1e5f6)
✓ China MNCs with bridge image (commit d0f7cd4)
✓ Domain migrated to Cloudflare
✓ DNS configured: MX → mail.trusted-aide.com, A record mail → 103.11.190.185
✓ Email working on iPhone

## In Progress
- Outlook Mac email won't connect (tried ports 465, 587, SSL, StartTLS - all fail)

## Vodien Email Settings
Incoming: mail.trusted-aide.com:993 (IMAP SSL)
Outgoing: mail.trusted-aide.com:465 (SMTP SSL)
Username: pengyong.sim@trusted-aide.com

## Design Pattern (for all segment sections)
1. Feature-band: image left (260px height, 12px radius) + title/intro right
2. Full-width "Why Trusted-Aide" card below
3. Challenge/audience cards (2-col grid)
4. "Our Services" heading + 2x2 service cards

## Key Files
- segments.html = main customer segment pages
- assets/Bridge Global and Local.png = custom bridge image
- docs/session-context/latest.md = this file

## Mac mini M4 specs
- 10-core CPU, 24GB RAM, 1TB SSD, Gigabit Ethernet

## To update context at end of session:
Ask: "Update session-context.md with today's work"
