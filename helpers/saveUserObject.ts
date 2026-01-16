import fs from 'fs';
import path from 'path';

export async function saveUserObject(user: object) {
    const dir = '.auth';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(
        path.join(dir, 'user1DataObject.json'),
        JSON.stringify(user, null, 2),
        'utf8'
    );
}

export function loadUserObject() {
    const filePath = path.resolve('.auth/user1DataObject.json');
    
    if (!fs.existsSync(filePath)) {
        throw new Error(`User data file not found at ${filePath}`);
    }
    
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}