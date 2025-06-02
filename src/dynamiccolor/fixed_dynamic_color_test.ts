/**
 * @license
 * Copyright 2023 Google LLC
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

import "jasmine";

import { Hct } from "../hct/hct";
import { SchemeMonochrome } from "../scheme/scheme_monochrome";
import { SchemeTonalSpot } from "../scheme/scheme_tonal_spot";

import { MaterialDynamicColors } from "./material_dynamic_colors";

describe("fixed colors", () => {
  it("fixed colors in non-monochrome schemes", () => {
    const scheme = new SchemeTonalSpot(Hct.fromInt(0xffff0000), true, 0.0);

    expect(MaterialDynamicColors.primaryFixed.getHct(scheme).tone).toBeCloseTo(
      90.0,
      0
    );
    expect(
      MaterialDynamicColors.primaryFixedDim.getHct(scheme).tone
    ).toBeCloseTo(80.0, 0);
    expect(
      MaterialDynamicColors.onPrimaryFixed.getHct(scheme).tone
    ).toBeCloseTo(10.0, 0);
    expect(
      MaterialDynamicColors.onPrimaryFixedVariant.getHct(scheme).tone
    ).toBeCloseTo(30.0, 0);
    expect(
      MaterialDynamicColors.secondaryFixed.getHct(scheme).tone
    ).toBeCloseTo(90.0, 0);
    expect(
      MaterialDynamicColors.secondaryFixedDim.getHct(scheme).tone
    ).toBeCloseTo(80.0, 0);
    expect(
      MaterialDynamicColors.onSecondaryFixed.getHct(scheme).tone
    ).toBeCloseTo(10.0, 0);
    expect(
      MaterialDynamicColors.onSecondaryFixedVariant.getHct(scheme).tone
    ).toBeCloseTo(30.0, 0);
    expect(MaterialDynamicColors.tertiaryFixed.getHct(scheme).tone).toBeCloseTo(
      90.0,
      0
    );
    expect(
      MaterialDynamicColors.tertiaryFixedDim.getHct(scheme).tone
    ).toBeCloseTo(80.0, 0);
    expect(
      MaterialDynamicColors.onTertiaryFixed.getHct(scheme).tone
    ).toBeCloseTo(10.0, 0);
    expect(
      MaterialDynamicColors.onTertiaryFixedVariant.getHct(scheme).tone
    ).toBeCloseTo(30.0, 0);
  });

  it("fixed ARGB colors in non-monochrome schemes", () => {
    const scheme = new SchemeTonalSpot(Hct.fromInt(0xffff0000), true, 0.0);

    expect(scheme.primaryFixed).toBe(0xffffdad4);
    expect(scheme.primaryFixedDim).toBe(0xffffb4a8);
    expect(scheme.onPrimaryFixed).toBe(0xff3a0905);
    expect(scheme.onPrimaryFixedVariant).toBe(0xff73342a);
    expect(scheme.secondaryFixed).toBe(0xffffdad4);
    expect(scheme.secondaryFixedDim).toBe(0xffe7bdb6);
    expect(scheme.onSecondaryFixed).toBe(0xff2c1512);
    expect(scheme.onSecondaryFixedVariant).toBe(0xff5d3f3b);
    expect(scheme.tertiaryFixed).toBe(0xfffbdfa6);
    expect(scheme.tertiaryFixedDim).toBe(0xffdec48c);
    expect(scheme.onTertiaryFixed).toBe(0xff251a00);
    expect(scheme.onTertiaryFixedVariant).toBe(0xff564419);
  });

  it("fixed colors in light monochrome schemes", () => {
    const scheme = new SchemeMonochrome(Hct.fromInt(0xffff0000), false, 0.0);

    expect(MaterialDynamicColors.primaryFixed.getHct(scheme).tone).toBeCloseTo(
      40.0,
      0
    );
    expect(
      MaterialDynamicColors.primaryFixedDim.getHct(scheme).tone
    ).toBeCloseTo(30.0, 0);
    expect(
      MaterialDynamicColors.onPrimaryFixed.getHct(scheme).tone
    ).toBeCloseTo(100.0, 0);
    expect(
      MaterialDynamicColors.onPrimaryFixedVariant.getHct(scheme).tone
    ).toBeCloseTo(90.0, 0);
    expect(
      MaterialDynamicColors.secondaryFixed.getHct(scheme).tone
    ).toBeCloseTo(80.0, 0);
    expect(
      MaterialDynamicColors.secondaryFixedDim.getHct(scheme).tone
    ).toBeCloseTo(70.0, 0);
    expect(
      MaterialDynamicColors.onSecondaryFixed.getHct(scheme).tone
    ).toBeCloseTo(10.0, 0);
    expect(
      MaterialDynamicColors.onSecondaryFixedVariant.getHct(scheme).tone
    ).toBeCloseTo(25.0, 0);
    expect(MaterialDynamicColors.tertiaryFixed.getHct(scheme).tone).toBeCloseTo(
      40.0,
      0
    );
    expect(
      MaterialDynamicColors.tertiaryFixedDim.getHct(scheme).tone
    ).toBeCloseTo(30.0, 0);
    expect(
      MaterialDynamicColors.onTertiaryFixed.getHct(scheme).tone
    ).toBeCloseTo(100.0, 0);
    expect(
      MaterialDynamicColors.onTertiaryFixedVariant.getHct(scheme).tone
    ).toBeCloseTo(90.0, 0);
  });

  it("fixed colors in dark monochrome schemes", () => {
    const scheme = new SchemeMonochrome(Hct.fromInt(0xffff0000), true, 0.0);

    expect(MaterialDynamicColors.primaryFixed.getHct(scheme).tone).toBeCloseTo(
      40.0,
      0
    );
    expect(
      MaterialDynamicColors.primaryFixedDim.getHct(scheme).tone
    ).toBeCloseTo(30.0, 0);
    expect(
      MaterialDynamicColors.onPrimaryFixed.getHct(scheme).tone
    ).toBeCloseTo(100.0, 0);
    expect(
      MaterialDynamicColors.onPrimaryFixedVariant.getHct(scheme).tone
    ).toBeCloseTo(90.0, 0);
    expect(
      MaterialDynamicColors.secondaryFixed.getHct(scheme).tone
    ).toBeCloseTo(80.0, 0);
    expect(
      MaterialDynamicColors.secondaryFixedDim.getHct(scheme).tone
    ).toBeCloseTo(70.0, 0);
    expect(
      MaterialDynamicColors.onSecondaryFixed.getHct(scheme).tone
    ).toBeCloseTo(10.0, 0);
    expect(
      MaterialDynamicColors.onSecondaryFixedVariant.getHct(scheme).tone
    ).toBeCloseTo(25.0, 0);
    expect(MaterialDynamicColors.tertiaryFixed.getHct(scheme).tone).toBeCloseTo(
      40.0,
      0
    );
    expect(
      MaterialDynamicColors.tertiaryFixedDim.getHct(scheme).tone
    ).toBeCloseTo(30.0, 0);
    expect(
      MaterialDynamicColors.onTertiaryFixed.getHct(scheme).tone
    ).toBeCloseTo(100.0, 0);
    expect(
      MaterialDynamicColors.onTertiaryFixedVariant.getHct(scheme).tone
    ).toBeCloseTo(90.0, 0);
  });
});
