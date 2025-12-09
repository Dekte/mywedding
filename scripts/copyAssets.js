const fs = require('fs');
const path = require('path');

async function copyDir(src, dest) {
  try {
    // Prefer fs.cp when available (Node 16.7+)
    if (fs.cp) {
      await fs.promises.cp(src, dest, { recursive: true });
      console.log(`Copied ${src} -> ${dest}`);
      return;
    }
  } catch (e) {
    // fall through to manual copy
  }

  async function _copy(srcDir, destDir) {
    await fs.promises.mkdir(destDir, { recursive: true });
    const entries = await fs.promises.readdir(srcDir, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(srcDir, entry.name);
      const destPath = path.join(destDir, entry.name);
      if (entry.isDirectory()) {
        await _copy(srcPath, destPath);
      } else {
        await fs.promises.copyFile(srcPath, destPath);
      }
    }
  }

  await _copy(src, dest);
  console.log(`Copied ${src} -> ${dest}`);
}

(async () => {
  const root = path.resolve(__dirname, '..');
  const src = path.join(root, 'asset');
  const dest = path.join(root, 'dist', 'asset');
  try {
    if (!fs.existsSync(src)) {
      console.warn('No asset folder found, skipping copy.');
      process.exit(0);
    }
    await copyDir(src, dest);
  } catch (err) {
    console.error('Failed to copy assets:', err);
    process.exit(1);
  }
})();
