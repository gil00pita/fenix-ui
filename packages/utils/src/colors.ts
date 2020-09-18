import { ElementOf, tuple } from './type';

export const PresetStatusColorTypes = tuple('success', 'processing', 'error', 'default', 'warning');
// eslint-disable-next-line import/prefer-default-export
export const PresetColorTypes = tuple(
  'blue',
  'cyan',
  'geekblue',
  'gold',
  'green',
  'lime',
  'magenta',
  'orange',
  'pink',
  'purple',
  'red',
  'volcano',
  'yellow',
);

export type PresetColorType = ElementOf<typeof PresetColorTypes>;
export type PresetStatusColorType = ElementOf<typeof PresetStatusColorTypes>;
