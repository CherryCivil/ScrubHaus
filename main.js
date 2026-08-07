window.addEventListener('load', () => {
    const loader = document.getElementById('bauhaus-loader');
    setTimeout(() => { loader.classList.add('hidden'); }, 300);
});
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 40) {
                    header.classList.add('header-scrolled');
                } else {
                    header.classList.remove('header-scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
});
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 3500);
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isActive = faqItem.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('span').textContent = '+';
            item.querySelector('span').style.transform = 'rotate(0deg)';
        });
        if (!isActive) {
            faqItem.classList.add('active');
            button.querySelector('span').textContent = '×';
            button.querySelector('span').style.transform = 'rotate(90deg)';
        }
    });
});
const i18n = {
    fr: {
        themeBtn: "Thème", bookBtn: "Réserver",
        logoSub: "Clean Home, Clear Mind",
        heroTitle: "Une Maison Propre.<br>Un Esprit tranquille.", heroDesc: "Profitez de votre temps libre, on s'occupe du reste. Un nettoyage profetionnel réalisé par une équipe de confiance.", heroBtn: "Réserver mon nettoyage",
        servicesTitle: "Nos Services",
        srv1Title: "Ménage Classique", srv1Desc: "Un entretien régulier pour une maison toujours propre.", srv1Spec1: "1 femme de ménage qualifiée", srv1Spec2: "Durée : 4 à 5 heures",
        srv2Title: "Nettoyage En Profondeur", srv2Desc: "Un grand ménage pour éliminer la saleté incrustée.", srv2Spec1: "2 femmes de ménage", srv2Spec2: "Durée : 5 à 6 heures",
        srv3Title: "Nettoyage Intensif", srv3Desc: "Remise à neuf complète (après travaux ou grand ménage).", srv3Spec1: "2 à 3 femmes de ménage", srv3Spec2: "Durée : 1 journée complète",
        srv4Title: "Services Additionnels", srv4Spec1: "Nettoyage Canapés/Tapis : 1000 DZD / place", srv4Spec2: "Haute Pression (Garages, Balcons)", srv4Spec3: "Lavage Linge (Machine du client) : 500 DZD / cycle", addBtn: "Ajouter au devis",
        eqTitle: "Notre Équipement Professionnel",
        eq1: "Aspirateur puissant pour l'eau et la poussière.", eq2: "Nettoyeur vapeur pour éliminer les bactéries sans produits chimiques.", eq3: "Machine spéciale pour laver les tissus en profondeur.", eq4: "Nettoyeur haute pression pour les extérieurs.", eq5: "Nettoyeur de vitres pour un résultat sans traces.",
        faqTitle: "Questions Fréquentes",
        faq1Q: "Fournissez-vous les produits de nettoyage ?", faq1A: "Oui, nous apportons tout le matériel et nos propres produits professionnels.",
        faq2Q: "Comment garantissez-vous la qualité ?", faq2A: "Nos équipes suivent une liste de tâches stricte pour chaque pièce. Une vérification est faite avant leur départ.",
        faq4Q: "Lavez-vous les vêtements à la main ?", faq4A: "Non, nous ne lavons pas à la main. Nous proposons le lavage en machine comme service payant (500 DZD/cycle, 2 cycles max), en utilisant votre machine et vos produits.",
        reviewTitle: "Laissez-nous un avis", reviewSubmit: "Envoyer l'avis",
        reviewName: "Nom complet", reviewPhone: "Numéro de téléphone", reviewText: "Partagez votre expérience avec nous..."
    },
    ar: {
        themeBtn: "المظهر", bookBtn: "احجز درك",
        logoSub: "Clean Home, Clear Mind",
        heroTitle: "دارك نقية.<br>و بالك مهني.", heroDesc: "استمتع بوقتك، وخلي الباقي علينا. تنظيف دقيق واحترافي من فريق ثقة.", heroBtn: "احجز التنظيف تاعك",
        servicesTitle: "خدماتنا",
        srv1Title: "تنظيف عادي (Classique)", srv1Desc: "تنظيف دورية باش تبقى دارك ديما نقية.", srv1Spec1: "عاملة تنظيف مؤهلة", srv1Spec2: "المدة: 4 إلى 5 ساعات",
        srv2Title: "تنظيف عميق (En Profondeur)", srv2Desc: "تنظيف شامل يقضي على الأوساخ المتراكمة.", srv2Spec1: "عاملتا تنظيف", srv2Spec2: "المدة: 5 إلى 6 ساعات",
        srv3Title: "تنظيف مكثف (Intensif)", srv3Desc: "تجديد كامل للدار (بعد الأشغال أو تنظيف شامل).", srv3Spec1: "2 إلى 3 عاملات تنظيف", srv3Spec2: "المدة: يوم كامل",
        srv4Title: "خدمات إضافية", srv4Spec1: "تنظيف الصالون/الزرابي: 1000 دج / بلاصة", srv4Spec2: "غسيل بالضغط العالي (حوش، بالكون)", srv4Spec3: "غسيل القش (ماشينة الزبون): 500 دج / غسلة", addBtn: "زيدها للطلب",
        eqTitle: "معداتنا الاحترافية",
        eq1: "أسپيراتور قوي للما والغبار.", eq2: "تنظيف بالبخار يقضي على البكتيريا بلا مواد كيميائية.", eq3: "ماشينة سبيسيال لغسيل الفراش بعمق.", eq4: "تنظيف بالضغط العالي للأماكن الخارجية.", eq5: "تنظيف الزاج لنتيجة بلا ليطراس.",
        faqTitle: "أسئلة شائعة",
        faq1Q: "تجيبو معاكم دوزان التنظيف؟", faq1A: "واه نجيبو كامل ماتريال ومنتجاتنا الاحترافية الخاصة.",
        faq2Q: "كيفاش تضمنو الجودة؟", faq2A: "الفريق تاعنا يتبع تشيكليست صارمة لكل شومبرة. ونديرو فيريفيكاسيون قبل ما نخرجو.",
        faq4Q: "تغسلو القش بيديكم؟", faq4A: "لا، مانغسلوش باليد. نوفرولك غسيل بالماشينة كخدمة إضافية (500 دج/غسلة، ماكسيموم غسلتين)، نستعملو الماشينة والبرودوي تاعك.",
        reviewTitle: "خلينا رأيك", reviewSubmit: "أبعث التقييم",
        reviewName: "الاسم الكامل", reviewPhone: "رقم الهاتف", reviewText: "شاركنا تجربتك معنا..."
    }
};
let currentLang = 'fr';
document.getElementById('langToggle').addEventListener('click', (e) => {
    currentLang = currentLang === 'fr' ? 'ar' : 'fr';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    e.target.textContent = currentLang === 'fr' ? 'AR' : 'FR';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (el.tagName === 'BUTTON' && el.classList.contains('faq-question')) {
            el.innerHTML = i18n[currentLang][key] + ' <span style="font-size: 1.5rem;">+</span>';
        } else {
            el.innerHTML = i18n[currentLang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = i18n[currentLang][key];
    });
});
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    let newTheme = (currentTheme === 'light' || (!currentTheme && !window.matchMedia('(prefers-color-scheme: dark)').matches)) ? 'dark' : 'light';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
const savedTheme = localStorage.getItem('theme');
if (savedTheme) root.setAttribute('data-theme', savedTheme);
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('clientName').value;
    const phone = document.getElementById('clientPhone').value;
    const review = document.getElementById('clientReview').value;
    const businessPhone = "213540167576"; 
    const message = `*Nouvel Avis / تقييم جديد*%0A%0A*Nom:* ${name}%0A*Tel:* ${phone}%0A*Avis:* ${review}`;
    const whatsappUrl = `https://wa.me/${businessPhone}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    this.reset();
});
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (e.key === 'F12' || e.keyCode === 123) { e.preventDefault(); return false; }
    if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) || (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c'))) { e.preventDefault(); return false; }
    if ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's')) { e.preventDefault(); return false; }
});