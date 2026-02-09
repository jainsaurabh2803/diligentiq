import { createClient } from '@supabase/supabase-js';

// TODO: REPLACE THESE VALUES WITH YOUR ACTUAL KEYS FROM SUPABASE.COM
// Go to Project Settings -> API to find these.
const supabaseUrl = 'INSERT_YOUR_SUPABASE_PROJECT_URL_HERE';
const supabaseKey = 'INSERT_YOUR_SUPABASE_ANON_KEY_HERE';

export const supabase = createClient(supabaseUrl, supabaseKey);