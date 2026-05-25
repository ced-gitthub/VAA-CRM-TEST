// ── PASTE YOUR SUPABASE CREDENTIALS HERE ──────────────────────
const SUPABASE_URL = 'https://nygicyifpjlubbremklt.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_wQ-NAO8yyhk6Y5jshcMX3A_dP5us_Ja';
// ──────────────────────────────────────────────────────────────

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
