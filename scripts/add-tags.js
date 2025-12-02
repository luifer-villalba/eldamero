import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PLANCHAS_DIR = path.join(__dirname, '../src/content/planchas');

// Mapeo de keywords a tags
const TAG_KEYWORDS = {
    'Hiram': ['Hiram Abif', 'Leyenda de Hiram'],
    'Cámara del Medio': ['Cámara del Medio'],
    'Tres Asesinos': ['Tres Asesinos'],
    'Septenario': ['Septenario', 'Siete Metales'],
    'Pavimento Mosaico': ['Pavimento Mosaico', 'Dualidad'],
    'Escuadra': ['Escuadra', 'Herramientas'],
    'Compás': ['Compás', 'Herramientas'],
    'Acacia': ['Acacia', 'Símbolos'],
    'Maestro': ['Grado Maestro'],
    'Compañero': ['Grado Compañero'],
    'Aprendiz': ['Grado Aprendiz'],
    'Transmutación': ['Transmutación', 'Alquimia'],
    'Virtud': ['Virtudes'],
    'Marcha': ['Marcha del Maestro', 'Ritual'],
    'Mandil': ['Mandil', 'Vestimenta'],
    'Juicio': ['Juicio Interno', 'Conciencia'],
    'Muerte': ['Muerte Iniciática'],
    'Resurrección': ['Resurrección', 'Renacimiento'],
    'Geometría': ['Geometría Sagrada'],
    'Hermetismo': ['Filosofía Hermética'],
    'Planetas': ['Septenario', 'Astrología'],
    'Metales': ['Siete Metales', 'Septenario'],
    'Liberal': ['Artes Liberales'],
    'Delta': ['Delta Luminoso', 'Símbolos'],
    'Pentagrama': ['Pentagrama', 'Estrella Flamígera'],
    'Chakra': ['Chakras', 'Energía'],
    'Alquimia': ['Alquimia', 'Transmutación'],
    'Templo': ['Templo Interior', 'Construcción'],
    'Cadena': ['Cadena de Unión', 'Fraternidad'],
    'Juramento': ['Juramento', 'Compromiso'],
    'Salario': ['Salario del Maestro'],
    'Octonario': ['Octonario', 'Ley del Ocho'],
    'Estrella': ['Estrella Flamígera', 'Pentagrama']
};

// Lista de palabras a ignorar
const STOPWORDS = new Set([
    'como', 'para', 'sobre', 'desde', 'hasta', 'entre', 'con', 'sin',
    'por', 'bajo', 'tras', 'ante', 'hacia', 'mediante', 'durante',
    'según', 'contra', 'dentro', 'fuera', 'cerca', 'lejos',
    'antes', 'después', 'ahora', 'luego', 'entonces', 'además',
    'también', 'pero', 'porque', 'aunque', 'cuando', 'donde',
    'que', 'del', 'los', 'las', 'una', 'uno', 'sus', 'mis',
    'este', 'ese', 'esta', 'esa', 'estos', 'esos', 'estas', 'esas',
    'todo', 'toda', 'todos', 'todas', 'otro', 'otra', 'otros', 'otras',
    'mismo', 'misma', 'mismos', 'mismas', 'tal', 'tales',
    'cual', 'cuales', 'quien', 'quienes', 'cuyo', 'cuya',
    'mas', 'menos', 'muy', 'tan', 'tanto', 'tanta',
    'ser', 'estar', 'hacer', 'tener', 'poder', 'deber',
    'hay', 'sido', 'está', 'están', 'hace', 'hacen',
    'fases', 'paso', 'pasos', 'etapa', 'etapas', 'parte', 'partes',
    'forma', 'formas', 'manera', 'maneras', 'modo', 'modos',
    'tipo', 'tipos', 'clase', 'clases', 'caso', 'casos'
]);

function isValidTag(word) {
    const lower = word.toLowerCase();

    // Rechazar si:
    // - Es stopword
    // - Tiene menos de 4 caracteres
    // - Tiene más de 30 caracteres
    // - Es solo números
    // - Tiene caracteres raros

    if (STOPWORDS.has(lower)) return false;
    if (word.length < 4) return false;
    if (word.length > 30) return false;
    if (/^\d+$/.test(word)) return false;
    if (/[^a-záéíóúñA-ZÁÉÍÓÚÑ\s\-]/.test(word)) return false;

    return true;
}

function extractTags(content, frontmatter) {
    const tags = new Set();

    // Tags del tema (frontmatter)
    if (frontmatter.tema) {
        const temaWords = frontmatter.tema
            .split(/[,\s]+/)
            .filter(w => isValidTag(w));
        temaWords.forEach(word => tags.add(word));
    }

    // Tags del símbolo (frontmatter)
    if (frontmatter.simbolo) {
        const simboloParts = frontmatter.simbolo
            .split(/[,\-]+/)
            .map(s => s.trim())
            .filter(w => isValidTag(w));

        simboloParts.forEach(part => tags.add(part));
    }

    // Tags del contenido basado en keywords
    const contentLower = content.toLowerCase();

    Object.entries(TAG_KEYWORDS).forEach(([keyword, relatedTags]) => {
        if (contentLower.includes(keyword.toLowerCase())) {
            relatedTags.forEach(tag => {
                if (isValidTag(tag)) {
                    tags.add(tag);
                }
            });
        }
    });

    // Limitar a 8 tags máximo, priorizando los más descriptivos
    return Array.from(tags)
        .sort((a, b) => {
            // Priorizar tags de TAG_KEYWORDS
            const aIsKeyword = Object.values(TAG_KEYWORDS).flat().includes(a);
            const bIsKeyword = Object.values(TAG_KEYWORDS).flat().includes(b);

            if (aIsKeyword && !bIsKeyword) return -1;
            if (!aIsKeyword && bIsKeyword) return 1;

            // Luego por longitud (palabras más largas = más específicas)
            return b.length - a.length;
        })
        .slice(0, 8);
}

function parseFrontmatter(content) {
    // Regex mejorado para detectar frontmatter con cualquier line ending
    const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
    const match = content.match(frontmatterRegex);

    if (!match) return null;

    const frontmatterText = match[1];
    const frontmatter = {};

    // Parsear línea por línea
    const lines = frontmatterText.split(/\r?\n/);
    lines.forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > -1) {
            const key = line.substring(0, colonIndex).trim();
            const value = line.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
            frontmatter[key] = value;
        }
    });

    return { frontmatter, fullMatch: match[0] };
}

function addTagsToFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsed = parseFrontmatter(content);

    if (!parsed) {
        console.log(`❌ No frontmatter found in ${path.basename(filePath)}`);
        return;
    }

    const { frontmatter, fullMatch } = parsed;

    // Skip si ya tiene tags
    if (fullMatch.includes('tags:')) {
        console.log(`⏭️  ${path.basename(filePath)} ya tiene tags`);
        return;
    }

    // Extraer tags
    const restContent = content.substring(fullMatch.length);
    const tags = extractTags(restContent, frontmatter);

    if (tags.length === 0) {
        console.log(`⚠️  No se encontraron tags para ${path.basename(filePath)}`);
        return;
    }

    // Construir nuevo frontmatter
    const frontmatterLines = fullMatch.split(/\r?\n/);
    const closingIndex = frontmatterLines.length - 1;

    // Insertar tags antes del cierre
    const tagsLine = `tags: [${tags.map(t => `"${t}"`).join(', ')}]`;
    frontmatterLines.splice(closingIndex, 0, tagsLine);

    const newFrontmatter = frontmatterLines.join('\n');
    const newContent = newFrontmatter + restContent;

    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`✅ ${path.basename(filePath)} → ${tags.length} tags: ${tags.join(', ')}`);
}

function processAllPlanchas() {
    console.log('🔍 Procesando planchas...\n');

    const files = fs.readdirSync(PLANCHAS_DIR)
        .filter(file => file.endsWith('.md'))
        .sort();

    files.forEach(file => {
        const filePath = path.join(PLANCHAS_DIR, file);
        addTagsToFile(filePath);
    });

    console.log('\n✨ Proceso completado');
}

processAllPlanchas();