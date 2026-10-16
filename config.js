// إعدادات مصروفي — غيّر السطرين الأولانيين بس
// From Supabase: Project Settings → API (or Data API)
window.MASROFI_CONFIG = {
  supabaseUrl: "https://YOUR-PROJECT.supabase.co",
  supabaseAnonKey: "YOUR-ANON-PUBLIC-KEY",

  // اسم المستخدم (زي esmailrashed) بيتحول جوه لإيميل بالشكل ده: esmailrashed@masrofi.local
  usernameDomain: "masrofi.local",

  // سعر الدهب المحلي = السعر العالمي × المعامل ده (اتظبط على أسعار السوق المصري يوم 16 أكتوبر 2026)
  goldBuyFactor: 0.989,   // اللي هتاخده لو بعت
  goldSellFactor: 0.995,  // اللي هتدفعه لو اشتريت
  usdSpread: 0.05         // فرق البيع والشرا للدولار بالجنيه
};
