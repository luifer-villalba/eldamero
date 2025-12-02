import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PLANCHAS_DIR = path.join(__dirname, '../src/content/planchas');

function removeTagsFromFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Eliminar línea de tags
    const tagsRegex = /^tags:.*$/m;

    if (tagsRegex.test(content)) {
        content = content.replace(tagsRegex, '');
        // Limpiar líneas vacías dobles
        content = content.replace(/\n\n\n+/g, '\n\n');

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✅ Tags eliminados de ${path.basename(filePath)}`);
    } else {
        console.log(`⏭️  ${path.basename(filePath)} no tiene tags`);
    }
}

function processAllPlanchas() {
    console.log('🗑️  Eliminando tags...\n');

    const files = fs.readdirSync(PLANCHAS_DIR)
        .filter(file => file.endsWith('.md'))
        .sort();

    files.forEach(file => {
        const filePath = path.join(PLANCHAS_DIR, file);
        removeTagsFromFile(filePath);
    });

    console.log('\n✨ Tags eliminados');
}

processAllPlanchas();