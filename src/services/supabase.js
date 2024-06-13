import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://hidnnhuordaewtehhyto.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpZG5uaHVvcmRhZXd0ZWhoeXRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2ODM1MjEsImV4cCI6MjAzMTI1OTUyMX0.G1KL5mi0oeUjAr2orI5SHuo6AvFF_fW7V3wJWhsaKAY"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;