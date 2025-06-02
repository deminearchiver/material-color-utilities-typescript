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

import type { DynamicColor } from "./dynamic_color";
import { DynamicScheme } from "./dynamic_scheme";

export enum SpecVersion {
  SPEC_2021 = "2021",
  SPEC_2025 = "2025",
}

/**
 * A delegate that provides the dynamic color constraints for
 * MaterialDynamicColors.
 *
 * This is used to allow for different color constraints for different spec
 * versions.
 */
export interface ColorSpecDelegate {
  ////////////////////////////////////////////////////////////////
  // Main Palettes                                              //
  ////////////////////////////////////////////////////////////////

  primaryPaletteKeyColor(): DynamicColor;

  secondaryPaletteKeyColor(): DynamicColor;

  tertiaryPaletteKeyColor(): DynamicColor;

  neutralPaletteKeyColor(): DynamicColor;

  neutralVariantPaletteKeyColor(): DynamicColor;

  errorPaletteKeyColor(): DynamicColor;

  ////////////////////////////////////////////////////////////////
  // Surfaces [S]                                               //
  ////////////////////////////////////////////////////////////////

  background(): DynamicColor;

  onBackground(): DynamicColor;

  surface(): DynamicColor;

  surfaceDim(): DynamicColor;

  surfaceBright(): DynamicColor;

  surfaceContainerLowest(): DynamicColor;

  surfaceContainerLow(): DynamicColor;

  surfaceContainer(): DynamicColor;

  surfaceContainerHigh(): DynamicColor;

  surfaceContainerHighest(): DynamicColor;

  onSurface(): DynamicColor;

  surfaceVariant(): DynamicColor;

  onSurfaceVariant(): DynamicColor;

  inverseSurface(): DynamicColor;

  inverseOnSurface(): DynamicColor;

  outline(): DynamicColor;

  outlineVariant(): DynamicColor;

  shadow(): DynamicColor;

  scrim(): DynamicColor;

  surfaceTint(): DynamicColor;

  ////////////////////////////////////////////////////////////////
  // Primaries [P]                                              //
  ////////////////////////////////////////////////////////////////

  primary(): DynamicColor;

  primaryDim(): DynamicColor | undefined;

  onPrimary(): DynamicColor;

  primaryContainer(): DynamicColor;

  onPrimaryContainer(): DynamicColor;

  inversePrimary(): DynamicColor;

  ////////////////////////////////////////////////////////////////
  // Secondaries [Q]                                            //
  ////////////////////////////////////////////////////////////////

  secondary(): DynamicColor;

  secondaryDim(): DynamicColor | undefined;

  onSecondary(): DynamicColor;

  secondaryContainer(): DynamicColor;

  onSecondaryContainer(): DynamicColor;

  ////////////////////////////////////////////////////////////////
  // Tertiaries [T]                                             //
  ////////////////////////////////////////////////////////////////

  tertiary(): DynamicColor;

  tertiaryDim(): DynamicColor | undefined;

  onTertiary(): DynamicColor;

  tertiaryContainer(): DynamicColor;

  onTertiaryContainer(): DynamicColor;

  ////////////////////////////////////////////////////////////////
  // Errors [E]                                                 //
  ////////////////////////////////////////////////////////////////

  error(): DynamicColor;

  errorDim(): DynamicColor | undefined;

  onError(): DynamicColor;

  errorContainer(): DynamicColor;

  onErrorContainer(): DynamicColor;

  ////////////////////////////////////////////////////////////////
  // Primary Fixed Colors [PF]                                  //
  ////////////////////////////////////////////////////////////////

  primaryFixed(): DynamicColor;

  primaryFixedDim(): DynamicColor;

  onPrimaryFixed(): DynamicColor;

  onPrimaryFixedVariant(): DynamicColor;

  ////////////////////////////////////////////////////////////////
  // Secondary Fixed Colors [QF]                                //
  ////////////////////////////////////////////////////////////////

  secondaryFixed(): DynamicColor;

  secondaryFixedDim(): DynamicColor;

  onSecondaryFixed(): DynamicColor;

  onSecondaryFixedVariant(): DynamicColor;

  ////////////////////////////////////////////////////////////////
  // Tertiary Fixed Colors [TF]                                 //
  ////////////////////////////////////////////////////////////////

  tertiaryFixed(): DynamicColor;

  tertiaryFixedDim(): DynamicColor;

  onTertiaryFixed(): DynamicColor;

  onTertiaryFixedVariant(): DynamicColor;

  ////////////////////////////////////////////////////////////////
  // Other                                                      //
  ////////////////////////////////////////////////////////////////

  highestSurface: (s: DynamicScheme) => DynamicColor;
}
