#!/usr/bin/env node
/**
 * Post-build script pro opravu struktury složek
 * 
 * SvelteKit generuje en.html v root, ale když existuje složka en/,
 * prohlížeče hledají en/index.html
 */

import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';

const buildDir = 'build';

// Zkopírovat en.html do en/index.html
const enHtmlPath = join(buildDir, 'en.html');
const enIndexPath = join(buildDir, 'en', 'index.html');

if (existsSync(enHtmlPath)) {
	copyFileSync(enHtmlPath, enIndexPath);
	console.log('✓ Zkopírováno en.html -> en/index.html');
} else {
	console.warn('⚠ Soubor en.html nenalezen');
}

console.log('✓ Post-build dokončen');

