<template>
  <div class="zone-wrap-module" id="bili_donghua">
    <div class="zone-module">
      <storey-box :storeydata="moduledata"></storey-box>
      <zone-rank :zoneRank="moduledata" :tag="0"></zone-rank>
    </div>
  </div>
</template>

<script>
import StoreyBox from ".@/components/StoreyBox";
import ZoneRank from "./ZoneRank";
export default {
  created() {},
  components: {
    StoreyBox,
    ZoneRank
  },
  props: {
    moduledata: {
      type: [Object, Array],
      default: () => []
    }
  },
  computed: {},
  data() {
    return {};
  },
  methods: {
    // videoinforevent(data){
    //     this.$emit('videoInfoxy',data)
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
