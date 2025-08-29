import React, { useState } from 'react';
import './App.css';
// لم نعد بحاجة لأيقونة التشغيل، لذا تم حذفها
import { FaExclamationCircle, FaBullseye, FaHourglassHalf, FaComments, FaCheckCircle, FaClipboardList, FaRocket, FaUserTie, FaQuestionCircle } from 'react-icons/fa';

const App = () => {

    // --- START: State Management for the form ---
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    website: '',
    ordersPerMonth: '',
    avgSales: '',
    challenges: [],
    budget: ''
  });
  
  const [formStatus, setFormStatus] = useState({ submitting: false, message: null });

  // Handle regular input and select changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prevState => {
      if (checked) {
        return { ...prevState, challenges: [...prevState.challenges, value] };
      } else {
        return { ...prevState, challenges: prevState.challenges.filter(challenge => challenge !== value) };
      }
    });
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, message: null });

    try {
      const response = await fetch('https://n8n.youssef.im/webhook/get-form-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Assuming a successful response means the data was received
      setFormStatus({ submitting: false, message: 'تم الإرسال بنجاح! هنتواصل معاك قريب.' });
      // Reset form after successful submission
      setFormData({
        name: '', contact: '', website: '', ordersPerMonth: '', avgSales: '', challenges: [], budget: ''
      });

    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      setFormStatus({ submitting: false, message: 'حصل خطأ في الإرسال. حاول مرة تانية.' });
    }
  };
  // --- END: State Management for the form ---


  return (
    <div className="landing-page">
      <main>

        {/* --- START: التغيير هنا --- */}
        <div style={{marginLeft:"auto", marginRight:"auto", width:"fit-content", paddingTop:"50px", paddingBottom:"40px"}} className="header">
          <img src='/close more ai.png' alt="Close More AI" style={{ width: '200px', height: 'auto' }} />
        </div>

        {/* 1. HERO SECTION */}
        <section className="hero-section">
          <div className="container">
            <h1 className="hero-headline">
              <span className="pain-highlight"><span style={{ color: 'black' }}>كل رسالة مبتتردش عليها =</span> فلوس بتضيع.</span>
            </h1>
            <p className="hero-subheadline">
              المساعد الذكي بتاعنا بيرد في ساعتها، بيفلتر العملا الجادين، بيسجل الاوردرات ويتابع معاهم يوميا على مدار ال24 ساعة — 50% ارخص ومنغير اجازات.
            </p>
            <a href="#demo-form" className="cta-button hero-cta">
              احجز ديمو مجاني
            </a>
            
            {/* --- START: التغيير هنا --- */}
            <div className="hero-visual">
              {/* Image element replacing the video */}
              <img src="/heroimage.png" alt="Hero Image" className="hero-image" />
            </div>
            {/* --- END: التغيير هنا --- */}

          </div>
        </section>

        {/* (باقي الأقسام كما هي بدون تغيير) */}
        
        {/* 2. THE PROBLEM SECTION */}
        <section className="problem-section">
          <div className="container">
            <h2 className="section-title">ليه بتخسر مبيعات دلوقتي</h2>
            <div className="grid-3">
              <div className="feature-card">
                <FaHourglassHalf className="feature-icon pain-icon" />
                <h3>الرد المتأخر</h3>
                <p>العميل مبيستناش. بيشتري من المنافس اللي بيرد أسرع.</p>
              </div>
              <div className="feature-card">
                <FaBullseye className="feature-icon pain-icon" />
                <h3>مفيش متابعة</h3>
                <p>٨٠٪ من العملا المحتملين بيتنسوا عشان مفيش متابعة وراهم.</p>
              </div>
              <div className="feature-card">
                <FaExclamationCircle className="feature-icon pain-icon" />
                <h3>تكلفة عالية</h3>
                <p>تعيين فريق دعم ٢٤ ساعة مكلف ومش عملي للأسئلة اللي بتتكرر.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE SOLUTION SECTION */}
        <section className="solution-section">
          <div className="container">
            <h2 className="section-title">قابل وكيل المبيعات والدعم الجديد بتاعك شغال 24 ساعة في ال7 ايام</h2>
            <div className="solution-visual">
              <div className="mockup-chat">
                <div style={{ marginRight: 'auto' }} className="chat-bubble client">مساء الخير، فيه توصيل للقاهرة؟</div>
                <div className="chat-bubble ai">أهلاً بحضرتك! أيوه، بنوصل للقاهرة في خلال ٢٤ ساعة. كنت عايز حاجة معينة؟</div>
                <div style={{ marginRight: 'auto' }} className="chat-bubble client">تمام! المنتج "س" سعره كام؟</div>
                <div className="chat-bubble ai">سعر المنتج "س" ١٢٠٠ جنيه. تحب نعمل الأوردر لحضرتك دلوقتي؟</div>
              </div>
            </div>
            <ul className="solution-features">
              <li><FaCheckCircle className="solution-icon" /> بيرد فوراً شات وصوت</li>
              <li><FaCheckCircle className="solution-icon" /> بيرد كإنو انسان طبيعي جدا وبيعرف يبيع</li>
              <li><FaCheckCircle className="solution-icon" /> بيفهم الفويسات والصور والملفات</li>
              <li><FaCheckCircle className="solution-icon" /> بيفلتر العملا الجادين بأسئلة ذكية</li>
              <li><FaCheckCircle className="solution-icon" /> بيحجز مواعيد وأوردرات بنفسه</li>
              <li><FaCheckCircle className="solution-icon" /> بيتابع مع العملا المحتملين أوتوماتيك</li>
              <li><FaCheckCircle className="solution-icon" /> بيسجل كل حاجة على نظام الـCRM بتاعك</li>
            </ul>
          </div>
        </section>

        {/* 5. HOW IT WORKS SECTION */}
        <section className="how-it-works-section">
          <div className="container">
            <h2 className="section-title">شغّل المساعد الذكي بتاعك في ٣ خطوات بس</h2>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">1</div>
                <h3>احجز الديمو بتاعك</h3>
                <p>بنوريك لايڤ الأيچنت بيشتغل إزاي وبنرد على كل أسئلتك.</p>
              </div>
              <div className="step-card">
                <div className="step-number">2</div>
                <h3>نظبطه على البيزنس بتاعك</h3>
                <p>بندربه على منتجاتك وأسعارك والأسئلة اللي بتتكرر عليك.</p>
              </div>
              <div className="step-card">
                <div className="step-number">3</div>
                <h3>انطلق وكبّر شغلك</h3>
                <p>المساعد بتاعك بيبدأ يرد، يفلتر عملاء، ويحجز أوردرات ٢٤ ساعة.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="demo-form" className="form-section">
          <div className="container">
            <h2 className="section-title">احجز الديمو المجاني بتاعك النهاردة</h2>
            <p className="form-intro">املأ الفورم دي عشان نفهم البيزنس بتاعك ونوريك إزاي بالظبط الذكاء الاصطناعي هيغير طريقتك للأحسن 180 درجة.</p>
            
            <form className="demo-form" onSubmit={handleSubmit}>
              {/* Personal Info */}
              <h3 className="form-subheading">معلومات شخصية</h3>
              <div className="form-group">
                <label htmlFor="name">الاسم</label>
                <input type="text" id="name" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="contact">رقم الواتساب / الموبايل</label>
                <input type="tel" id="contact" required value={formData.contact} onChange={handleChange} />
              </div>

              {/* Business Info */}
              <h3 className="form-subheading">معلومات عن البيزنس</h3>
              <div className="form-group">
                <label htmlFor="website">الموقع الإلكتروني (لو موجود)</label>
                <input type="url" id="website" value={formData.website} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="ordersPerMonth">تقريباً بتستقبل كام أوردر في الشهر؟</label>
                <select id="ordersPerMonth" required value={formData.ordersPerMonth} onChange={handleChange}>
                  <option value="">اختار...</option>
                  <option value="<100">أقل من 100</option>
                  <option value="100-500">100 - 500</option>
                  <option value="500-2000">500 - 2000</option>
                  <option value=">2000">أكتر من 2000</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="avgSales">متوسط المبيعات الشهرية (اختياري)</label>
                <select id="avgSales" value={formData.avgSales} onChange={handleChange}>
                  <option value="">اختار...</option>
                  <option value="<50k">أقل من 50,000 جنيه</option>
                  <option value="50k-150k">50,000 - 150,000 جنيه</option>
                  <option value="150k-500k">150,000 - 500,000 جنيه</option>
                  <option value=">500k">أكتر من 500,000 جنيه</option>
                </select>
              </div>
              <div className="form-group">
                <label>إيه أكبر تحدي بيقابلك حالياً مع العملاء؟ (تقدر تختار أكتر من إجابة)</label>
                <div className="checkbox-group">
                  <div className="checkbox-item">
                    <input type="checkbox" id="challenge1" value="no-response" onChange={handleCheckboxChange} />
                    <label htmlFor="challenge1">عملاء كتير مش بيردوا على رسايلي</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" id="challenge2" value="repetitive-messages" onChange={handleCheckboxChange} />
                    <label htmlFor="challenge2">رسايل متكررة كتير بتضيع الوقت</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" id="challenge3" value="lost-sales" onChange={handleCheckboxChange} />
                    <label htmlFor="challenge3">الرد البطيء بيضيع مني مبيعات</label>
                  </div>
                  <div className="checkbox-item">
                    <input type="checkbox" id="challenge4" value="high-salaries" onChange={handleCheckboxChange} />
                    <label htmlFor="challenge4">تكلفة المرتبات العالية للموظفين</label>
                  </div>
                </div>
              </div>

              {/* Financial Info */}
              <h3 className="form-subheading">المعلومات المالية</h3>
              <div className="form-group">
                <label htmlFor="budget">ميزانية دعم العملاء الشهرية التقديرية؟</label>
                <select id="budget" required value={formData.budget} onChange={handleChange}>
                  <option value="">اختار الميزانية...</option>
                  <option value="10k">10,000 جنيه</option>
                  <option value="20k">20,000 جنيه</option>
                  <option value="30k">30,000 جنيه</option>
                  <option value="40k">40,000 جنيه</option>
                  <option value="50k+">50,000 جنيه أو أكتر</option>
                </select>
              </div>

              <button type="submit" className="cta-button form-submit-button" disabled={formStatus.submitting}>
                {formStatus.submitting ? 'جاري الإرسال...' : 'احجز الديمو المجاني بتاعي'}
              </button>
              
              {formStatus.message && <p className="form-message">{formStatus.message}</p>}
            </form>
          </div>
        </section>
        {/* --- END: التغيير هنا --- */}

        {/* 7. FAQ SECTION */}
        <section className="faq-section">
          <div className="container">
            <h2 className="section-title">أسئلة بتتكرر كتير</h2>
            <div className="faq-grid">
              <details className="faq-item">
                <summary>هو ده مجرد "شات بوت" عادي؟</summary>
                <p>لأ، ده مساعد ذكاء اصطناعي مدرب بيفهم ويقرأ ملفات PDF ورسايل صوت وصور، وكلامه طبيعي زي البشر.</p>
              </details>
              <details className="faq-item">
                <summary>طب لو الذكاء الاصطناعي معرفش يرد على سؤال؟</summary>
                <p>بيحوّل المحادثة تلقائيًا لموظف من عندك ومعاها ملخص كامل للكلام اللي حصل.</p>
              </details>
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA SECTION */}
        <section className="final-cta-section">
          <div className="container">
            <h2 className="final-cta-title">كفاية خساير في المبيعات كل يوم.</h2>
            <p className="final-cta-subtitle">ديمو واحد ممكن يوريك كام عميل بيضيع منك.</p>
            <a href="#demo-form" className="cta-button final-cta-button">
              احجز ديمو مجاني دلوقتي ←
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
