import { CHARTING_ACTIONS } from "../constants";

export const setEnableChartAnimations = (enable: boolean) => {
  return { type: CHARTING_ACTIONS.ENABLE_ANIMATIONS, animations: enable };
};

export const setLineType = (type: string) => {
  return { type: CHARTING_ACTIONS.SET_LINE_TYPE, lineType: type };
};

export const setLegendType = (type: string) => {
  return { type: CHARTING_ACTIONS.SET_LEGEND_TYPE, legendType: type };
};

export const setAnimationBegin = (value: number) => {
  return { type: CHARTING_ACTIONS.SET_ANIMATION_BEGIN, animationBegin: value };
};

export const setAnimationDuration = (value: number) => {
  return {
    type: CHARTING_ACTIONS.SET_ANIMATION_DURATION,
    animationDuration: value
  };
};

export const setAnimationEasing = (value: string) => {
  return {
    type: CHARTING_ACTIONS.SET_ANIMATION_EASING,
    animationEasing: value
  };
};
