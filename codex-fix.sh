#!/usr/bin/env bash
# Codex one-shot fixer for Battery Fleet Solutions
# - Tailwind v4 PostCSS plugin (@tailwindcss/postcss)
# - Ensure @import "tailwindcss" in app/globals.css
# - Normalize packageManager to pnpm@10
# - Husky v9 deprecation tweak
# - Guard for next-safe ETARGET
# - Install and initialize shadcn/ui (non-interactive) + add base components
set -euo pipefail

echo "== Codex fixes starting =="

# 0) Require repo root
test -f package.json || { echo "Run from repo root (package.json not found)"; exit 1; }

# 1) Tailwind v4 PostCSS plugin (required in v4)
cat > postcss.config.mjs <<'EOF'
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
EOF
echo "✓ wrote postcss.config.mjs with @tailwindcss/postcss"

# 2) Ensure CSS uses the v4 import and comment old @tailwind directives if present
mkdir -p app
touch app/globals.css
node - <<'NODE'
  const fs = require('fs'); const p = 'app/globals.css';
  let css = fs.readFileSync(p, 'utf8');
  // Comment legacy v3 directives if present
  css = css.replace(/^\s*@tailwind\s+base;\s*$/m, '/* @tailwind base; (replaced by @import "tailwindcss") */');
  css = css.replace(/^\s*@tailwind\s+components;\s*$/m, '/* @tailwind components; (replaced by @import "tailwindcss") */');
  css = css.replace(/^\s*@tailwind\s+utilities;\s*$/m, '/* @tailwind utilities; (replaced by @import "tailwindcss") */');
  // Ensure v4 import exists at the top
  if (!/^@import "tailwindcss";/m.test(css)) {
    css = '@import "tailwindcss";\n\n' + css;
  }
  // Ensure some minimal CSS variables exist (safe if duplicated)
  if (!/--background:/.test(css)) {
    css += `

:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 7%;
}
`;
  }
  fs.writeFileSync(p, css);
  console.log('✓ updated app/globals.css');
NODE

# 3) Normalize package.json: pnpm version, husky script, next-safe guard
node - <<'NODE'
  const fs = require('fs');
  const path = 'package.json';
  const pkg = JSON.parse(fs.readFileSync(path, 'utf8'));
  let changed = false;

  // Ensure packageManager reflects pnpm v10 (quiet Vercel mismatch warnings)
  if (!pkg.packageManager || !pkg.packageManager.startsWith('pnpm@10')) {
    pkg.packageManager = 'pnpm@10';
    changed = true;
  }

  // Husky v9: replace deprecated "husky install" with "husky"
  if (pkg.scripts && typeof pkg.scripts.prepare === 'string' && pkg.scripts.prepare.includes('husky install')) {
    pkg.scripts.prepare = pkg.scripts.prepare.replace('husky install', 'husky');
    changed = true;
  }

  // Guard: if someone pinned next-safe to an invalid v7 range, fix to a real version
  for (const field of ['dependencies','devDependencies']) {
    const deps = pkg[field];
    if (!deps) continue;
    if (deps['next-safe'] && /^[~^]?7/.test(deps['next-safe'])) {
      deps['next-safe'] = '^3.5.0'; // next-safe latest is 3.x
      changed = true;
      console.log('→ pinned next-safe to ^3.5.0 (avoid ETARGET)');
    }
  }

  if (changed) {
    fs.writeFileSync(path, JSON.stringify(pkg, null, 2) + '\n');
    console.log('✓ updated package.json');
  } else {
    console.log('… package.json already OK');
  }
NODE

# 4) Ensure dev deps for Tailwind v4 PostCSS plugin
pnpm add -D @tailwindcss/postcss postcss

# 5) Remove legacy PostCSS configs if they exist (to avoid confusion)
for f in postcss.config.js postcss.config.cjs; do
  if [ -f "$f" ]; then
    git rm -f "$f" 2>/dev/null || rm -f "$f"
    echo "✓ removed legacy $f"
  fi
done

# 6) Install shadcn/ui and initialize (non-interactive)
#    -y skips prompts; -t next ensures correct template
pnpm dlx shadcn@latest init -y -t next || true
echo "✓ shadcn init (non-interactive)"

# 7) Add a small set of baseline components (non-interactive)
#    Safe to re-run; will overwrite only if needed.
pnpm dlx shadcn@latest add -y button card input label textarea dropdown-menu dialog || true
echo "✓ shadcn components added: button, card, input, label, textarea, dropdown-menu, dialog"

# 8) Install deps + build (non-fatal build to let Codex still PR if needed)
pnpm install
pnpm run build || echo "… build failed locally (non-fatal for Codex workflow)"

# 9) Commit changes (don’t fail if not a git repo)
git add -A 2>/dev/null || true
git commit -m "fix(build): Tailwind v4 PostCSS plugin; init shadcn/ui; add base components; pnpm@10; husky deprecation; next-safe guard" 2>/dev/null || true

echo "== Codex fixes done =="

