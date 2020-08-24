import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nowPlaying: {
      artist: '',
      track: '',
      played: '',
      replayed: '',
    },
    avaliableTracks: [
      {
        artist: 'Unit 21',
        track: 'Lets Have Fun',
        played: false,
        replayed: false,
      },
      {
        artist: 'Unit 21',
        track: 'Soccer Mom',
        played: false,
        replayed: false,
      },
      {
        artist: 'Unit 21',
        track: 'Rise Fall Repeat',
        played: false,
        replayed: false,
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
          played: state.nowPlaying.played,
          replayed: state.nowPlaying.replayed,
        });
      }
      state.nowPlaying.artist = payload.artist;
      state.nowPlaying.track = payload.track;
      state.nowPlaying.played = payload.played;
      state.nowPlaying.index = payload.index;
      if (payload.replayed) {
        state.completedTracks.splice(payload.index, 1);
      } else {
        state.avaliableTracks.splice(payload.index, 1);
      }
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
