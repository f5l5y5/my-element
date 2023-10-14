'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../utils/index.js');
var popper$1 = require('./src/popper.js');
var arrow = require('./src/arrow2.js');
var trigger = require('./src/trigger.js');
var content = require('./src/content.js');
var popper = require('./src/popper2.js');
var trigger$1 = require('./src/trigger2.js');
var content$1 = require('./src/content2.js');
var arrow$1 = require('./src/arrow.js');
var install = require('../../utils/vue/install.js');

const ElPopper = install.withInstall(popper$1["default"]);

exports.ElPopperArrow = arrow["default"];
exports.ElPopperTrigger = trigger["default"];
exports.ElPopperContent = content["default"];
exports.Effect = popper.Effect;
exports.roleTypes = popper.roleTypes;
exports.usePopperProps = popper.usePopperProps;
exports.usePopperTriggerProps = trigger$1.usePopperTriggerProps;
exports.usePopperContentEmits = content$1.usePopperContentEmits;
exports.usePopperContentProps = content$1.usePopperContentProps;
exports.usePopperCoreConfigProps = content$1.usePopperCoreConfigProps;
exports.usePopperArrowProps = arrow$1.usePopperArrowProps;
exports.ElPopper = ElPopper;
exports["default"] = ElPopper;
//# sourceMappingURL=index.js.map