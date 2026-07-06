# Multivox Download Website

A standalone static download page for the Multivox Windows application.

## Project Structure

```
multivox_web/
├── index.html                 # Main landing page
├── favicon.ico                # Browser tab icon
├── assets/
│   ├── css/
│   │   └── style.css          # All styles (dark theme, responsive)
│   ├── js/
│   │   └── main.js            # Nav toggle, scroll animations, checksum copy
│   ├── images/
│   │   ├── multivox_app_png_logo.png
│   │   ├── multivox_full_png_logo.png
│   │   ├── multivox_full.png
│   │   └── multivox_main.png
│   └── downloads/
│       └── Multivox.exe       # <-- DROP YOUR REAL EXE HERE
└── README.md
```

## Quick Start

1. Replace the placeholder `assets/downloads/Multivox.exe` with your real build.
2. Open `index.html` in a browser to preview locally.
3. Edit placeholder content (marked with `[PLACEHOLDER]` comments in the HTML).

## Placeholder Values to Update

Search the codebase for `[PLACEHOLDER]` to find everything you need to customize:

| What | Where | Notes |
|---|---|---|
| Version number | `index.html` (hero section) | e.g. `Version 1.2.0` |
| File size | `index.html` (hero section) | e.g. `~45 MB` |
| App description | `index.html` (hero + about section) | 2-3 sentences |
| Feature cards | `index.html` (features section) | icon, title, description |
| System requirements | `index.html` (requirements section) | OS, CPU, RAM, disk |
| Domain name | `index.html` (download note + footer + OG tags) | Replace `YOUR_DOMAIN.com` |
| SHA-256 checksum | `index.html` (checksum box) | Generate after placing real exe |
| Copyright year | `index.html` (footer) | e.g. `2026` |
| Contact email | `index.html` (footer) | e.g. `hello@yourdomain.com` |
| Accent color | `assets/css/css/style.css` (`:root`) | Change `--accent` hex value |

## Generating SHA-256 Checksum

After placing your real `Multivox.exe`, generate the checksum:

**PowerShell:**
```powershell
Get-FileHash .\assets\downloads\Multivox.exe -Algorithm SHA256
```

**Command Prompt:**
```cmd
certutil -hashfile assets\downloads\Multivox.exe SHA256
```

Copy the hash into the `checksumValue` element in `index.html`.

## Deployment

This is a **pure static site** — no build step, no server code, no dependencies.

### Option A: Static Hosting (Recommended)
Deploy to any static host:
- **Netlify**: Drag & drop the `multivox_web` folder, or connect a Git repo
- **Vercel**: Import the folder, framework = "Other", no build command
- **GitHub Pages**: Push to a repo, enable Pages in Settings

### Option B: FTP / Your Own Hosting
1. Upload the entire `multivox_web` folder contents to your web server via FTP/SFTP.
2. Point your domain to the uploaded directory.
3. Ensure the server serves `index.html` as the default page.

### Option C: Local Preview
Just open `index.html` directly in your browser — no server needed.

## File Size Considerations

- If the `.exe` is **under 100 MB**: commit it directly to Git (or host separately).
- If the `.exe` is **over 100 MB**: use **Git LFS** or exclude the exe from Git and upload it via FTP separately.
  - To exclude from Git, add `assets/downloads/Multivox.exe` to `.gitignore`.
- For any static host, the exe is served as a direct download — no redirect, no third party.

## License

This website code is provided as-is for the Multivox project. Edit freely.
"# multivox_web" 
