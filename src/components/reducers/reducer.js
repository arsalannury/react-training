const initialState = {
  content: "",
  from: "",
  disabledNext: false,
  disabledPrev: true,
  persian: "",
  arabic: "",
  french: "",
  translate: 1,
  selectLanguage: "persian",
  numberProverb: null
};
const reducer = (state = initialState, { type }) => {
  switch (type) {
    case 0:
      return {
        content:
          "Truth is more valuable if it takes you a few years to find it",
        persian: "حقیقت ارزشمندتر است اگر چند سال طول بکشد تا آن را پیدا کنید",
        french:
          "La vérité a plus de valeur s’il vous faut quelques années pour la trouver",
        arabic: "لحقيقة هي أكثر قيمة إذا كان يأخذك بضع سنوات للعثور عليه",
        from: " French proverb",
        translate: 1,
        numberProverb: 1,
        selectLanguage: "persian",
        disabledPrev: true,
      };
      break;
    case 1:
      return {
        content:
          "There is no shame in not knowing; the shame lies in not finding out",
        persian: "هیچ شرم آور نیست که نمی داند؛ شرم در پیدا کردن نیست",
        french:
          "Il n’y a pas de honte à ne pas savoir; la honte réside dans le fait de ne pas le découvrir",
        arabic: "ليس هناك عار في عدم معرفة; العار يكمن في عدم معرفة",
        from: "Russian proverb",
        translate: 1,
        numberProverb: 2,
        selectLanguage: "persian",
        disabledPrev: false,
      };
      break;
    case 2:
      return {
        content: "Coffee and love taste best when hot",
        persian: "قهوه و طعم عشق بهترین زمانی که داغ",
        french: "Le café et l’amour ont meilleur goût quand ils sont chauds",
        arabic: "القهوة والحب طعم أفضل عندما الساخنة",
        from: "Ethiopian proverb",
        translate: 1,
        numberProverb: 3,
        selectLanguage: "persian",
        disabledPrev: false,
      };
      break;
    case 3:
      return {
        content: "The pen is mightier than the sword",
        persian: "قلم تواناتر از شمشیر است",
        french: "la plume est plus puissante que l'épée",
        arabic: "قلمه اقوى من السيف",
        from: "English proverb",
        translate: 1,
        numberProverb: 4,
        selectLanguage: "persian",
        disabledPrev: false,
      };
      break;
    case 4:
      return {
        content: "Fall seven times, stand up eight",
        persian: "سقوط هفت بار، ایستادن هشت",
        french: "Tomber sept fois, se relever huit",
        arabic: "اسقط سبع مرات وقف في الثامنة",
        from: "Japanese proverb",
        translate: 1,
        numberProverb: 5,
        selectLanguage: "persian",
        disabledPrev: false,
      };
      break;
    case 5:
      return {
        content: "If you can’t live longer, live deeper",
        persian: "اگر نمیتوانید زندگی کنید، عمیق تر زندگی کنید",
        french: "Si tu ne peux pas vivre plus longtemps, vis plus profondément",
        arabic: "إذا كنت لا تستطيع العيش لفترة أطول ، فعيش بشكل أعمق",
        from: "Italian proverb",
        translate: 1,
        numberProverb: 6,
        selectLanguage: "persian",
        disabledPrev: false,
      };
      break;
    case 6:
      return {
        content: "It takes a whole village to raise a child",
        persian: "این یک روستای کامل برای افزایش یک کودک طول می کشد",
        french: "Il faut tout un village pour élever un enfant",
        arabic: "يتطلب الأمر قرية كاملة لتربية طفل",
        from: "African proverb",
        translate: 1,
        numberProverb: 7,
        selectLanguage: "persian",
        disabledPrev: false,
      };
      break;
    case 7:
      return {
        content:
          "Turn your face toward the sun and the shadows fall behind you",
        persian:
          "چهره خود را به سمت خورشید تبدیل کنید و سایه ها پشت سر شما قرار می گیرند",
        french:
          "Tourne ton visage vers le soleil et les ombres tombent derrière toi",
        arabic: "أدر وجهك نحو الشمس فتسقط الظلال خلفك",
        from: "Maori proverb",
        translate: 1,
        numberProverb: 8,
        selectLanguage: "persian",
        disabledNext: true,
        disabledPrev: false,
      };
      break;
    case "PERSIAN":
      return {
        ...state,
        translate: (state.translate = 1),
        selectLanguage: "persian",
      };
      break;
    case "FRENCH":
      return {
        ...state,
        translate: (state.translate = 2),
        selectLanguage: "french",
      };
    case "ARABIC":
      return {
        ...state,
        translate: (state.translate = 3),
        selectLanguage: "arabic",
      };
      break;
    default:
      return state;
  }
};
export default reducer;
