import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error(
    "[Supabase] المفاتيح ناقصة. اتأكد من ملف .env وإنك عملت restart للسيرفر."
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);

/* ============================================
   أعمدة جدول reviews:
   id · doctor_id · name · rating · review · status · created_at
   ============================================ */

/**
 * إرسال رأي جديد (بيدخل pending لحد ما توافق عليه)
 * @returns {{ ok: boolean, error?: string }}
 */
export async function submitReview({ doctorId, patientName, rating, comment }) {
  const { error } = await supabase.from("reviews").insert({
    doctor_id: Number(doctorId),
    name: patientName,
    rating,
    review: comment,
  });

  if (error) {
    console.error("[Supabase] submitReview:", error);
    return { ok: false, error: error.message };
  }
  return { ok: true };
}

/**
 * جلب الآراء المعتمدة للعرض في الكاروسيل
 * @returns {{ data: Array, error?: string }}
 */
export async function fetchApprovedReviews(limit = 12) {
  const { data, error } = await supabase
    .from("reviews")
    .select("id, doctor_id, name, rating, review, created_at")
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("[Supabase] fetchApprovedReviews:", error);
    return { data: [], error: error.message };
  }
  return { data: data || [] };
}