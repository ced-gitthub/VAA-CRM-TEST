// Guards every page (except login) and provides logout.
// Include AFTER supabase.js on every app page.

const IS_LOGIN_PAGE = window.location.pathname.endsWith('index.html')
  || window.location.pathname === '/'
  || window.location.pathname === '';

(async () => {
  const { data: { session } } = await sb.auth.getSession();

  if (IS_LOGIN_PAGE) {
    if (session) window.location.href = 'dashboard.html';
    return;
  }

  if (!session) {
    window.location.href = 'index.html';
    return;
  }

  // Populate user info in sidebar
  const emailEl = document.getElementById('user-email');
  const avatarEl = document.getElementById('user-avatar');
  if (emailEl) emailEl.textContent = session.user.email;
  if (avatarEl) avatarEl.textContent = session.user.email[0].toUpperCase();
})();

async function logout() {
  await sb.auth.signOut();
  window.location.href = 'index.html';
}

// ── Toast utility ──────────────────────────────────────────────
function toast(msg, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  container.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

// ── Mobile sidebar toggle ──────────────────────────────────────
function initMobileSidebar() {
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (!toggle || !sidebar) return;
  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay?.classList.toggle('open');
  });
  overlay?.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}
document.addEventListener('DOMContentLoaded', initMobileSidebar);

// ── Changelog helper ───────────────────────────────────────────
async function logChange(tableName, recordId, fieldChanged, oldValue, newValue, note = null) {
  const { data: { session } } = await sb.auth.getSession();
  await sb.from('changelog').insert({
    table_name: tableName,
    record_id: recordId,
    field_changed: fieldChanged,
    old_value: oldValue !== null && oldValue !== undefined ? String(oldValue) : null,
    new_value: newValue !== null && newValue !== undefined ? String(newValue) : null,
    changed_by: session?.user?.id || null,
    note
  });
}
