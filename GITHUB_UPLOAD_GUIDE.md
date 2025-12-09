# 📤 Panduan Upload ke GitHub

## Langkah 1: Install Git (jika belum)
1. Download Git dari: https://git-scm.com/download/win
2. Jalankan installer dan ikuti langkah default
3. Restart PowerShell setelah selesai

## Langkah 2: Setup Git (pertama kali saja)
```powershell
git config --global user.name "Nama Kamu"
git config --global user.email "email@kamu.com"
```

## Langkah 3: Inisialisasi Git di folder project
```powershell
cd 'f:\WEBSITE\pixelheart_-y2k-wedding-invite'
git init
```

## Langkah 4: Buat file `.gitignore` untuk exclude file yang tidak perlu
```powershell
# Buat .gitignore dengan konten umum untuk Node.js project
@"
node_modules/
dist/
.env
.DS_Store
*.log
"@ | Out-File -Encoding UTF8 '.gitignore'
```

## Langkah 5: Add semua file dan commit
```powershell
git add .
git commit -m "Initial commit: Y2K wedding invitation site"
```

## Langkah 6: Buat repository di GitHub
1. Pergi ke https://github.com/new
2. Isi nama repository: `pixelheart-y2k-wedding-invite`
3. Pilih "Public" atau "Private" sesuai keinginan
4. **JANGAN centang** "Initialize this repository with a README" (karena repo lokal sudah ada)
5. Klik "Create repository"

## Langkah 7: Hubungkan repo lokal ke GitHub
Setelah membuat repository, GitHub akan memberikan perintah. Copy-paste ini di PowerShell:

```powershell
cd 'f:\WEBSITE\pixelheart_-y2k-wedding-invite'
git branch -M main
git remote add origin https://github.com/USERNAME/pixelheart-y2k-wedding-invite.git
git push -u origin main
```

**Ganti `USERNAME` dengan username GitHub kamu!**

## Langkah 8: Jika diminta autentikasi
GitHub tidak lagi support password biasa. Gunakan salah satu:

### Opsi A: Personal Access Token (Recommended)
1. Pergi ke: https://github.com/settings/tokens
2. Klik "Generate new token"
3. Pilih "Generate new token (classic)"
4. Centang: `repo` dan `workflow`
5. Klik "Generate token" dan copy tokennya
6. Saat push, gunakan token sebagai password:
   ```powershell
   # Saat diminta password, paste token yang sudah dicopy
   ```

### Opsi B: SSH Key
1. Generate SSH key:
   ```powershell
   ssh-keygen -t ed25519 -C "email@kamu.com"
   # Tekan Enter 3x untuk accept default
   ```
2. Copy public key:
   ```powershell
   Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | Set-Clipboard
   ```
3. Pergi ke: https://github.com/settings/keys
4. Klik "New SSH key"
5. Paste key dan save
6. Ubah remote URL ke SSH:
   ```powershell
   git remote set-url origin git@github.com:USERNAME/pixelheart-y2k-wedding-invite.git
   ```

## Langkah 9: Push pertama kali
```powershell
cd 'f:\WEBSITE\pixelheart_-y2k-wedding-invite'
git push -u origin main
```

---

## ✅ Verifikasi Berhasil
- Pergi ke repository GitHub kamu
- Pastikan semua file sudah ter-upload (kecuali `node_modules/` dan file di `.gitignore`)
- Lihat "# commits" di bagian atas repo

## 📝 Update & Push Kedepannya
Setiap kali kamu update file:
```powershell
cd 'f:\WEBSITE\pixelheart_-y2k-wedding-invite'
git add .
git commit -m "Deskripsi singkat perubahan"
git push
```

## 🐛 Troubleshooting

### Error: "fatal: not a git repository"
→ Jalankan `git init` dulu di folder project

### Error: "fatal: could not read Username"
→ Gunakan Personal Access Token (Opsi A di atas)

### Error: "fatal: The current branch main does not have upstream tracking"
→ Jalankan: `git push -u origin main`

### File `.gitignore` tidak work
→ Jalankan:
```powershell
git rm -r --cached .
git add .
git commit -m "Remove ignored files"
git push
```

---

## 🎯 File yang WAJIB di-exclude (sudah di .gitignore)
- `node_modules/` — sangat besar, di-install ulang via `npm install`
- `dist/` — di-generate saat build
- `.env` — file konfigurasi sensitif
- `*.log` — file log

---

**Good luck! 🚀**
