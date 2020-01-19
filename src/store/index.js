import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nowPlaying: {
      artist: '',
      track: '',
    },
    avaliableTracks: [
      {
        artist: 'Unit 21',
        track: 'Lets Have Fun',
      },
      {
        artist: 'Unit 21',
        track: 'Soccer Mom',
      },
      {
        artist: 'Unit 21',
        track: 'Rise Fall Repeat',
      },
    ],
    completedTracks: [

    ],
  },
  mutations: {
    set_NowPlaying_MUTA(state, payload) {
      if (state.nowPlaying.artist && state.nowPlaying.track) {
        state.completedTracks.push({
          artist: state.nowPlaying.artist,
          track: state.nowPlaying.track,
        });
      }
      state.nowPlaying.artist = payload.artist;
      state.nowPlaying.track = payload.track;
      state.avaliableTracks.splice(payload.index, 1);
    },
  },
  actions: {
    set_NowPlaying_ACTION({ commit }, payload) {
      console.log(payload);
      commit('set_NowPlaying_MUTA', payload);
    },

  },
  modules: {
  },
});
