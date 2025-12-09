# 🚀 Install Git - 2 Opsi Termudah

## Opsi 1: Download & Install Manual (RECOMMENDED - Paling Mudah)

1. **Download Git untuk Windows:**
   - Buka: https://git-scm.com/download/win
   - File akan otomatis download (Git-2.xx.x-64-bit.exe)

2. **Run Installer:**
   - Buka file `.exe` yang sudah di-download
   - Klik "Next" terus-terusan (gunakan default settings)
   - Di step "Choose the default editor" → biarkan Vim (atau pilih Notepad jika mau)
   - Di step "Adjust the name of the initial branch" → pilih `main`
   - Klik "Install"

3. **Restart PowerShell:**
   - Tutup VS Code dan PowerShell
   - Buka PowerShell baru
   - Cek: `git --version` → harus tampil versi Git

---

## Opsi 2: Install via winget (Jika sudah built-in di Windows 11)

```powershell
winget install Git.Git
```

Tunggu sampai selesai, lalu restart PowerShell.

---

## Setelah Git Terinstall - Setup Pertama Kali

```powershell
# Set nama dan email
git config --global user.name "Nama Kamu"
git config --global user.email "email@kamu.com"

# Cek apakah berhasil
git config --global --list
```

---

## Langkah Berikutnya (Setelah Git Ready)

1. Buka PowerShell di folder project:
   ```powershell
   cd 'f:\WEBSITE\pixelheart_-y2k-wedding-invite'
   ```

2. Jalankan perintah berikut satu per satu:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: Y2K wedding invitation"
   ```

3. Buat repo di GitHub: https://github.com/new
   - Nama: `pixelheart-y2k-wedding-invite`
   - Klik "Create repository"

4. Copy-paste perintah dari GitHub (akan ada 2-3 baris kode)

5. Untuk autentikasi, gunakan Personal Access Token:
   - https://github.com/settings/tokens
   - Generate token (centang `repo` + `workflow`)
   - Copy token
   - Paste sebagai password saat diminta

---

**Pilih Opsi 1 jika tidak tahu, paling simpel!** 👍
