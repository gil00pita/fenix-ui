import { PresetColorTypes } from '@fenix-ui/utils/lib/colors';

// eslint-disable-next-line import/prefer-default-export
export function isPresetColor(color?: string): boolean {
  return (PresetColorTypes as any[]).indexOf(color) !== -1;
}
