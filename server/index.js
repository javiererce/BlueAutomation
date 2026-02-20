const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const LEADS_FILE = path.join(__dirname, 'leads.json');

// Middleware
app.use(cors());
app.use(express.json());

// Inicializar archivo de leads si no existe
if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
}

// ═══════════════════════════════════════════════════
// POST /api/leads → Guardar un nuevo lead
// ═══════════════════════════════════════════════════
app.post('/api/leads', (req, res) => {
    try {
        const { name, email, phone, hotelName, message } = req.body;

        // Validación básica
        if (!name || !email) {
            return res.status(400).json({ success: false, error: 'Nombre y email son obligatorios.' });
        }

        // Leer leads existentes
        const leads = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'));

        // Crear nuevo lead
        const newLead = {
            id: Date.now(),
            name,
            email,
            phone: phone || '',
            hotelName: hotelName || '',
            message: message || '',
            createdAt: new Date().toISOString(),
            status: 'nuevo'
        };

        // Guardar
        leads.push(newLead);
        fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));

        console.log(`✅ Nuevo lead: ${name} (${email}) - Hotel: ${hotelName || 'N/A'}`);

        res.status(201).json({
            success: true,
            message: '¡Datos recibidos! Nos pondremos en contacto pronto.',
            lead: newLead
        });

    } catch (error) {
        console.error('❌ Error guardando lead:', error);
        res.status(500).json({ success: false, error: 'Error interno del servidor.' });
    }
});

// ═══════════════════════════════════════════════════
// GET /api/leads → Listar todos los leads (panel admin)
// ═══════════════════════════════════════════════════
app.get('/api/leads', (req, res) => {
    try {
        const leads = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'));
        res.json({ success: true, total: leads.length, leads });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error leyendo leads.' });
    }
});

// ═══════════════════════════════════════════════════
// DELETE /api/leads/:id → Eliminar un lead
// ═══════════════════════════════════════════════════
app.delete('/api/leads/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        let leads = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'));
        leads = leads.filter(l => l.id !== id);
        fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
        res.json({ success: true, message: 'Lead eliminado.' });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error eliminando lead.' });
    }
});

// ═══════════════════════════════════════════════════
// GET / → Health check
// ═══════════════════════════════════════════════════
app.get('/', (req, res) => {
    res.json({ status: 'ok', name: 'Blue Automation API', version: '1.0.0' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`\n🚀 Blue Automation API corriendo en http://localhost:${PORT}`);
    console.log(`📋 Ver leads: http://localhost:${PORT}/api/leads`);
    console.log(`─────────────────────────────────────────────\n`);
});
