const initialState = {
  content: "",
  from: "",
  disabledNext: false,
  disabledPrev: true,
  translate: "",
};
const reducer = (state = initialState, { type }) => {
  switch (type) {
    case 0:
      return {
        content:
          "Truth is more valuable if it takes you a few years to find it",
        translate:
          "حقیقت ارزشمندتر است اگر چند سال طول بکشد تا آن را پیدا کنید",
        from: " French proverb",
        disabledPrev: true,
      };
      break;
    case 1:
      return {
        content:
          "There is no shame in not knowing; the shame lies in not finding out",
        translate: "هیچ شرم آور نیست که نمی داند؛ شرم در پیدا کردن نیست",
        from: "Russian proverb",
        disabledPrev: false,
      };
      break;
    case 2:
      return {
        content: "Coffee and love taste best when hot",
        translate: "قهوه و طعم عشق بهترین زمانی که داغ",
        from: "Ethiopian proverb",
        disabledPrev: false,
      };
      break;
    case 3:
      return {
        content: "The pen is mightier than the sword",
        translate: "قلم تواناتر از شمشیر است",
        from: "English proverb",
        disabledPrev: false,
      };
      break;
    case 4:
      return {
        content: "Fall seven times, stand up eight",
        translate: "سقوط هفت بار، ایستادن هشت",
        from: "Japanese proverb",
        disabledPrev: false,
      };
      break;
    case 5:
      return {
        content: "If you can’t live longer, live deeper",
        translate: "اگر نمیتوانید زندگی کنید، عمیق تر زندگی کنید",
        from: "Italian proverb",
        disabledPrev: false,
      };
      break;
    case 6:
      return {
        content: "It takes a whole village to raise a child",
        translate: "این یک روستای کامل برای افزایش یک کودک طول می کشد",
        from: "African proverb",
        disabledPrev: false,
      };
      break;
    case 7:
      return {
        content:
          "Turn your face toward the sun and the shadows fall behind you",
        translate:
          "چهره خود را به سمت خورشید تبدیل کنید و سایه ها پشت سر شما قرار می گیرند",
        from: "Maori proverb",
        disabledNext: true,
        disabledPrev: false,
      };
      break;
    default:
      return state;
  }
};
export default reducer;
