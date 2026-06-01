const DEFAULT_SCOPE = "default";

export default function loading(state = 0, action) {
  const { type } = action;

  if (type === "SHOW_LOADING") {
    return state + 1;
  }

  if (type === "HIDE_LOADING") {
    return Math.max(0, state - 1);
  }

  return state;
}