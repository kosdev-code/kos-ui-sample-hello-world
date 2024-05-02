import type { IKosRegistry } from '@kosdev-code/kos-ui-sdk';
import { CoreModels } from '@kosdev-code/kos-ui-sdk';
import { DispenserModels } from '@kosdev-code/kos-dispense-sdk';

export const kosModels: IKosRegistry['models'] = {
  ...CoreModels,
  ...DispenserModels,
};

export const Registry: IKosRegistry = {
  models: kosModels,
  preloadModels: [],
};
