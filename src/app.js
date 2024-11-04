import {createApp} from "vue";

const app = createApp({
  data () {
    return {
      hello: "Hi there 4"
    };
  },
  template: "<div id=\"app\">{{hello}}</div>"
});

export { app };
