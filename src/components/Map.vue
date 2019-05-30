<template>
  <GmapMap
    :center="place ? place : center"
    :zoom="18"
    class="map"
    :class="{'map--visible' : visible}"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="{lat: m.latitude, lng: m.longitude}"
      @click="handleMarkerClick({lat: m.latitude, lng: m.longitude})"
    />
  </GmapMap>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";

export default {
  props: ["visible", "place"],
  data() {
    return {
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
    handleMarkerClick({ lat, lng }) {
      this.$emit("center", { lat, lng });
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

@media only screen and (max-width: 889px) {
  .map {
    width: 90vw;
  }
}
</style>
