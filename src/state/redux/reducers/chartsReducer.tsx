import { CHARTING_ACTIONS } from "../constants";

const INITIAL_STATE = {
  animations: false,
  lineType: "linear",
  legendType: "line",
  animationBegin: 1,
  animationDuration: 250,
  animationEasing: "ease-in"
};

const chartsReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case CHARTING_ACTIONS.ENABLE_ANIMATIONS:
      return Object.assign({}, state, {
        animations: action.animations
      });
    case CHARTING_ACTIONS.SET_LINE_TYPE:
      return Object.assign({}, state, {
        lineType: action.lineType
      });
    case CHARTING_ACTIONS.SET_LEGEND_TYPE:
      return Object.assign({}, state, {
        legendType: action.legendType
      });
    case CHARTING_ACTIONS.SET_ANIMATION_BEGIN:
      return Object.assign({}, state, {
        animationBegin: action.animationBegin
      });
    case CHARTING_ACTIONS.SET_ANIMATION_DURATION:
      return Object.assign({}, state, {
        animationDuration: action.animationDuration
      });
    case CHARTING_ACTIONS.SET_ANIMATION_EASING:
      return Object.assign({}, state, {
        animationEasing: action.animationEasing
      });
    default:
      return state;
  }
};

export default chartsReducer;
