/**
 * @license
 * Copyright 2025 Google LLC
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

import { SpecVersion, type ColorSpecDelegate } from "./color_spec";
import { ColorSpecDelegateImpl2021 } from "./color_spec_2021";
import { ColorSpecDelegateImpl2025 } from "./color_spec_2025";

export const spec_2021 = new ColorSpecDelegateImpl2021();
export const spec_2025 = new ColorSpecDelegateImpl2025();

/**
 * Returns the ColorSpecDelegate for the given spec version.
 */
export function getSpec(specVersion: SpecVersion): ColorSpecDelegate {
  switch (specVersion) {
    case SpecVersion.SPEC_2021:
      return spec_2021;
    case SpecVersion.SPEC_2025:
      return spec_2025;
    default:
      throw new Error(`Unsupported spec version: ${specVersion}`);
  }
}
