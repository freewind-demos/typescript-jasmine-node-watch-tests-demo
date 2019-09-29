import fs from 'fs';
import path from 'path';

export default function hello() {
  const pkgPath = path.resolve(__dirname, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  return `Hello, ${pkg.name}`;
}
