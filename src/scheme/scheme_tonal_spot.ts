/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { DynamicScheme } from "../dynamiccolor/dynamic_scheme";
import type { Platform } from "../dynamiccolor/platform";
import type { SpecVersion } from "../dynamiccolor/spec_version";
import { Variant } from "../dynamiccolor/variant";
import { Hct } from "../hct/hct";

/**
 * A Dynamic Color theme with low to medium colorfulness and a Tertiary
 * TonalPalette with a hue related to the source color.
 *
 * The default Material You theme on Android 12 and 13.
 *
 * @deprecated Use {@link DynamicScheme.from} instead.
 */
export class SchemeTonalSpot extends DynamicScheme {
  constructor(
    sourceColorHct: Hct,
    isDark: boolean,
    contrastLevel: number,
    specVersion: SpecVersion = DynamicScheme.DEFAULT_SPEC_VERSION,
    platform: Platform = DynamicScheme.DEFAULT_PLATFORM,
  ) {
    super({
      sourceColorHct,
      variant: Variant.TONAL_SPOT,
      contrastLevel,
      isDark,
      platform,
      specVersion,
    });
  }
}
