import '../../utils/index.mjs';
import Popper from './src/popper.mjs';
export { default as ElPopperArrow } from './src/arrow2.mjs';
export { default as ElPopperTrigger } from './src/trigger.mjs';
export { default as ElPopperContent } from './src/content.mjs';
export { Effect, roleTypes, usePopperProps } from './src/popper2.mjs';
export { usePopperTriggerProps } from './src/trigger2.mjs';
export { usePopperContentEmits, usePopperContentProps, usePopperCoreConfigProps } from './src/content2.mjs';
export { usePopperArrowProps } from './src/arrow.mjs';
import { withInstall } from '../../utils/vue/install.mjs';

const ElPopper = withInstall(Popper);

export { ElPopper, ElPopper as default };
//# sourceMappingURL=index.mjs.map
