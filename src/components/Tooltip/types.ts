import type { Placement, Options } from '@popperjs/core'

export interface TooltipProps {
  content?: string;
  trigger?: 'hover' | 'click';
  placement?: Placement;
  manual?: boolean;
  popperOptions?: Partial<Options>;  // 将 Options 中的属性都变为可选的
}

export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void
}

export interface TooltipInstance {
  show: () => void;
  hide: () => void;
}