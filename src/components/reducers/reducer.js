import actions from "../store/actions";

const initialState = {
  color: "#fff",
  borderMengiue: "none",
  borderYellow: "none",
  borderOrange: "none",
  borderRed: "none",
  borderBlue: "none",
};

const reducer = (state = initialState, { type }) => {
  switch (type) {
    case actions.MERINGUE:
      return {
        color: (state.color = "#EAE2B7"),
        borderMengiue: (state.borderMengiue = "1px solid #fff"),
        borderYellow: (state.borderYellow = "none"),
        borderOrange: (state.borderOrange = "none"),
        borderRed: (state.borderRed = "none"),
        borderBlue: (state.borderBlue = "none"),
      };
    case actions.YELLOWRED:
      return {
        color: (state.color = "#FCBF49"),
        borderMengiue: (state.borderMengiue = "none"),
        borderYellow: (state.borderYellow = "1px solid #fff"),
        borderOrange: (state.borderOrange = "none"),
        borderRed: (state.borderRed = "none"),
        borderBlue: (state.borderBlue = "none"),
      };
    case actions.ORANGE:
      return {
        color: (state.color = "#F77F00"),
        borderMengiue: (state.borderMengiue = "none"),
        borderYellow: (state.borderYellow = "none"),
        borderOrange: (state.borderOrange = "1px solid #fff"),
        borderRed: (state.borderRed = "none"),
        borderBlue: (state.borderBlue = "none"),
      };
    case actions.RED:
      return {
        color: (state.color = "#D62828"),
        borderMengiue: (state.borderMengiue = "none"),
        borderYellow: (state.borderYellow = "none"),
        borderOrange: (state.borderOrange = "none"),
        borderRed: (state.borderRed = "1px solid #fff"),
        borderBlue: (state.borderBlue = "none"),
      };
    case actions.BLUE:
      return {
        color: (state.color = "#003049"),
        borderMengiue: (state.borderMengiue = "none"),
        borderYellow: (state.borderYellow = "none"),
        borderOrange: (state.borderOrange = "none"),
        borderRed: (state.borderRed = "none"),
        borderBlue: (state.borderBlue = "1px solid #fff"),
      };
    default:
      return state;
  }
};

export default reducer;
