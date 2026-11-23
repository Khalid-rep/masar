'use client'

import { useState } from 'react'
import { MessageSquare, Send, CheckCircle2, User, Building2 } from 'lucide-react'

type SubmitState = 'idle' | 'loading' | 'success'

export function ClientFeedbackSection() {
  const [feedback, setFeedback] = useState('')
  const [reviewerName, setReviewerName] = useState('')
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [approvalStatus, setApprovalStatus] = useState<'approved' | 'needs_revision' | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!feedback.trim()) return

    setSubmitState('loading')
    // Simulate async submission
    setTimeout(() => {
      setSubmitState('success')
    }, 1200)
  }

  const handleReset = () => {
    setSubmitState('idle')
    setFeedback('')
    setReviewerName('')
    setApprovalStatus(null)
  }

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="mb-10 text-right">
          <div className="inline-flex items-center gap-2 bg-secondary text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span>اعتماد العميل</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
            ملاحظات واعتماد العميل
          </h2>
          <p className="text-muted-foreground mt-2 leading-relaxed">
            يرجى مراجعة الاستراتيجية والخطة المُقدمة أعلاه، ثم إضافة ملاحظاتك أو اعتمادها للمضي في مرحلة الإنتاج.
          </p>
          <p className="text-sm text-accent font-medium mt-2">
            استخدم هذا المربع للملاحظات العامة على الاستراتيجية التسويقية واستراتيجية المحتوى
          </p>
        </div>

        {submitState === 'success' ? (
          /* Success state */
          <div className="bg-card rounded-2xl border border-border shadow-sm p-10 text-center">
            <div className="flex justify-center mb-5">
              <div className="bg-green-100 rounded-full p-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">تم حفظ ملاحظاتك بنجاح</h3>
            <p className="text-muted-foreground mb-2">
              وصلت ملاحظاتك إلى فريق الوكالة وسيتم مراجعتها والرد عليك في أقرب وقت.
            </p>
            {approvalStatus && (
              <p className="text-sm font-semibold mt-2 mb-6">
                {approvalStatus === 'approved' ? (
                  <span className="text-green-600">تم الاعتماد بدون تعديلات</span>
                ) : (
                  <span className="text-orange-500">طُلب المراجعة والتعديل</span>
                )}
              </p>
            )}
            {!approvalStatus && <div className="mb-6" />}
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
            >
              إرسال ملاحظة أخرى
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} noValidate>
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
              {/* Form header */}
              <div className="bg-[#0f2444] px-6 py-5 flex items-center gap-3">
                <div className="bg-white/15 rounded-xl p-2.5">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">معهد مسار التمكين العالي للتدريب</p>
                  <p className="text-white/60 text-xs mt-0.5">استمارة اعتماد الاستراتيجية التسويقية</p>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                {/* Reviewer name */}
                <div>
                  <label htmlFor="reviewer-name" className="block text-sm font-semibold text-foreground mb-2">
                    اسم المراجع
                  </label>
                  <div className="relative">
                    <User className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <input
                      id="reviewer-name"
                      type="text"
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      placeholder="أدخل اسمك أو مسماك الوظيفي"
                      className="w-full pr-10 pl-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors"
                      dir="rtl"
                    />
                  </div>
                </div>

                {/* Approval status */}
                <div>
                  <p className="block text-sm font-semibold text-foreground mb-3">قرار الاعتماد</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setApprovalStatus('approved')}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                        approvalStatus === 'approved'
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-border bg-background text-muted-foreground hover:border-green-300 hover:bg-green-50/50'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      اعتماد بدون تعديلات
                    </button>
                    <button
                      type="button"
                      onClick={() => setApprovalStatus('needs_revision')}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                        approvalStatus === 'needs_revision'
                          ? 'border-orange-400 bg-orange-50 text-orange-700'
                          : 'border-border bg-background text-muted-foreground hover:border-orange-300 hover:bg-orange-50/50'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4" />
                      يحتاج مراجعة وتعديل
                    </button>
                  </div>
                </div>

                {/* Notes textarea */}
                <div>
                  <label htmlFor="feedback-text" className="block text-sm font-semibold text-foreground mb-2">
                    الملاحظات التفصيلية
                    <span className="text-destructive mr-1">*</span>
                  </label>
                  <textarea
                    id="feedback-text"
                    rows={5}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="أدخل ملاحظاتك على الاستراتيجية وخطة المحتوى هنا... (مثال: الموافقة على الخطة العامة، أو طلب تعديل على قنوات النشر، أو ملاحظات على الرسائل التسويقية)"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-colors resize-none leading-relaxed"
                    dir="rtl"
                  />
                  <p className="text-xs text-muted-foreground mt-1.5 text-left">
                    {feedback.length} / حرف
                  </p>
                </div>

                {/* Submit */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    ستصل ملاحظاتك مباشرة إلى فريق الوكالة
                  </p>
                  <button
                    type="submit"
                    disabled={!feedback.trim() || submitState === 'loading'}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-bold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                  >
                    {submitState === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                        <span>جارٍ الإرسال...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>إرسال الملاحظات</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
