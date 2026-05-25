// ── PASTE YOUR SUPABASE CREDENTIALS HERE ──────────────────────
const SUPABASE_URL = 'https://nygicyifpjlubbremklt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55Z2ljeWlmcGpsdWJicmVta2x0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2ODM4NTYsImV4cCI6MjA5NTI1OTg1Nn0.E3V-YktE2e1N5OekOU7wgTpryqPA7RTpLyGHOGxKZng';
// ──────────────────────────────────────────────────────────────

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
