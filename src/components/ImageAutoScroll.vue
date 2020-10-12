<template>
  <div class="screen">
    <div :style="{backgroundImage:'url('+longimage+')'}"></div>
    <a :href="link" target="blank">
      <h2>{{ undertext }}</h2>
    </a>
  </div>
</template>

<script>
export default {
    name: "ImageAutoScroll",
  props: {
    undertext: {
      type: String,
      default: "sous text"
    },
    longimage: {
      type: String,
      default: "http://vue.pixelstrap.com/tovo/static/img/index.94801d9.jpg"
    },
    link: {
      type: String
    }
  }, //props
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.screen {
  background-image: url("data:image/png;base64,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");
  background-repeat: no-repeat;
  width: 515px;
  height: 290px;
  display: inline-block;
  margin: 10px;
  padding-top: 12px;
  position: relative;
}
.screen div {
  display: inline-block;
  width: calc(100% - 52px);
  height: calc(100% - 60px);
  position: absolute;
  top: 15px;
  left: 25px;
  background-position: center top;
  background-repeat: no-repeat;
  -webkit-transition: all 2s;
  -moz-transition: all 2s;
  -ms-transition: all 2s;
  -o-transition: all 2s;
  transition: all 2s;
  background-size: cover;
}
.screen:hover div {
  background-position: center bottom;
  -webkit-transition: all 10s;
  -moz-transition: all 10s;
  -ms-transition: all 10s;
  -o-transition: all 10s;
  transition: all 10s;
}

.screen h2 {
  font-size: 17px;
  color: #888;
  font-weight: 300;
  position: absolute;
  bottom: -40px;
  text-align: center;
  width: 100%;
}
</style>
