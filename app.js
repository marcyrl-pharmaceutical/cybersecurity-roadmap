/* Marcyrl Cybersecurity Roadmap — front-end (shared by index.html, section.html, admin.html)
 * Paste your Apps Script Web App URL below (the one that ends with /exec).
 */
const API_URL = 'https://script.google.com/macros/s/AKfycbxyGZcKitYU3a6eLalH6qjx3y_1A6q0bvacbWpTkeXue-flKu6rrK-iS9_4432LcFcP/exec';

/* ------------------------------------------------------------------ */
const PAGE = document.body.dataset.page;          // home | section | admin
const TOKEN_KEY = 'mr_token';
const LANG_KEY = 'mr_lang';

const UI = {
  ar: {
    loading: 'جارٍ التحميل...', login: 'تسجيل الدخول', username: 'اسم المستخدم', password: 'كلمة المرور',
    loginSub: 'لوحة مشاريع الأمن السيبراني — للمستخدمين المصرح لهم فقط', signIn: 'دخول',
    logout: 'تسجيل الخروج', changePw: 'تغيير كلمة المرور', adminPanel: 'لوحة الإدارة', print: 'طباعة',
    back: 'العودة للوحة الرئيسية', openPage: 'افتح الصفحة الكاملة', langBtn: 'English',
    noSections: 'لا توجد أقسام متاحة لحسابك حاليًا. تواصل مع مسؤول النظام.',
    done: 'مكتمل', progress: 'جارٍ', planned: 'مخطط', items: 'بند', docs: 'مستند',
    addItem: 'إضافة بند', addGroup: 'إضافة مجموعة', editGroup: 'تعديل المجموعة', deleteGroup: 'حذف المجموعة',
    edit: 'تعديل', del: 'حذف', up: 'لأعلى', down: 'لأسفل', save: 'حفظ', cancel: 'إلغاء', close: 'إغلاق', saving: 'جارٍ الحفظ...',
    confirmDelete: 'تأكيد الحذف؟ لا يمكن التراجع.', saved: 'تم الحفظ', deleted: 'تم الحذف',
    f_title_ar: 'العنوان (عربي)', f_title_en: 'العنوان (English)', f_sub_ar: 'سطر فرعي (عربي)', f_sub_en: 'سطر فرعي (English)',
    f_group: 'المجموعة', f_status: 'الحالة', f_badge_ar: 'نص الحالة المخصص (عربي) — اختياري', f_badge_en: 'نص الحالة المخصص (English) — اختياري',
    f_icon: 'الأيقونة (Font Awesome مثل fa-shield-halved)', f_progress: 'نسبة الإنجاز % (اختياري)',
    f_body_ar: 'التفاصيل (عربي)', f_body_en: 'التفاصيل (English)', f_desc_ar: 'وصف المجموعة (عربي)', f_desc_en: 'وصف المجموعة (English)',
    f_layout: 'شكل العرض', layout_list: 'بطاقات كاملة', layout_grid2: 'عمودين', layout_grid3: '3 أعمدة', layout_grid6: 'مربعات صغيرة',
    fmtHelp: 'التنسيق: سطر فاضي = فقرة جديدة · ‎- ‎بند نقطي · ‎### ‎عنوان صندوق · ‎## ‎عنوان · ‎! ‎ملاحظة بارزة · ‎# ‎أ | ب وسوم · ‎**نص** ‎عريض',
    newItem: 'بند جديد', editItem: 'تعديل البند', newGroup: 'مجموعة جديدة',
    // docs
    upload: 'رفع مستند HTML', addLink: 'إضافة رابط', search: 'بحث في المستندات...', all: 'الكل',
    f_file: 'ملف HTML', f_replaceFile: 'استبدال الملف (اختياري)', f_category: 'التصنيف', f_date: 'التاريخ', f_desc: 'وصف مختصر', f_url: 'الرابط (https://...)',
    openDoc: 'فتح', download: 'تحميل', external: 'رابط خارجي', noDocs: 'لا توجد مستندات بعد.', uploading: 'جارٍ الرفع...',
    editDoc: 'تعديل المستند',
    // admin
    tUsers: 'المستخدمون', tSections: 'الأقسام', tStatuses: 'الحالات', tSettings: 'إعدادات الصفحة الرئيسية', tLog: 'سجل النشاط',
    addUser: 'إضافة مستخدم', role: 'الدور', admin: 'مدير (Admin)', user: 'مستخدم', active: 'الحساب مفعّل', lastLogin: 'آخر دخول',
    perms: 'الصلاحيات على الأقسام', p_none: 'بدون', p_view: 'عرض فقط', p_edit: 'عرض وتعديل', adminAll: 'المدير له كل الصلاحيات تلقائيًا.',
    pwKeep: 'كلمة مرور جديدة (اتركها فارغة لعدم التغيير)', pwNew: 'كلمة المرور (8 أحرف على الأقل)',
    addSection: 'إضافة قسم', f_key: 'المعرّف (حروف إنجليزية صغيرة وأرقام و -)', f_type: 'نوع القسم', type_items: 'بنود ومشاريع', type_docs: 'مكتبة مستندات',
    f_color: 'اللون', f_secBadge_ar: 'شارة القسم (عربي)', f_secBadge_en: 'شارة القسم (English)',
    addStatus: 'إضافة حالة', f_label_ar: 'الاسم (عربي)', f_label_en: 'الاسم (English)', f_statusKey: 'المعرّف (مثل in_review)',
    statusHint: 'اللون بيحدد التصنيف في الصفحة الرئيسية: أخضر/سماوي/أزرق = مكتمل، رمادي = مخطط، غير ذلك = جارٍ.',
    oldPw: 'كلمة المرور الحالية', newPw: 'كلمة المرور الجديدة', newPw2: 'تأكيد كلمة المرور الجديدة', pwMismatch: 'كلمتا المرور غير متطابقتين',
    time: 'الوقت', action: 'الإجراء', details: 'التفاصيل', you: '(أنت)', viewerTag: 'عرض فقط',
    s_company: 'اسم الشركة', s_banner_tag: 'شارة البانر', s_banner_title: 'عنوان البانر', s_banner_desc: 'وصف البانر',
    s_status_label: 'عنوان الحالة العامة', s_status_value: 'الحالة العامة', s_launch_label: 'عنوان موعد الإطلاق', s_launch_value: 'موعد الإطلاق', s_footer: 'نص الفوتر',
    preparedBy: 'إعداد:',
  },
  en: {
    loading: 'Loading...', login: 'Sign in', username: 'Username', password: 'Password',
    loginSub: 'Cybersecurity Projects Dashboard — authorized users only', signIn: 'Sign in',
    logout: 'Sign out', changePw: 'Change password', adminPanel: 'Admin panel', print: 'Print',
    back: 'Back to dashboard', openPage: 'Open full page', langBtn: 'العربية',
    noSections: 'No sections are available for your account yet. Contact the administrator.',
    done: 'done', progress: 'in progress', planned: 'planned', items: 'items', docs: 'documents',
    addItem: 'Add item', addGroup: 'Add group', editGroup: 'Edit group', deleteGroup: 'Delete group',
    edit: 'Edit', del: 'Delete', up: 'Up', down: 'Down', save: 'Save', cancel: 'Cancel', close: 'Close', saving: 'Saving...',
    confirmDelete: 'Delete this? This cannot be undone.', saved: 'Saved', deleted: 'Deleted',
    f_title_ar: 'Title (Arabic)', f_title_en: 'Title (English)', f_sub_ar: 'Subtitle (Arabic)', f_sub_en: 'Subtitle (English)',
    f_group: 'Group', f_status: 'Status', f_badge_ar: 'Custom status text (Arabic) — optional', f_badge_en: 'Custom status text (English) — optional',
    f_icon: 'Icon (Font Awesome, e.g. fa-shield-halved)', f_progress: 'Progress % (optional)',
    f_body_ar: 'Details (Arabic)', f_body_en: 'Details (English)', f_desc_ar: 'Group description (Arabic)', f_desc_en: 'Group description (English)',
    f_layout: 'Layout', layout_list: 'Full cards', layout_grid2: '2 columns', layout_grid3: '3 columns', layout_grid6: 'Small tiles',
    fmtHelp: 'Formatting: blank line = new paragraph · "- " bullet · "### " boxed heading · "## " heading · "! " highlight · "# a | b" tags · **bold**',
    newItem: 'New item', editItem: 'Edit item', newGroup: 'New group',
    upload: 'Upload HTML document', addLink: 'Add link', search: 'Search documents...', all: 'All',
    f_file: 'HTML file', f_replaceFile: 'Replace file (optional)', f_category: 'Category', f_date: 'Date', f_desc: 'Short description', f_url: 'Link (https://...)',
    openDoc: 'Open', download: 'Download', external: 'External link', noDocs: 'No documents yet.', uploading: 'Uploading...',
    editDoc: 'Edit document',
    tUsers: 'Users', tSections: 'Sections', tStatuses: 'Statuses', tSettings: 'Home page settings', tLog: 'Activity log',
    addUser: 'Add user', role: 'Role', admin: 'Admin', user: 'User', active: 'Account active', lastLogin: 'Last login',
    perms: 'Section permissions', p_none: 'None', p_view: 'View only', p_edit: 'View & edit', adminAll: 'Admins automatically have full access.',
    pwKeep: 'New password (leave empty to keep)', pwNew: 'Password (min 8 characters)',
    addSection: 'Add section', f_key: 'Key (lowercase letters, digits, -)', f_type: 'Section type', type_items: 'Items & projects', type_docs: 'Document library',
    f_color: 'Color', f_secBadge_ar: 'Section badge (Arabic)', f_secBadge_en: 'Section badge (English)',
    addStatus: 'Add status', f_label_ar: 'Label (Arabic)', f_label_en: 'Label (English)', f_statusKey: 'Key (e.g. in_review)',
    statusHint: 'Color sets the home-page category: green/cyan/blue = done, grey = planned, anything else = in progress.',
    oldPw: 'Current password', newPw: 'New password', newPw2: 'Confirm new password', pwMismatch: 'Passwords do not match',
    time: 'Time', action: 'Action', details: 'Details', you: '(you)', viewerTag: 'View only',
    s_company: 'Company name', s_banner_tag: 'Banner tag', s_banner_title: 'Banner title', s_banner_desc: 'Banner description',
    s_status_label: 'Status label', s_status_value: 'Overall status', s_launch_label: 'Launch label', s_launch_value: 'Launch date', s_footer: 'Footer text',
    preparedBy: 'Prepared by:',
  }
};

const ERRORS = {
  ar: {
    BAD_LOGIN: 'اسم المستخدم أو كلمة المرور غير صحيحة.', LOCKED: 'تم إيقاف الدخول مؤقتًا بعد محاولات فاشلة. حاول بعد 15 دقيقة.',
    AUTH: 'انتهت الجلسة، سجّل الدخول مرة أخرى.', FORBIDDEN: 'ليس لديك صلاحية لهذا الإجراء.', NETWORK: 'تعذر الاتصال بالخادم. تحقق من الإنترنت.',
    NOT_CONFIGURED: 'لم يتم ضبط رابط الـ API في ملف app.js بعد.', WEAK_PASSWORD: 'كلمة المرور لازم تكون 8 أحرف على الأقل.',
    INVALID_USERNAME: 'اسم المستخدم: 3–32 حرف إنجليزي صغير أو أرقام أو . _ -', USER_EXISTS: 'اسم المستخدم موجود بالفعل.',
    LAST_ADMIN: 'لازم يفضل مدير واحد مفعّل على الأقل.', CANNOT_DELETE_SELF: 'لا يمكنك حذف حسابك.', GROUP_NOT_EMPTY: 'احذف أو انقل بنود المجموعة أولًا.',
    SECTION_NOT_EMPTY: 'احذف بنود القسم أولًا.', STATUS_IN_USE: 'الحالة مستخدمة في بنود حالية.', TITLE_REQUIRED: 'العنوان مطلوب.',
    FILE_TOO_LARGE: 'الملف أكبر من 20 ميجا.', EMPTY_FILE: 'الملف فارغ.', INVALID_KEY: 'المعرّف غير صالح.', KEY_EXISTS: 'المعرّف مستخدم بالفعل.',
    BUSY: 'الخادم مشغول، حاول مرة أخرى.', NOT_FOUND: 'العنصر غير موجود (ربما حُذف).', BAD_GROUP: 'اختر مجموعة صحيحة.',
    _: 'حدث خطأ غير متوقع.'
  },
  en: {
    BAD_LOGIN: 'Wrong username or password.', LOCKED: 'Sign-in is temporarily locked after failed attempts. Try again in 15 minutes.',
    AUTH: 'Your session expired. Please sign in again.', FORBIDDEN: 'You do not have permission for this action.', NETWORK: 'Cannot reach the server. Check your connection.',
    NOT_CONFIGURED: 'The API URL has not been set in app.js yet.', WEAK_PASSWORD: 'Password must be at least 8 characters.',
    INVALID_USERNAME: 'Username: 3–32 lowercase letters, digits, . _ -', USER_EXISTS: 'That username already exists.',
    LAST_ADMIN: 'At least one active admin must remain.', CANNOT_DELETE_SELF: 'You cannot delete your own account.', GROUP_NOT_EMPTY: 'Move or delete the group items first.',
    SECTION_NOT_EMPTY: 'Delete the section items first.', STATUS_IN_USE: 'This status is used by existing items.', TITLE_REQUIRED: 'Title is required.',
    FILE_TOO_LARGE: 'File is larger than 20 MB.', EMPTY_FILE: 'The file is empty.', INVALID_KEY: 'Invalid key.', KEY_EXISTS: 'That key already exists.',
    BUSY: 'Server is busy, try again.', NOT_FOUND: 'Item not found (it may have been deleted).', BAD_GROUP: 'Choose a valid group.',
    _: 'Unexpected error.'
  }
};

const COLORS = {
  emerald: { text: 'text-emerald-400', soft: 'bg-emerald-500/10', border: 'border-emerald-500/30', top: 'border-t-emerald-500', bar: 'from-emerald-500 to-teal-400', light: 'text-emerald-200' },
  cyan:    { text: 'text-cyan-400',    soft: 'bg-cyan-500/10',    border: 'border-cyan-500/30',    top: 'border-t-cyan-500',    bar: 'from-cyan-500 to-blue-500',    light: 'text-cyan-200' },
  amber:   { text: 'text-amber-400',   soft: 'bg-amber-500/10',   border: 'border-amber-500/30',   top: 'border-t-amber-500',   bar: 'from-amber-500 to-yellow-400', light: 'text-amber-200' },
  rose:    { text: 'text-rose-400',    soft: 'bg-rose-500/10',    border: 'border-rose-500/30',    top: 'border-t-rose-500',    bar: 'from-rose-500 to-pink-400',    light: 'text-rose-200' },
  purple:  { text: 'text-purple-400',  soft: 'bg-purple-500/10',  border: 'border-purple-500/30',  top: 'border-t-purple-500',  bar: 'from-purple-500 to-indigo-500', light: 'text-purple-200' },
  slate:   { text: 'text-slate-400',   soft: 'bg-slate-500/10',   border: 'border-slate-500/30',   top: 'border-t-slate-500',   bar: 'from-slate-500 to-slate-400',  light: 'text-slate-200' },
  blue:    { text: 'text-blue-400',    soft: 'bg-blue-500/10',    border: 'border-blue-500/30',    top: 'border-t-blue-500',    bar: 'from-blue-500 to-indigo-500',  light: 'text-blue-200' }
};
const COLOR_NAMES = Object.keys(COLORS);

/* ------------------------------ state ------------------------------ */
const S = { lang: 'ar', boot: null, statuses: {}, section: null };
try { S.lang = localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'ar'; } catch (e) {}

const t = k => (UI[S.lang][k] !== undefined ? UI[S.lang][k] : k);
const errText = code => (ERRORS[S.lang][code] || ERRORS[S.lang]._);
const $ = sel => document.querySelector(sel);

function getToken() { try { return sessionStorage.getItem(TOKEN_KEY) || ''; } catch (e) { return ''; } }
function setToken(v) { try { v ? sessionStorage.setItem(TOKEN_KEY, v) : sessionStorage.removeItem(TOKEN_KEY); } catch (e) {} }

function esc(s) {
  return String(s === undefined || s === null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
const safeIcon = v => (/^fa-[a-z0-9-]+$/.test(String(v || '')) ? v : '');
const pick = (o, f) => (S.lang === 'en' && o[f + '_en'] ? o[f + '_en'] : (o[f + '_ar'] || o[f + '_en'] || ''));
const pickS = (k) => { const st = S.boot ? S.boot.settings : {}; return S.lang === 'en' && st[k + '_en'] ? st[k + '_en'] : (st[k + '_ar'] || st[k + '_en'] || ''); };

/* ------------------------------ API ------------------------------ */
class ApiError extends Error { constructor(code) { super(code); this.code = code; } }

async function api(action, data) {
  if (!/^https:\/\/script\.google\.com\//.test(API_URL)) throw new ApiError('NOT_CONFIGURED');
  let res;
  try {
    res = await fetch(API_URL, { method: 'POST', body: JSON.stringify({ action, data: data || {}, token: getToken() }) });
  } catch (e) { throw new ApiError('NETWORK'); }
  let j;
  try { j = await res.json(); } catch (e) { throw new ApiError('NETWORK'); }
  if (!j.ok) {
    if (j.error === 'AUTH' && action !== 'login') {
      setToken('');
      if (PAGE !== 'home') { location.href = 'index.html'; }
      else { renderLogin(errText('AUTH')); }
    }
    throw new ApiError(j.error);
  }
  return j.data;
}

/* ------------------------------ markup renderer ------------------------------ */
function inline(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>'); }

function renderLines(lines, color) {
  const c = COLORS[color] || COLORS.cyan;
  let html = '', list = [];
  const flush = () => { if (list.length) { html += '<ul class="list-disc list-inside space-y-1">' + list.map(l => '<li>' + inline(l) + '</li>').join('') + '</ul>'; list = []; } };
  lines.forEach(l => {
    if (/^- /.test(l)) { list.push(l.slice(2)); return; }
    flush();
    if (/^# /.test(l)) html += '<div class="flex flex-wrap gap-2 my-1">' + l.slice(2).split('|').map(x => x.trim()).filter(Boolean).map(x => `<span class="px-2 py-1 bg-slate-800 border border-slate-700 rounded font-bold ${c.text} text-xs">${esc(x)}</span>`).join('') + '</div>';
    else if (/^! /.test(l)) html += `<div class="p-3 ${c.soft} border ${c.border} rounded-xl ${c.light} text-xs">${inline(l.slice(2))}</div>`;
    else if (l.trim()) html += '<p>' + inline(l) + '</p>';
  });
  flush();
  return html;
}

function md(text, color) {
  const c = COLORS[color] || COLORS.cyan;
  return String(text || '').replace(/\r/g, '').split(/\n\s*\n/).map(block => {
    const lines = block.split('\n').filter(l => l.trim() !== '');
    if (!lines.length) return '';
    if (/^### /.test(lines[0])) {
      const h = lines[0].slice(4).trim();
      return `<div class="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">${h ? `<h5 class="font-bold ${c.text} text-xs">${inline(h)}</h5>` : ''}${renderLines(lines.slice(1), color)}</div>`;
    }
    if (/^## /.test(lines[0])) return `<h5 class="font-bold text-white text-sm">${inline(lines[0].slice(3))}</h5>${renderLines(lines.slice(1), color)}`;
    return renderLines(lines, color);
  }).join('');
}

/* ------------------------------ shell ------------------------------ */
function applyLang() {
  document.documentElement.lang = S.lang;
  document.documentElement.dir = S.lang === 'ar' ? 'rtl' : 'ltr';
}

function toggleLang() {
  S.lang = S.lang === 'ar' ? 'en' : 'ar';
  try { localStorage.setItem(LANG_KEY, S.lang); } catch (e) {}
  applyLang();
  rerender();
}

let rerender = () => {};

function headerHtml() {
  const u = S.boot && S.boot.user;
  const company = S.boot ? pickS('company') : 'Marcyrl Pharmaceutical Industries';
  const sub = S.boot ? (S.boot.settings.company_sub || '') : 'Marcyrl Cybersecurity Project';
  return `
  <header class="sticky top-0 z-40 glass-panel border-b border-slate-800/80 px-4 lg:px-8 py-3.5 no-print">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
      <a href="index.html" class="flex items-center gap-3 min-w-0">
        <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-white text-xl shadow-lg shadow-cyan-500/20 shrink-0"><i class="fa-solid fa-shield-halved"></i></div>
        <div class="min-w-0">
          <h1 class="text-base sm:text-lg font-extrabold text-white leading-tight truncate">${esc(company)}</h1>
          <p class="text-[11px] text-cyan-400 font-semibold truncate">${esc(sub)}</p>
        </div>
      </a>
      <div class="flex items-center gap-2 flex-wrap">
        ${PAGE !== 'home' ? `<a href="index.html" class="btn-ghost"><i class="fa-solid fa-house"></i><span class="hidden sm:inline">${t('back')}</span></a>` : ''}
        ${u && PAGE !== 'admin' ? `<button onclick="window.print()" class="btn-ghost"><i class="fa-solid fa-print"></i><span class="hidden sm:inline">${t('print')}</span></button>` : ''}
        <button id="langBtn" class="btn-accent"><i class="fa-solid fa-globe"></i><span>${t('langBtn')}</span></button>
        ${u ? `
        <div class="relative">
          <button id="userBtn" class="btn-ghost"><i class="fa-solid fa-circle-user"></i><span>${esc(u.username)}</span><i class="fa-solid fa-chevron-down text-[10px]"></i></button>
          <div id="userMenu" class="hidden absolute end-0 mt-2 w-56 glass-panel rounded-xl p-1.5 shadow-2xl z-50">
            ${u.role === 'admin' ? `<a href="admin.html" class="menu-item"><i class="fa-solid fa-user-gear w-4"></i>${t('adminPanel')}</a>` : ''}
            <button id="chPwBtn" class="menu-item"><i class="fa-solid fa-key w-4"></i>${t('changePw')}</button>
            <button id="logoutBtn" class="menu-item text-rose-300"><i class="fa-solid fa-right-from-bracket w-4"></i>${t('logout')}</button>
          </div>
        </div>` : ''}
      </div>
    </div>
  </header>`;
}

function footerHtml() {
  const by = S.boot ? (S.boot.settings.prepared_by || '') : '';
  return `
  <footer class="glass-panel border-t border-slate-800/80 mt-12 py-6 px-4 lg:px-8 text-xs text-slate-400">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
      <p>${esc(S.boot ? pickS('footer') : '© Marcyrl Pharmaceutical Industries')}</p>
      ${by ? `<span>${t('preparedBy')} <strong class="text-slate-200">${esc(by)}</strong></span>` : ''}
    </div>
  </footer>`;
}

function mount(mainHtml) {
  document.getElementById('app').innerHTML = headerHtml() + `<main class="max-w-7xl w-full mx-auto px-4 lg:px-8 py-8 flex-1">${mainHtml}</main>` + footerHtml();
  const lb = $('#langBtn'); if (lb) lb.onclick = toggleLang;
  const ub = $('#userBtn');
  if (ub) {
    ub.onclick = e => { e.stopPropagation(); $('#userMenu').classList.toggle('hidden'); };
    $('#logoutBtn').onclick = async () => { try { await api('logout'); } catch (e) {} setToken(''); location.href = 'index.html'; };
    $('#chPwBtn').onclick = changePasswordDialog;
  }
}

function loadingScreen() {
  document.getElementById('app').innerHTML = `<div class="min-h-screen flex items-center justify-center text-slate-400 gap-3"><i class="fa-solid fa-circle-notch fa-spin text-cyan-400 text-2xl"></i><span>${t('loading')}</span></div>`;
}

function errorScreen(code) {
  mount(`<div class="glass-panel rounded-2xl p-8 text-center text-rose-300"><i class="fa-solid fa-triangle-exclamation text-3xl mb-3"></i><p>${esc(errText(code))}</p></div>`);
}

function toast(msg, bad) {
  const d = document.createElement('div');
  d.className = `fixed bottom-5 start-5 z-[80] px-4 py-2.5 rounded-xl text-sm font-bold shadow-2xl ${bad ? 'bg-rose-600 text-white' : 'bg-emerald-500 text-slate-950'}`;
  d.textContent = msg;
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 2600);
}

// custom status text is per-language only: never show the English text on the Arabic page
function customBadge(item) { return item['badge_' + S.lang] || ''; }

function badgeHtml(item, small) {
  const st = S.statuses[item.status];
  const color = st ? st.color : 'slate';
  const c = COLORS[color] || COLORS.slate;
  const text = customBadge(item) || (st ? pick(st, 'label') : '');
  if (!text) return '';
  return `<span class="ms-auto shrink-0 ${small ? 'text-[10px] px-2 py-0.5' : 'text-[11px] px-2.5 py-1'} rounded ${c.soft} ${c.text} font-bold border ${c.border}">${esc(text)}</span>`;
}

/* ------------------------------ modal forms ------------------------------ */
function openForm({ title, fields, submitLabel, onSubmit, wide }) {
  const wrap = document.createElement('div');
  wrap.className = 'fixed inset-0 z-[70] bg-black/75 backdrop-blur-sm flex items-start sm:items-center justify-center p-3 overflow-y-auto';
  const fieldHtml = f => {
    const id = 'f_' + f.name;
    const dir = f.dir ? `dir="${f.dir}"` : '';
    const lbl = f.label ? `<label for="${id}" class="block text-xs font-bold text-slate-300 mb-1">${esc(f.label)}</label>` : '';
    const hint = f.hint ? `<p class="text-[11px] text-slate-500 mt-1">${esc(f.hint)}</p>` : '';
    const v = f.value === undefined || f.value === null ? '' : f.value;
    if (f.type === 'textarea') return `<div class="${f.full ? 'sm:col-span-2' : ''}">${lbl}<textarea id="${id}" name="${f.name}" rows="${f.rows || 5}" ${dir} class="inp font-mono text-[13px] leading-relaxed">${esc(v)}</textarea>${hint}</div>`;
    if (f.type === 'select') return `<div class="${f.full ? 'sm:col-span-2' : ''}">${lbl}<select id="${id}" name="${f.name}" class="inp">${f.options.map(o => `<option value="${esc(o.value)}" ${String(o.value) === String(v) ? 'selected' : ''}>${esc(o.label)}</option>`).join('')}</select>${hint}</div>`;
    if (f.type === 'checkbox') return `<div class="${f.full ? 'sm:col-span-2' : ''} flex items-center gap-2 pt-5"><input id="${id}" name="${f.name}" type="checkbox" ${v ? 'checked' : ''} class="w-4 h-4 accent-cyan-500"><label for="${id}" class="text-sm text-slate-300">${esc(f.label)}</label></div>`;
    if (f.type === 'file') return `<div class="sm:col-span-2">${lbl}<input id="${id}" name="${f.name}" type="file" accept="${f.accept || ''}" class="inp file:me-3 file:rounded-lg file:border-0 file:bg-cyan-600 file:text-white file:px-3 file:py-1">${hint}</div>`;
    if (f.type === 'html') return `<div class="sm:col-span-2">${f.html}</div>`;
    return `<div class="${f.full ? 'sm:col-span-2' : ''}">${lbl}<input id="${id}" name="${f.name}" type="${f.type || 'text'}" value="${esc(v)}" ${dir} ${f.readonly ? 'readonly' : ''} ${f.autocomplete ? `autocomplete="${f.autocomplete}"` : ''} class="inp ${f.readonly ? 'opacity-60' : ''}">${hint}</div>`;
  };
  wrap.innerHTML = `
    <form class="glass-panel rounded-2xl w-full ${wide ? 'max-w-4xl' : 'max-w-xl'} my-6 shadow-2xl" novalidate>
      <div class="flex items-center justify-between px-5 py-4 border-b border-slate-800">
        <h3 class="font-bold text-white">${esc(title)}</h3>
        <button type="button" data-x class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">${fields.map(fieldHtml).join('')}</div>
      <div class="px-5 pb-5 flex items-center gap-3">
        <button type="submit" class="btn-primary">${esc(submitLabel || t('save'))}</button>
        <button type="button" data-x class="btn-ghost">${t('cancel')}</button>
        <p data-err class="text-rose-400 text-sm"></p>
      </div>
    </form>`;
  document.body.appendChild(wrap);
  const form = wrap.querySelector('form');
  const close = () => wrap.remove();
  wrap.querySelectorAll('[data-x]').forEach(b => (b.onclick = close));
  const first = form.querySelector('input:not([readonly]):not([type=checkbox]),textarea,select');
  if (first) first.focus();
  form.onsubmit = async e => {
    e.preventDefault();
    const vals = {};
    fields.forEach(f => {
      const elx = form.elements[f.name];
      if (!elx) return;
      if (f.type === 'checkbox') vals[f.name] = elx.checked;
      else if (f.type === 'file') vals[f.name] = elx.files && elx.files[0];
      else vals[f.name] = elx.value;
    });
    const btn = form.querySelector('[type=submit]');
    const err = form.querySelector('[data-err]');
    btn.disabled = true; const old = btn.textContent; btn.textContent = t('saving'); err.textContent = '';
    try {
      await onSubmit(vals, form);
      close();
    } catch (ex) {
      err.textContent = ex.code ? errText(ex.code) : (ex.message || errText('_'));
      btn.disabled = false; btn.textContent = old;
    }
  };
  return { wrap, form, close };
}

function confirmDel() { return window.confirm(t('confirmDelete')); }

function changePasswordDialog() {
  openForm({
    title: t('changePw'),
    fields: [
      { name: 'old', label: t('oldPw'), type: 'password', full: true, autocomplete: 'current-password' },
      { name: 'n1', label: t('newPw'), type: 'password', autocomplete: 'new-password' },
      { name: 'n2', label: t('newPw2'), type: 'password', autocomplete: 'new-password' }
    ],
    onSubmit: async v => {
      if (v.n1 !== v.n2) throw new Error(t('pwMismatch'));
      await api('changePassword', { oldPassword: v.old, newPassword: v.n1 });
      toast(t('saved'));
    }
  });
}

/* ------------------------------ login ------------------------------ */
function renderLogin(message) {
  rerender = () => renderLogin();
  document.getElementById('app').innerHTML = `
  <div class="min-h-screen flex flex-col">
    <div class="flex justify-end p-4"><button id="langBtn" class="btn-accent"><i class="fa-solid fa-globe"></i><span>${t('langBtn')}</span></button></div>
    <div class="flex-1 flex items-center justify-center p-4">
      <form id="loginForm" class="glass-panel rounded-2xl p-7 w-full max-w-sm shadow-2xl" autocomplete="on">
        <div class="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-white text-2xl shadow-lg shadow-cyan-500/30 mb-4"><i class="fa-solid fa-shield-halved"></i></div>
        <h1 class="text-center text-xl font-extrabold text-white">${t('login')}</h1>
        <p class="text-center text-xs text-slate-400 mt-1 mb-6">${t('loginSub')}</p>
        <label class="block text-xs font-bold text-slate-300 mb-1" for="lu">${t('username')}</label>
        <input id="lu" name="username" dir="ltr" autocomplete="username" autocapitalize="none" class="inp mb-4" required>
        <label class="block text-xs font-bold text-slate-300 mb-1" for="lp">${t('password')}</label>
        <input id="lp" name="password" type="password" dir="ltr" autocomplete="current-password" class="inp mb-5" required>
        <button class="btn-primary w-full justify-center" type="submit"><i class="fa-solid fa-right-to-bracket"></i>${t('signIn')}</button>
        <p id="loginErr" class="text-rose-400 text-sm text-center mt-4 min-h-[1.25rem]">${esc(message || '')}</p>
      </form>
    </div>
  </div>`;
  $('#langBtn').onclick = toggleLang;
  $('#lu').focus();
  $('#loginForm').onsubmit = async e => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type=submit]');
    btn.disabled = true;
    $('#loginErr').textContent = '';
    try {
      const r = await api('login', { username: $('#lu').value, password: $('#lp').value });
      setToken(r.token);
      startHome();
    } catch (ex) {
      $('#loginErr').textContent = errText(ex.code);
      btn.disabled = false;
    }
  };
}

/* ------------------------------ boot ------------------------------ */
async function boot() {
  applyLang();
  if (!getToken()) {
    if (PAGE === 'home') return renderLogin();
    location.href = 'index.html'; return;
  }
  loadingScreen();
  try {
    S.boot = await api('bootstrap');
    S.statuses = {};
    S.boot.statuses.forEach(s => (S.statuses[s.key] = s));
  } catch (e) {
    if (e.code !== 'AUTH') errorScreen(e.code);
    return false;
  }
  return true;
}

/* ------------------------------ HOME ------------------------------ */
async function startHome() {
  if (!(await boot())) return;
  rerender = renderHome;
  renderHome();
}

function renderHome() {
  const st = S.boot.settings;
  const secs = S.boot.sections;
  const tiles = secs.map((s, i) => {
    const c = COLORS[s.color] || COLORS.cyan;
    const counts = s.type === 'docs'
      ? `<span class="text-slate-300"><b class="text-white">${s.counts.total}</b> ${t('docs')}</span>`
      : `<span class="text-emerald-400"><b>${s.counts.done}</b> ${t('done')}</span><span class="text-amber-400"><b>${s.counts.progress}</b> ${t('progress')}</span><span class="text-slate-400"><b>${s.counts.planned}</b> ${t('planned')}</span>`;
    return `
    <a href="section.html?s=${encodeURIComponent(s.key)}" class="nav-card glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col gap-3 transition">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-xl ${c.soft} ${c.text} flex items-center justify-center text-lg border ${c.border}"><i class="fa-solid ${safeIcon(s.icon) || 'fa-folder'}"></i></div>
        <span class="text-xs font-black text-slate-500">${String(i + 1).padStart(2, '0')}</span>
        ${pick(s, 'badge') ? `<span class="ms-auto px-3 py-1 rounded-full text-xs font-bold ${c.soft} ${c.text} border ${c.border}">${esc(pick(s, 'badge'))}</span>` : ''}
        ${s.level === 'view' && S.boot.user.role !== 'admin' ? `<span class="${pick(s, 'badge') ? '' : 'ms-auto'} text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">${t('viewerTag')}</span>` : ''}
      </div>
      <h3 class="text-lg font-extrabold text-white leading-snug">${esc(pick(s, 'title'))}</h3>
      <p class="text-sm text-slate-400 leading-relaxed flex-1">${esc(pick(s, 'sub'))}</p>
      <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs pt-3 border-t border-slate-800">${counts}</div>
      <span class="nav-arrow text-xs font-bold ${c.text} transition-transform">${t('openPage')} <i class="fa-solid ${S.lang === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right'}"></i></span>
    </a>`;
  }).join('');

  mount(`
    <section class="relative overflow-hidden rounded-2xl glass-panel p-6 lg:p-8 mb-8">
      <div class="absolute -top-24 -end-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="relative flex flex-col lg:flex-row lg:items-end gap-6">
        <div class="flex-1">
          ${pickS('banner_tag') ? `<span class="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 mb-3"><i class="fa-solid fa-chess"></i>${esc(pickS('banner_tag'))}</span>` : ''}
          <h2 class="text-2xl lg:text-3xl font-black text-white mb-2 leading-tight">${esc(pickS('banner_title'))}</h2>
          <p class="text-sm text-slate-400 max-w-3xl leading-relaxed">${esc(pickS('banner_desc'))}</p>
        </div>
        <div class="flex gap-3 shrink-0">
          ${pickS('status_value') ? `<div class="glass-panel rounded-xl px-4 py-3"><p class="text-[10px] text-slate-400 uppercase tracking-wider">${esc(pickS('status_label'))}</p><p class="text-emerald-400 font-bold text-xs mt-0.5">${esc(pickS('status_value'))}</p></div>` : ''}
          ${pickS('launch_value') ? `<div class="glass-panel rounded-xl px-4 py-3"><p class="text-[10px] text-slate-400 uppercase tracking-wider">${esc(pickS('launch_label'))}</p><p class="text-cyan-400 font-bold text-xs mt-0.5">${esc(pickS('launch_value'))}</p></div>` : ''}
        </div>
      </div>
    </section>
    ${secs.length ? `<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-${Math.min(secs.length, 4)} gap-6">${tiles}</div>`
      : `<div class="glass-panel rounded-2xl p-8 text-center text-slate-400">${t('noSections')}</div>`}
  `);
}

/* ------------------------------ SECTION ------------------------------ */
async function startSection() {
  const key = new URLSearchParams(location.search).get('s') || '';
  if (!(await boot())) return;
  try {
    S.section = await api('section', { key });
  } catch (e) { if (e.code !== 'AUTH') errorScreen(e.code); return; }
  rerender = renderSection;
  renderSection();
}

async function reloadSection() {
  S.section = await api('section', { key: S.section.section.key });
  renderSection();
}

function editBtns(kind, id, extra) {
  return `<div class="edit-bar no-print flex items-center gap-1 shrink-0">
    ${extra || ''}
    <button data-act="up" data-kind="${kind}" data-id="${esc(id)}" title="${t('up')}" class="ebtn"><i class="fa-solid fa-arrow-up"></i></button>
    <button data-act="down" data-kind="${kind}" data-id="${esc(id)}" title="${t('down')}" class="ebtn"><i class="fa-solid fa-arrow-down"></i></button>
    <button data-act="edit" data-kind="${kind}" data-id="${esc(id)}" title="${t('edit')}" class="ebtn"><i class="fa-solid fa-pen"></i></button>
    <button data-act="del" data-kind="${kind}" data-id="${esc(id)}" title="${t('del')}" class="ebtn hover:!text-rose-400"><i class="fa-solid fa-trash"></i></button>
  </div>`;
}

function itemColor(item) { const st = S.statuses[item.status]; return st ? st.color : 'cyan'; }

function itemCard(item, layout, canEdit) {
  const color = itemColor(item);
  const c = COLORS[color] || COLORS.cyan;
  const icon = safeIcon(item.icon) || 'fa-circle-dot';
  const eb = canEdit ? editBtns('item', item.id) : '';
  const body = md(pick(item, 'body'), color);
  const progress = item.progress !== '' && item.progress !== undefined && String(item.progress) !== ''
    ? `<div class="flex items-center gap-2"><div class="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden"><div class="bg-gradient-to-r ${c.bar} h-2 rounded-full" style="width:${Math.min(100, Number(item.progress) || 0)}%"></div></div><span class="text-xs font-bold ${c.text}">${Number(item.progress) || 0}%</span></div>` : '';
  if (layout === 'grid6') {
    return `<div class="relative p-3 rounded-xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center gap-1">
      <i class="fa-solid ${icon} ${c.text} text-lg"></i>
      <p class="text-xs font-bold text-slate-200">${esc(pick(item, 'title'))}</p>
      <p class="text-[10px] ${c.text} font-semibold">${esc(customBadge(item) || (S.statuses[item.status] ? pick(S.statuses[item.status], 'label') : ''))}</p>
      ${canEdit ? `<div class="mt-1">${editBtns('item', item.id)}</div>` : ''}
    </div>`;
  }
  if (layout === 'grid2' || layout === 'grid3') {
    return `<div class="glass-panel rounded-xl p-5 border-t-4 ${c.top} flex flex-col gap-2">
      <div class="flex items-center gap-2"><i class="fa-solid ${icon} ${c.text} text-lg"></i>${badgeHtml(item, true)}</div>
      <h4 class="text-sm font-bold text-white">${esc(pick(item, 'title'))}</h4>
      ${pick(item, 'sub') ? `<p class="text-xs ${c.text}">${esc(pick(item, 'sub'))}</p>` : ''}
      ${progress}
      <div class="text-xs text-slate-300 leading-relaxed space-y-2">${body}</div>
      ${canEdit ? `<div class="pt-2 mt-auto border-t border-slate-800 flex justify-end">${eb}</div>` : ''}
    </div>`;
  }
  return `<div class="glass-panel rounded-2xl p-6">
    <div class="flex flex-wrap items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-xl ${c.soft} ${c.text} flex items-center justify-center text-lg shrink-0"><i class="fa-solid ${icon}"></i></div>
      <div class="min-w-0 flex-1">
        <h3 class="text-base sm:text-lg font-bold text-white">${esc(pick(item, 'title'))}</h3>
        ${pick(item, 'sub') ? `<p class="text-xs ${c.text}">${esc(pick(item, 'sub'))}</p>` : ''}
      </div>
      ${badgeHtml(item)}
    </div>
    <div class="space-y-3 text-sm text-slate-300 leading-relaxed">${progress}${body}</div>
    ${canEdit ? `<div class="pt-3 mt-4 border-t border-slate-800 flex justify-end">${eb}</div>` : ''}
  </div>`;
}

const GRID = { list: 'space-y-5', grid2: 'grid grid-cols-1 lg:grid-cols-2 gap-5', grid3: 'grid grid-cols-1 md:grid-cols-3 gap-4', grid6: 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3' };

function renderSection() {
  const { section, groups, items, canEdit } = S.section;
  const c = COLORS[section.color] || COLORS.cyan;
  const idx = S.boot.sections.findIndex(s => s.key === section.key);
  const head = `
    <div class="flex items-center gap-3 mb-2">
      <div class="w-10 h-10 rounded-xl ${c.soft} ${c.text} flex items-center justify-center text-lg font-bold border ${c.border}">${idx >= 0 ? String(idx + 1).padStart(2, '0') : `<i class="fa-solid ${safeIcon(section.icon)}"></i>`}</div>
      ${pick(section, 'badge') ? `<span class="px-3 py-1 rounded-full text-xs font-bold ${c.soft} ${c.text} border ${c.border}">${esc(pick(section, 'badge'))}</span>` : ''}
    </div>
    <h2 class="text-2xl font-extrabold text-white mb-2">${esc(pick(section, 'title'))}</h2>
    <p class="text-sm text-slate-400 mb-8">${esc(pick(section, 'sub'))}</p>`;
  document.title = pick(section, 'title') + ' — Marcyrl';

  if (section.type === 'docs') { mount(`<div class="max-w-6xl mx-auto">${head}${docsHtml(items, canEdit)}</div>`); wireDocs(); return; }

  const groupsHtml = groups.map(g => {
    const gi = items.filter(i => i.group === g.id);
    const titleColor = gi.length ? (COLORS[itemColor(gi[0])] || c).text : c.text;
    return `<section class="mb-10">
      ${(pick(g, 'title') || canEdit) ? `<div class="flex items-center gap-3 mb-3">
        <h3 class="text-sm font-bold ${titleColor} uppercase tracking-wider flex-1">${esc(pick(g, 'title')) || (canEdit ? '<span class="text-slate-600 normal-case">—</span>' : '')}</h3>
        ${canEdit ? editBtns('group', g.id, `<button data-act="add" data-kind="item" data-id="${esc(g.id)}" class="ebtn !w-auto px-2 text-cyan-400"><i class="fa-solid fa-plus"></i> ${t('addItem')}</button>`) : ''}
      </div>` : ''}
      ${pick(g, 'desc') ? `<div class="glass-panel rounded-xl p-4 mb-4 text-sm text-slate-300 space-y-3">${md(pick(g, 'desc'), section.color)}</div>` : ''}
      <div class="${GRID[g.layout] || GRID.list}">${gi.map(i => itemCard(i, g.layout, canEdit)).join('')}</div>
    </section>`;
  }).join('');

  mount(`<div class="max-w-6xl mx-auto">${head}${groupsHtml}
    ${canEdit ? `<button data-act="add" data-kind="group" class="btn-ghost no-print"><i class="fa-solid fa-layer-group"></i>${t('addGroup')}</button>` : ''}
  </div>`);
  wireEdit();
}

function wireEdit() {
  document.querySelectorAll('[data-act]').forEach(b => {
    b.onclick = async () => {
      const { act, kind, id } = b.dataset;
      try {
        if (act === 'add' && kind === 'item') return itemDialog(null, id);
        if (act === 'add' && kind === 'group') return groupDialog(null);
        if (act === 'edit' && kind === 'item') return itemDialog(S.section.items.find(i => i.id === id));
        if (act === 'edit' && kind === 'group') return groupDialog(S.section.groups.find(g => g.id === id));
        if (act === 'edit' && kind === 'doc') return docDialog(S.section.items.find(i => i.id === id));
        if (act === 'up' || act === 'down') {
          b.disabled = true;
          await api(kind === 'group' ? 'moveGroup' : 'moveItem', { id, dir: act });
          return reloadSection();
        }
        if (act === 'del') {
          if (!confirmDel()) return;
          b.disabled = true;
          await api(kind === 'group' ? 'deleteGroup' : 'deleteItem', { id });
          toast(t('deleted'));
          return reloadSection();
        }
      } catch (e) { b.disabled = false; toast(errText(e.code), true); }
    };
  });
}

function statusOptions() {
  return [{ value: '', label: '—' }].concat(S.boot.statuses.map(s => ({ value: s.key, label: pick(s, 'label') })));
}

function itemDialog(item, groupId) {
  const it = item || { group: groupId, status: '', icon: '' };
  const f = openForm({
    title: item ? t('editItem') : t('newItem'), wide: true,
    fields: [
      { name: 'title_ar', label: t('f_title_ar'), value: it.title_ar, dir: 'rtl' },
      { name: 'title_en', label: t('f_title_en'), value: it.title_en, dir: 'ltr' },
      { name: 'sub_ar', label: t('f_sub_ar'), value: it.sub_ar, dir: 'rtl' },
      { name: 'sub_en', label: t('f_sub_en'), value: it.sub_en, dir: 'ltr' },
      { name: 'group', label: t('f_group'), type: 'select', value: it.group, options: S.section.groups.map(g => ({ value: g.id, label: pick(g, 'title') || g.id })) },
      { name: 'status', label: t('f_status'), type: 'select', value: it.status, options: statusOptions() },
      { name: 'badge_ar', label: t('f_badge_ar'), value: it.badge_ar, dir: 'rtl' },
      { name: 'badge_en', label: t('f_badge_en'), value: it.badge_en, dir: 'ltr' },
      { name: 'icon', label: t('f_icon'), value: it.icon, dir: 'ltr', hint: 'fontawesome.com/icons' },
      { name: 'progress', label: t('f_progress'), type: 'number', value: it.progress },
      { name: 'body_ar', label: t('f_body_ar'), type: 'textarea', rows: 12, value: it.body_ar, dir: 'rtl' },
      { name: 'body_en', label: t('f_body_en'), type: 'textarea', rows: 12, value: it.body_en, dir: 'ltr' },
      { name: 'help', type: 'html', html: `<p class="text-[11px] text-slate-500 leading-relaxed">${esc(t('fmtHelp'))}</p>` }
    ],
    onSubmit: async v => {
      delete v.help;
      await api('saveItem', { item: Object.assign({}, v, { id: item ? item.id : '', section: S.section.section.key }) });
      toast(t('saved'));
      await reloadSection();
    }
  });
  // a custom status text belongs to the old status: clear it when the status changes
  f.form.elements.status.onchange = () => { f.form.elements.badge_ar.value = ''; f.form.elements.badge_en.value = ''; };
}

function groupDialog(group) {
  const g = group || { layout: 'list' };
  openForm({
    title: group ? t('editGroup') : t('newGroup'), wide: true,
    fields: [
      { name: 'title_ar', label: t('f_title_ar'), value: g.title_ar, dir: 'rtl' },
      { name: 'title_en', label: t('f_title_en'), value: g.title_en, dir: 'ltr' },
      { name: 'layout', label: t('f_layout'), type: 'select', value: g.layout, full: true, options: ['list', 'grid2', 'grid3', 'grid6'].map(l => ({ value: l, label: t('layout_' + l) })) },
      { name: 'desc_ar', label: t('f_desc_ar'), type: 'textarea', value: g.desc_ar, dir: 'rtl' },
      { name: 'desc_en', label: t('f_desc_en'), type: 'textarea', value: g.desc_en, dir: 'ltr' }
    ],
    onSubmit: async v => {
      await api('saveGroup', { group: Object.assign({}, v, { id: group ? group.id : '', section: S.section.section.key }) });
      toast(t('saved'));
      await reloadSection();
    }
  });
}

/* ------------------------------ DOCS ------------------------------ */
const DOCS_UI = { q: '', cat: '' };

function docsHtml(items, canEdit) {
  const cats = [...new Set(items.map(i => i.category).filter(Boolean))];
  return `
  <div class="flex flex-wrap items-center gap-3 mb-5 no-print">
    <div class="relative flex-1 min-w-[220px]">
      <i class="fa-solid fa-magnifying-glass absolute top-1/2 -translate-y-1/2 start-3 text-slate-500 text-sm"></i>
      <input id="docQ" value="${esc(DOCS_UI.q)}" placeholder="${t('search')}" class="inp" style="padding-inline-start:2.25rem">
    </div>
    ${canEdit ? `<button id="upBtn" class="btn-primary"><i class="fa-solid fa-file-arrow-up"></i>${t('upload')}</button>
    <button id="linkBtn" class="btn-ghost"><i class="fa-solid fa-link"></i>${t('addLink')}</button>` : ''}
  </div>
  <div id="docCats" class="flex flex-wrap gap-2 mb-5 no-print">
    ${['', ...cats].map(cat => `<button data-cat="${esc(cat)}" class="chip ${DOCS_UI.cat === cat ? 'chip-on' : ''}">${esc(cat || t('all'))}</button>`).join('')}
  </div>
  <div id="docGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>`;
}

function renderDocGrid() {
  const { items, canEdit } = S.section;
  const q = DOCS_UI.q.trim().toLowerCase();
  const list = items.filter(i => (!DOCS_UI.cat || i.category === DOCS_UI.cat) &&
    (!q || [i.title_ar, i.title_en, i.sub_ar, i.sub_en, i.category].join(' ').toLowerCase().includes(q)));
  $('#docGrid').innerHTML = list.length ? list.map(d => `
    <div class="glass-panel glass-panel-hover rounded-2xl p-5 flex flex-col gap-2 transition">
      <div class="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
        ${d.category ? `<span class="px-2 py-0.5 rounded border border-blue-500/30 text-blue-300">${esc(d.category)}</span>` : ''}
        ${d.url ? `<span class="px-2 py-0.5 rounded border border-amber-500/30 text-amber-300">${t('external')}</span>` : ''}
        ${d.doc_date ? `<span>${esc(d.doc_date)}</span>` : ''}
      </div>
      <h4 class="font-bold text-white leading-snug">${esc(pick(d, 'title'))}</h4>
      <p class="text-xs text-slate-400 leading-relaxed flex-1">${esc(pick(d, 'sub'))}</p>
      <div class="flex items-center gap-2 pt-3 border-t border-slate-800">
        <button data-open="${esc(d.id)}" class="btn-primary !py-1.5 !text-xs"><i class="fa-solid ${d.url ? 'fa-arrow-up-right-from-square' : 'fa-book-open'}"></i>${t('openDoc')}</button>
        ${canEdit ? `<span class="ms-auto">${editBtns('doc', d.id)}</span>` : ''}
      </div>
    </div>`).join('') : `<div class="glass-panel rounded-2xl p-8 text-center text-slate-400 sm:col-span-2 lg:col-span-3">${t('noDocs')}</div>`;
  $('#docGrid').querySelectorAll('[data-open]').forEach(b => (b.onclick = () => openDoc(b.dataset.open)));
  wireEdit();
  // the doc edit button uses kind "doc"; up/down/delete work like items
  $('#docGrid').querySelectorAll('[data-kind="doc"]').forEach(b => {
    if (b.dataset.act !== 'edit') b.dataset.kind = 'item';
  });
}

function wireDocs() {
  renderDocGrid();
  $('#docQ').oninput = e => { DOCS_UI.q = e.target.value; renderDocGrid(); };
  document.querySelectorAll('#docCats [data-cat]').forEach(b => (b.onclick = () => {
    DOCS_UI.cat = b.dataset.cat;
    document.querySelectorAll('#docCats [data-cat]').forEach(x => x.classList.toggle('chip-on', x.dataset.cat === DOCS_UI.cat));
    renderDocGrid();
  }));
  const ub = $('#upBtn'); if (ub) ub.onclick = () => docDialog(null, 'file');
  const lb = $('#linkBtn'); if (lb) lb.onclick = () => docDialog(null, 'link');
}

function readFileText(file) {
  return new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = () => rej(new Error('read')); r.readAsText(file, 'UTF-8'); });
}

function docDialog(doc, mode) {
  const isLink = doc ? !!doc.url : mode === 'link';
  const d = doc || {};
  const fields = [];
  if (isLink) fields.push({ name: 'url', label: t('f_url'), value: d.url, dir: 'ltr', full: true });
  else fields.push({ name: 'file', label: doc ? t('f_replaceFile') : t('f_file'), type: 'file', accept: '.html,.htm,text/html' });
  fields.push(
    { name: 'title_ar', label: t('f_title_ar'), value: d.title_ar, dir: 'rtl' },
    { name: 'title_en', label: t('f_title_en'), value: d.title_en, dir: 'ltr' },
    { name: 'category', label: t('f_category'), value: d.category },
    { name: 'doc_date', label: t('f_date'), value: d.doc_date },
    { name: 'sub_ar', label: t('f_desc') + ' (AR)', type: 'textarea', rows: 3, value: d.sub_ar, dir: 'rtl' },
    { name: 'sub_en', label: t('f_desc') + ' (EN)', type: 'textarea', rows: 3, value: d.sub_en, dir: 'ltr' }
  );
  const f = openForm({
    title: doc ? t('editDoc') : (isLink ? t('addLink') : t('upload')), wide: true, fields,
    submitLabel: isLink || doc ? t('save') : t('upload'),
    onSubmit: async v => {
      const item = { id: doc ? doc.id : '', section: S.section.section.key, group: doc ? doc.group : (S.section.groups[0] ? S.section.groups[0].id : ''),
        title_ar: v.title_ar, title_en: v.title_en, category: v.category, doc_date: v.doc_date, sub_ar: v.sub_ar, sub_en: v.sub_en, status: '' };
      if (isLink) {
        if (!/^https:\/\//i.test(v.url || '')) throw new Error(t('f_url'));
        item.url = v.url;
        await api('saveItem', { item });
      } else if (v.file) {
        if (v.file.size > 20 * 1024 * 1024) throw new ApiError('FILE_TOO_LARGE');
        const content = await readFileText(v.file);
        if (!item.title_ar && !item.title_en) {
          const m = content.match(/<title[^>]*>([^<]{1,200})<\/title>/i);
          item.title_en = m ? m[1].trim() : v.file.name.replace(/\.html?$/i, '');
        }
        await api('uploadDoc', { item, fileName: v.file.name, content });
      } else if (doc) {
        item.url = '';
        await api('saveItem', { item });
      } else throw new ApiError('EMPTY_FILE');
      toast(t('saved'));
      await reloadSection();
    }
  });
  // prefill title from the chosen file
  const fileInput = f.form.elements.file;
  if (fileInput) fileInput.onchange = async () => {
    const file = fileInput.files[0];
    if (!file || f.form.elements.title_en.value || f.form.elements.title_ar.value) return;
    try {
      const txt = (await readFileText(file)).slice(0, 20000);
      const m = txt.match(/<title[^>]*>([^<]{1,200})<\/title>/i);
      f.form.elements.title_en.value = m ? m[1].trim() : file.name.replace(/\.html?$/i, '');
    } catch (e) {}
  };
}

async function openDoc(id) {
  const d = S.section.items.find(i => i.id === id);
  if (!d) return;
  if (d.url) { window.open(d.url, '_blank', 'noopener'); return; }
  const ov = document.createElement('div');
  ov.className = 'fixed inset-0 z-[75] bg-slate-950 flex flex-col';
  ov.innerHTML = `
    <div class="flex items-center gap-3 px-4 py-2.5 border-b border-slate-800 bg-slate-900">
      <button data-x class="btn-ghost"><i class="fa-solid ${S.lang === 'ar' ? 'fa-arrow-right' : 'fa-arrow-left'}"></i>${t('close')}</button>
      <h3 class="font-bold text-white truncate flex-1">${esc(pick(d, 'title'))}</h3>
      <button data-dl class="btn-ghost hidden"><i class="fa-solid fa-download"></i><span class="hidden sm:inline">${t('download')}</span></button>
    </div>
    <div data-body class="flex-1 relative bg-white">
      <div data-ld class="absolute inset-0 flex items-center justify-center gap-3 text-slate-500 bg-slate-950"><i class="fa-solid fa-circle-notch fa-spin text-cyan-400 text-2xl"></i>${t('loading')}</div>
    </div>`;
  document.body.appendChild(ov);
  document.body.style.overflow = 'hidden';
  const close = () => { ov.remove(); document.body.style.overflow = ''; document.removeEventListener('keydown', onKey); };
  const onKey = e => { if (e.key === 'Escape') close(); };
  document.addEventListener('keydown', onKey);
  ov.querySelector('[data-x]').onclick = close;
  try {
    const r = await api('getDoc', { id });
    const frame = document.createElement('iframe');
    // sandboxed: the document can run its own scripts, but cannot read this page or your session
    frame.setAttribute('sandbox', 'allow-scripts allow-popups allow-popups-to-escape-sandbox allow-modals allow-downloads');
    frame.setAttribute('referrerpolicy', 'no-referrer');
    frame.className = 'absolute inset-0 w-full h-full border-0';
    frame.srcdoc = r.html;
    ov.querySelector('[data-body]').appendChild(frame);
    ov.querySelector('[data-ld]').remove();
    const dl = ov.querySelector('[data-dl]');
    dl.classList.remove('hidden');
    dl.onclick = () => {
      const url = URL.createObjectURL(new Blob([r.html], { type: 'text/html' }));
      const a = document.createElement('a'); a.href = url; a.download = d.file_name || 'document.html'; a.click();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
    };
  } catch (e) {
    ov.querySelector('[data-ld]').innerHTML = `<span class="text-rose-400">${esc(errText(e.code))}</span>`;
  }
}

/* ------------------------------ ADMIN ------------------------------ */
const ADMIN = { tab: 'users', users: [], log: [] };

async function startAdmin() {
  if (!(await boot())) return;
  if (S.boot.user.role !== 'admin') { location.href = 'index.html'; return; }
  rerender = renderAdmin;
  await loadAdminTab();
}

async function loadAdminTab() {
  try {
    if (ADMIN.tab === 'users') ADMIN.users = await api('listUsers');
    if (ADMIN.tab === 'log') ADMIN.log = await api('readLog');
    if (ADMIN.tab === 'sections' || ADMIN.tab === 'statuses' || ADMIN.tab === 'settings') {
      S.boot = await api('bootstrap'); S.statuses = {}; S.boot.statuses.forEach(s => (S.statuses[s.key] = s));
    }
  } catch (e) { if (e.code !== 'AUTH') toast(errText(e.code), true); }
  renderAdmin();
}

function renderAdmin() {
  const tabs = [['users', 'fa-users', t('tUsers')], ['sections', 'fa-table-cells-large', t('tSections')], ['statuses', 'fa-tags', t('tStatuses')], ['settings', 'fa-sliders', t('tSettings')], ['log', 'fa-clock-rotate-left', t('tLog')]];
  let body = '';
  if (ADMIN.tab === 'users') body = adminUsersHtml();
  if (ADMIN.tab === 'sections') body = adminSectionsHtml();
  if (ADMIN.tab === 'statuses') body = adminStatusesHtml();
  if (ADMIN.tab === 'settings') body = adminSettingsHtml();
  if (ADMIN.tab === 'log') body = adminLogHtml();
  mount(`<div class="max-w-6xl mx-auto">
    <h2 class="text-2xl font-extrabold text-white mb-5"><i class="fa-solid fa-user-gear text-cyan-400 me-2"></i>${t('adminPanel')}</h2>
    <div class="flex flex-wrap gap-2 mb-6">${tabs.map(([k, ic, l]) => `<button data-tab="${k}" class="chip ${ADMIN.tab === k ? 'chip-on' : ''}"><i class="fa-solid ${ic} me-1"></i>${l}</button>`).join('')}</div>
    ${body}
  </div>`);
  document.querySelectorAll('[data-tab]').forEach(b => (b.onclick = () => { ADMIN.tab = b.dataset.tab; loadAdminTab(); }));
  wireAdmin();
}

function permSummary(u) {
  if (u.role === 'admin') return `<span class="text-cyan-300">${t('adminAll')}</span>`;
  return allSectionsForPerms().map(s => {
    const l = u.perms[s.key] || 'none';
    const cls = l === 'edit' ? 'text-emerald-300 border-emerald-500/30' : l === 'view' ? 'text-cyan-300 border-cyan-500/30' : 'text-slate-500 border-slate-700';
    return `<span class="inline-block text-[10px] px-1.5 py-0.5 rounded border ${cls} me-1 mb-1">${esc(pick(s, 'title').slice(0, 28))}: ${t('p_' + l)}</span>`;
  }).join('');
}

// admins see every section in bootstrap, so this is the complete list
function allSectionsForPerms() { return S.boot.sections; }

function adminUsersHtml() {
  return `<div class="flex justify-end mb-3"><button data-a="addUser" class="btn-primary"><i class="fa-solid fa-user-plus"></i>${t('addUser')}</button></div>
  <div class="glass-panel rounded-2xl overflow-x-auto"><table class="w-full text-sm min-w-[720px]">
    <thead class="text-xs text-slate-400 bg-slate-900/60"><tr><th class="th">${t('username')}</th><th class="th">${t('role')}</th><th class="th">${t('perms')}</th><th class="th">${t('lastLogin')}</th><th class="th"></th></tr></thead>
    <tbody>${ADMIN.users.map(u => `<tr class="border-t border-slate-800 ${u.active ? '' : 'opacity-50'}">
      <td class="td font-mono" dir="ltr">${esc(u.username)} ${u.username === S.boot.user.username ? `<span class="text-[10px] text-slate-500">${t('you')}</span>` : ''}</td>
      <td class="td">${u.role === 'admin' ? `<span class="text-cyan-300 font-bold">${t('admin')}</span>` : t('user')}</td>
      <td class="td">${permSummary(u)}</td>
      <td class="td text-xs text-slate-400" dir="ltr">${esc((u.last_login || '').replace('T', ' ').slice(0, 16))}</td>
      <td class="td whitespace-nowrap"><button data-a="editUser" data-id="${esc(u.username)}" class="ebtn"><i class="fa-solid fa-pen"></i></button>
        ${u.username !== S.boot.user.username ? `<button data-a="delUser" data-id="${esc(u.username)}" class="ebtn hover:!text-rose-400"><i class="fa-solid fa-trash"></i></button>` : ''}</td>
    </tr>`).join('')}</tbody></table></div>`;
}

function userDialog(u) {
  const isNew = !u;
  const user = u || { username: '', role: 'user', active: true, perms: {} };
  const secs = allSectionsForPerms();
  const permsHtml = `<div class="sm:col-span-2"><p class="text-xs font-bold text-slate-300 mb-2">${t('perms')}</p>
    <div id="permBox" class="space-y-2">${secs.map(s => `<div class="flex flex-wrap items-center gap-2 bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2">
      <span class="text-sm text-slate-200 flex-1 min-w-[160px]">${esc(pick(s, 'title'))}</span>
      <select name="perm_${esc(s.key)}" class="inp !w-auto !py-1 text-xs">${['none', 'view', 'edit'].map(l => `<option value="${l}" ${(user.perms[s.key] || 'none') === l ? 'selected' : ''}>${t('p_' + l)}</option>`).join('')}</select>
    </div>`).join('')}</div>
    <p id="adminNote" class="text-xs text-cyan-300 mt-2 ${user.role === 'admin' ? '' : 'hidden'}">${t('adminAll')}</p></div>`;
  const f = openForm({
    title: isNew ? t('addUser') : user.username, wide: true,
    fields: [
      { name: 'username', label: t('username'), value: user.username, dir: 'ltr', readonly: !isNew, autocomplete: 'off' },
      { name: 'password', label: isNew ? t('pwNew') : t('pwKeep'), type: 'password', dir: 'ltr', autocomplete: 'new-password' },
      { name: 'role', label: t('role'), type: 'select', value: user.role, options: [{ value: 'user', label: t('user') }, { value: 'admin', label: t('admin') }] },
      { name: 'active', label: t('active'), type: 'checkbox', value: user.active },
      { name: 'perms', type: 'html', html: permsHtml }
    ],
    onSubmit: async (v, form) => {
      const perms = {};
      secs.forEach(s => { perms[s.key] = form.elements['perm_' + s.key].value; });
      await api('saveUser', { isNew, user: { username: v.username, password: v.password, role: v.role, active: v.active, perms } });
      toast(t('saved'));
      await loadAdminTab();
    }
  });
  const roleSel = f.form.elements.role;
  const sync = () => {
    const isAdmin = roleSel.value === 'admin';
    f.form.querySelector('#adminNote').classList.toggle('hidden', !isAdmin);
    f.form.querySelectorAll('#permBox select').forEach(s => (s.disabled = isAdmin));
  };
  roleSel.onchange = sync; sync();
}

function adminSectionsHtml() {
  return `<div class="flex justify-end mb-3"><button data-a="addSection" class="btn-primary"><i class="fa-solid fa-plus"></i>${t('addSection')}</button></div>
  <div class="space-y-3">${S.boot.sections.map(s => {
    const c = COLORS[s.color] || COLORS.cyan;
    return `<div class="glass-panel rounded-xl p-4 flex flex-wrap items-center gap-3">
      <div class="w-10 h-10 rounded-xl ${c.soft} ${c.text} flex items-center justify-center"><i class="fa-solid ${safeIcon(s.icon) || 'fa-folder'}"></i></div>
      <div class="flex-1 min-w-[200px]"><p class="font-bold text-white">${esc(pick(s, 'title'))}</p><p class="text-xs text-slate-500 font-mono" dir="ltr">${esc(s.key)} · ${s.type === 'docs' ? t('type_docs') : t('type_items')} · ${s.counts.total}</p></div>
      <div class="flex gap-1">
        <button data-a="secUp" data-id="${esc(s.key)}" class="ebtn"><i class="fa-solid fa-arrow-up"></i></button>
        <button data-a="secDown" data-id="${esc(s.key)}" class="ebtn"><i class="fa-solid fa-arrow-down"></i></button>
        <button data-a="editSection" data-id="${esc(s.key)}" class="ebtn"><i class="fa-solid fa-pen"></i></button>
        <button data-a="delSection" data-id="${esc(s.key)}" class="ebtn hover:!text-rose-400"><i class="fa-solid fa-trash"></i></button>
      </div></div>`;
  }).join('')}</div>`;
}

function sectionDialog(s) {
  const isNew = !s;
  const sec = s || { key: '', type: 'items', icon: 'fa-folder', color: 'cyan' };
  const fields = [
    { name: 'key', label: t('f_key'), value: sec.key, dir: 'ltr', readonly: !isNew },
    isNew ? { name: 'type', label: t('f_type'), type: 'select', value: sec.type, options: [{ value: 'items', label: t('type_items') }, { value: 'docs', label: t('type_docs') }] }
          : { name: 'type_ro', label: t('f_type'), value: sec.type === 'docs' ? t('type_docs') : t('type_items'), readonly: true },
    { name: 'title_ar', label: t('f_title_ar'), value: sec.title_ar, dir: 'rtl' },
    { name: 'title_en', label: t('f_title_en'), value: sec.title_en, dir: 'ltr' },
    { name: 'sub_ar', label: t('f_sub_ar'), value: sec.sub_ar, dir: 'rtl' },
    { name: 'sub_en', label: t('f_sub_en'), value: sec.sub_en, dir: 'ltr' },
    { name: 'badge_ar', label: t('f_secBadge_ar'), value: sec.badge_ar, dir: 'rtl' },
    { name: 'badge_en', label: t('f_secBadge_en'), value: sec.badge_en, dir: 'ltr' },
    { name: 'icon', label: t('f_icon'), value: sec.icon, dir: 'ltr' },
    { name: 'color', label: t('f_color'), type: 'select', value: sec.color, options: COLOR_NAMES.map(c => ({ value: c, label: c })) }
  ];
  openForm({
    title: isNew ? t('addSection') : pick(sec, 'title'), wide: true, fields,
    onSubmit: async v => {
      delete v.type_ro;
      await api('saveSection', { isNew, section: v });
      toast(t('saved'));
      await loadAdminTab();
    }
  });
}

function adminStatusesHtml() {
  return `<div class="flex flex-wrap items-center justify-between gap-3 mb-3"><p class="text-xs text-slate-400">${t('statusHint')}</p><button data-a="addStatus" class="btn-primary"><i class="fa-solid fa-plus"></i>${t('addStatus')}</button></div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">${S.boot.statuses.map(s => {
    const c = COLORS[s.color] || COLORS.slate;
    return `<div class="glass-panel rounded-xl p-3 flex items-center gap-3">
      <span class="text-[11px] px-2.5 py-1 rounded ${c.soft} ${c.text} font-bold border ${c.border}">${esc(pick(s, 'label'))}</span>
      <span class="text-xs text-slate-500 font-mono flex-1" dir="ltr">${esc(s.key)}</span>
      <button data-a="editStatus" data-id="${esc(s.key)}" class="ebtn"><i class="fa-solid fa-pen"></i></button>
      <button data-a="delStatus" data-id="${esc(s.key)}" class="ebtn hover:!text-rose-400"><i class="fa-solid fa-trash"></i></button>
    </div>`;
  }).join('')}</div>`;
}

function statusDialog(s) {
  const isNew = !s;
  const st = s || { key: '', color: 'amber' };
  openForm({
    title: isNew ? t('addStatus') : pick(st, 'label'),
    fields: [
      { name: 'key', label: t('f_statusKey'), value: st.key, dir: 'ltr', readonly: !isNew, full: true },
      { name: 'label_ar', label: t('f_label_ar'), value: st.label_ar, dir: 'rtl' },
      { name: 'label_en', label: t('f_label_en'), value: st.label_en, dir: 'ltr' },
      { name: 'color', label: t('f_color'), type: 'select', value: st.color, full: true, options: COLOR_NAMES.map(c => ({ value: c, label: c })), hint: t('statusHint') }
    ],
    onSubmit: async v => { await api('saveStatus', { isNew, status: v }); toast(t('saved')); await loadAdminTab(); }
  });
}

const SETTING_FIELDS = ['company', 'banner_tag', 'banner_title', 'banner_desc', 'status_label', 'status_value', 'launch_label', 'launch_value', 'footer'];

function adminSettingsHtml() {
  const st = S.boot.settings;
  const row = k => {
    const long = k === 'banner_desc';
    const fld = (lang) => long
      ? `<textarea name="${k}_${lang}" rows="4" dir="${lang === 'ar' ? 'rtl' : 'ltr'}" class="inp">${esc(st[k + '_' + lang] || '')}</textarea>`
      : `<input name="${k}_${lang}" value="${esc(st[k + '_' + lang] || '')}" dir="${lang === 'ar' ? 'rtl' : 'ltr'}" class="inp">`;
    return `<div class="sm:col-span-2 text-xs font-bold text-slate-300 mt-2">${t('s_' + k)}</div><div>${fld('ar')}</div><div>${fld('en')}</div>`;
  };
  return `<form id="setForm" class="glass-panel rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
    <div class="text-xs text-slate-500">العربية</div><div class="text-xs text-slate-500">English</div>
    ${SETTING_FIELDS.map(row).join('')}
    <div class="sm:col-span-2 text-xs font-bold text-slate-300 mt-2">Company subtitle / ${t('preparedBy')}</div>
    <div><input name="company_sub" value="${esc(st.company_sub || '')}" dir="ltr" class="inp"></div>
    <div><input name="prepared_by" value="${esc(st.prepared_by || '')}" dir="ltr" class="inp"></div>
    <div class="sm:col-span-2 pt-3"><button class="btn-primary" type="submit"><i class="fa-solid fa-floppy-disk"></i>${t('save')}</button></div>
  </form>`;
}

function adminLogHtml() {
  return `<div class="glass-panel rounded-2xl overflow-x-auto"><table class="w-full text-sm min-w-[640px]">
    <thead class="text-xs text-slate-400 bg-slate-900/60"><tr><th class="th">${t('time')}</th><th class="th">${t('username')}</th><th class="th">${t('action')}</th><th class="th">${t('details')}</th></tr></thead>
    <tbody>${ADMIN.log.map(r => `<tr class="border-t border-slate-800"><td class="td text-xs text-slate-400" dir="ltr">${esc(String(r.time).replace('T', ' ').slice(0, 19))}</td><td class="td font-mono" dir="ltr">${esc(r.user)}</td><td class="td text-cyan-300">${esc(r.action)}</td><td class="td text-xs text-slate-300">${esc(r.details)}</td></tr>`).join('')}</tbody></table></div>`;
}

function wireAdmin() {
  document.querySelectorAll('[data-a]').forEach(b => {
    b.onclick = async () => {
      const a = b.dataset.a, id = b.dataset.id;
      try {
        if (a === 'addUser') return userDialog(null);
        if (a === 'editUser') return userDialog(ADMIN.users.find(u => u.username === id));
        if (a === 'delUser') { if (!confirmDel()) return; await api('deleteUser', { username: id }); toast(t('deleted')); return loadAdminTab(); }
        if (a === 'addSection') return sectionDialog(null);
        if (a === 'editSection') return sectionDialog(S.boot.sections.find(s => s.key === id));
        if (a === 'delSection') { if (!confirmDel()) return; await api('deleteSection', { key: id }); toast(t('deleted')); return loadAdminTab(); }
        if (a === 'secUp' || a === 'secDown') { await api('moveSection', { key: id, dir: a === 'secUp' ? 'up' : 'down' }); return loadAdminTab(); }
        if (a === 'addStatus') return statusDialog(null);
        if (a === 'editStatus') return statusDialog(S.statuses[id]);
        if (a === 'delStatus') { if (!confirmDel()) return; await api('deleteStatus', { key: id }); toast(t('deleted')); return loadAdminTab(); }
      } catch (e) { toast(errText(e.code), true); }
    };
  });
  const sf = $('#setForm');
  if (sf) sf.onsubmit = async e => {
    e.preventDefault();
    const settings = {};
    [...sf.elements].forEach(x => { if (x.name) settings[x.name] = x.value; });
    const btn = sf.querySelector('[type=submit]'); btn.disabled = true;
    try { await api('saveSettings', { settings }); toast(t('saved')); await loadAdminTab(); }
    catch (ex) { toast(errText(ex.code), true); btn.disabled = false; }
  };
}

/* ------------------------------ start ------------------------------ */
document.addEventListener('click', e => {
  const m = document.getElementById('userMenu');
  if (m && !e.target.closest('#userBtn')) m.classList.add('hidden');
});
if (PAGE === 'home') startHome();
else if (PAGE === 'section') startSection();
else if (PAGE === 'admin') startAdmin();
