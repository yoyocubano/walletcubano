/**
 * AUDITORÍA FINANCIERA — Google Apps Script
 * ==========================================
 * INSTALACIÓN:
 *   1. Abre tu Google Sheet → Extensiones → Apps Script
 *   2. Pega todo este código y guarda (Ctrl+S)
 *   3. Ejecuta setupSheet() una vez para crear las hojas y columnas
 *   4. Implementar → Nueva implementación → Aplicación web
 *      - Ejecutar como: Yo
 *      - Acceso: Cualquier usuario
 *   5. Copia la URL del Web App
 *   6. Pégala en auditoria.html como: const WEB_APP_URL = 'TU_URL_AQUI';
 */

function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // ── Hoja: Datos ───────────────────────────────────────────────────────────
  let datos = ss.getSheetByName('Datos');
  if (!datos) datos = ss.insertSheet('Datos');
  datos.clearContents();

  datos.getRange(1,1,1,4).setValues([['Clave','Valor','Descripción','Última actualización']]);
  datos.getRange(1,1,1,4).setFontWeight('bold').setBackground('#1a1a19').setFontColor('#f0efec');

  const rows = [
    ['tr_cash',          5305.84, 'Trade Republic — cash (€)'],
    ['tr_etf',            972.11, 'Trade Republic — ETFs (€)'],
    ['cobrar',            4600,   'Cuentas por cobrar Atelier Prestige (€)'],
    ['toyota',            2880,   'Último pago Toyota (€)'],
    ['sandrine_total',   10000,   'Préstamo Sandrine total pendiente (€)'],
    ['sandrine_mes',     302.78,  'Cuota mensual Sandrine (€)'],
    ['revolut',             0,   'Saldo Revolut (€)'],
    ['salario',          2762,    'Salario neto EXTEAM (€/mes)'],
    ['gasto_sandrine',   302.78,  'Gasto fijo: Sandrine (€/mes)'],
    ['gasto_resto',       275,    'Gasto variable: Restauración (€/mes)'],
    ['gasto_gasolina',    155,    'Gasto variable: Gasolina (€/mes)'],
    ['gasto_orange',       80,    'Gasto fijo: Orange (€/mes)'],
    ['gasto_claude',       45,    'Gasto fijo: Claude + IONOS (€/mes)'],
    ['gasto_seguros',     184,    'Gasto fijo: Seguros Lalux (€/mes)'],
    ['gasto_multas',       73,    'Gasto evitable: Multas (€/mes)'],
    ['gasto_cuba',        150,    'Remesas Cuba — Walter Antonio (€/mes)'],
  ];
  datos.getRange(2,1,rows.length,3).setValues(rows);
  datos.setColumnWidth(1,160);
  datos.setColumnWidth(2,100);
  datos.setColumnWidth(3,280);
  datos.setColumnWidth(4,180);

  // Formato numérico columna B
  datos.getRange(2,2,rows.length,1).setNumberFormat('€#,##0.00');

  // ── Hoja: Historial ──────────────────────────────────────────────────────
  let hist = ss.getSheetByName('Historial');
  if (!hist) hist = ss.insertSheet('Historial');
  hist.clearContents();
  hist.getRange(1,1,1,6).setValues([['Fecha','TR Total','Cobrar','Toyota','Sandrine pendiente','Patrimonio neto']]);
  hist.getRange(1,1,1,6).setFontWeight('bold').setBackground('#1a1a19').setFontColor('#f0efec');

  SpreadsheetApp.getUi().alert('✅ Setup completado.\n\nAhora:\n1. Implementar → Nueva implementación → App web\n2. Copia la URL y pégala en auditoria.html');
}

// ── GET: el widget llama esto para leer los datos ─────────────────────────────
function doGet(e) {
  const ss  = SpreadsheetApp.getActiveSpreadsheet();
  const datos = ss.getSheetByName('Datos');
  const vals  = datos.getDataRange().getValues();

  const obj = {};
  for (let i = 1; i < vals.length; i++) {
    if (vals[i][0]) obj[String(vals[i][0]).trim()] = vals[i][1];
  }

  // Campos derivados
  obj.tr_total = (obj.tr_cash || 0) + (obj.tr_etf || 0);
  obj.neto     = obj.tr_total + (obj.cobrar || 0) - (obj.toyota || 0) - (obj.sandrine_total || 0);

  // Construir array de gastos para las barras
  obj.gastos = [
    {label:'Sandrine',     amt: obj.gasto_sandrine || 0, color:'#2a78d6', max:600},
    {label:'Restauración', amt: obj.gasto_resto    || 0, color:'#eb6834', max:600},
    {label:'Gasolina',     amt: obj.gasto_gasolina || 0, color:'#eda100', max:300},
    {label:'Orange',       amt: obj.gasto_orange   || 0, color:'#1baf7a', max:200},
    {label:'Claude+IONOS', amt: obj.gasto_claude   || 0, color:'#6250d6', max:100},
    {label:'Seguros Lalux',amt: obj.gasto_seguros  || 0, color:'#888780', max:300},
    {label:'Multas',       amt: obj.gasto_multas   || 0, color:'#e34948', max:150},
    {label:'Cuba',         amt: obj.gasto_cuba     || 0, color:'#1baf7a', max:300},
  ];

  obj.updated_at = new Date().toISOString();

  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── POST: el widget puede enviar actualizaciones (futuro) ────────────────────
function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const ss   = SpreadsheetApp.getActiveSpreadsheet();
    const datos = ss.getSheetByName('Datos');
    const vals  = datos.getDataRange().getValues();
    const now   = new Date().toLocaleString('es-LU');

    for (let i = 1; i < vals.length; i++) {
      const key = String(vals[i][0]).trim();
      if (key && payload.hasOwnProperty(key)) {
        datos.getRange(i+1, 2).setValue(payload[key]);
        datos.getRange(i+1, 4).setValue(now);
      }
    }

    snapshotHistorial(ss);

    return ContentService
      .createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ok:false,error:err.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── TRIGGER: snapshot automático al editar columna B de Datos ────────────────
function onEdit(e) {
  if (e.range.getSheet().getName() === 'Datos' && e.range.getColumn() === 2) {
    snapshotHistorial(SpreadsheetApp.getActiveSpreadsheet());
  }
}

function snapshotHistorial(ss) {
  const datos = ss.getSheetByName('Datos');
  const hist  = ss.getSheetByName('Historial');
  const vals  = datos.getDataRange().getValues();

  const map = {};
  for (let i = 1; i < vals.length; i++) map[vals[i][0]] = vals[i][1];

  const tr_total = (map['tr_cash']||0) + (map['tr_etf']||0);
  const neto = tr_total + (map['cobrar']||0) - (map['toyota']||0) - (map['sandrine_total']||0);

  hist.appendRow([new Date(), tr_total, map['cobrar']||0, map['toyota']||0, map['sandrine_total']||0, neto]);
}