import LangStorage from "../../helpers/lang";

const state = {
  lang: LangStorage.getLang("en")
};

const mutations = {
  UPDATE_HOME_LANG(state, payload) {
    state.lang = payload.lang;
  }
};

const actions = {};

export default {
  state,
  mutations,
  actions
};
