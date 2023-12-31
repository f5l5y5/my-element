'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index.js');
require('../../../tokens/index.js');
var row = require('./row.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index.js');
var row$1 = require('../../../tokens/row.js');

const __default__ = vue.defineComponent({
  name: "ElRow"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: row.rowProps,
  setup(__props) {
    const props = __props;
    const ns = index.useNamespace("row");
    const gutter = vue.computed(() => props.gutter);
    vue.provide(row$1.rowContextKey, {
      gutter
    });
    const style = vue.computed(() => {
      const styles = {};
      if (!props.gutter) {
        return styles;
      }
      styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`;
      return styles;
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
        class: vue.normalizeClass([
          vue.unref(ns).b(),
          vue.unref(ns).is(`justify-${props.justify}`, _ctx.justify !== "start"),
          vue.unref(ns).is(`align-${props.align}`, _ctx.align !== "top")
        ]),
        style: vue.normalizeStyle(vue.unref(style))
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
var Row = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/Users/fuyunlong/Desktop/ruochuan/element-plus/packages/components/row/src/row.vue"]]);

exports["default"] = Row;
//# sourceMappingURL=row2.js.map
