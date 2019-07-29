<template>
  <GmapMap
    :center="place ? place : center"
    :zoom="15"
    class="map"
    :class="{'map--visible' : visible}"
    :options="{disableDefaultUI: true, clickableIcons: false}"
  >
    <GmapCustomMarker
      :key="index"
      v-for="(m, index) in markers"
      :marker="{lat: m.latitude, lng: m.longitude}"
      @click.native="handleMarkerClick(m, index)"
    >
      <img src="../assets/bubble.png" alt="Conversation bubble" class="map__marker">
      <gmap-info-window
        :position="{lat: m.latitude, lng: m.longitude}"
        :opened="markerOpenIndex === index"
        @closeclick="markerOpenIndex=null"
      >
        <PsycologistDialog :data="m"></PsycologistDialog>
      </gmap-info-window>
    </GmapCustomMarker>
  </GmapMap>
</template>

<script>
import GmapCustomMarker from "vue2-gmap-custom-marker";
import firebase from "firebase";
import "firebase/firestore";
import PsycologistDialog from "../components/PsychologistDialog.vue";

export default {
  components: { GmapCustomMarker, PsycologistDialog },
  props: ["visible", "place"],
  data() {
    return {
      markerOpenIndex: null,
      center: { lat: 0, lng: 0 },
      markers: []
    };
  },
  async mounted() {
    const db = firebase.firestore();
    const results = await db.collection("psicologos").get();
    results.forEach(result => {
      this.markers.push(result.data());
    });

    navigator.geolocation.getCurrentPosition(position => {
      const {
        coords: { latitude, longitude }
      } = position;

      this.center = {
        lat: latitude,
        lng: longitude
      };
    });
  },
  methods: {
    handleMarkerClick(marker, index) {
      const position = {
        lat: marker.latitude,
        lng: marker.longitude
      };

      this.markerOpenIndex = index;
      this.$emit("center", marker);
    }
  }
};
</script>

<style>
.map {
  opacity: 0;
  z-index: 40;
  width: 80rem;
  height: 0rem;
  visibility: hidden;
  transition: all 0.2s;
  margin: 10rem auto 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.map--visible {
  height: 40rem;
  opacity: 1;
  visibility: visible;
}

.map__marker {
  width: 3rem;
  height: 3rem;
  cursor: pointer;
}

@media only screen and (max-width: 889px) {
  .map {
    width: 90vw;
  }
}
</style>
