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

import { describe, it, expect } from "vitest";

import { Hct } from "../hct/hct";

import { DislikeAnalyzer } from "./dislike_analyzer";

describe("dislike analyzer", () => {
  it("likes Monk Skin Tone Scale colors", () => {
    // From https://skintone.google#/get-started
    const monkSkinToneScaleColors = [
      0xfff6ede4, 0xfff3e7db, 0xfff7ead0, 0xffeadaba, 0xffd7bd96, 0xffa07e56,
      0xff825c43, 0xff604134, 0xff3a312a, 0xff292420,
    ];
    for (const color of monkSkinToneScaleColors) {
      expect(DislikeAnalyzer.isDisliked(Hct.fromInt(color))).toBe(false);
    }
  });

  it("dislikes bile colors", () => {
    const unlikable = [
      0xff95884b, 0xff716b40, 0xffb08e00, 0xff4c4308, 0xff464521,
    ];
    for (const color of unlikable) {
      expect(DislikeAnalyzer.isDisliked(Hct.fromInt(color))).toBe(true);
    }
  });

  it("makes bile colors likable", () => {
    const unlikable = [
      0xff95884b, 0xff716b40, 0xffb08e00, 0xff4c4308, 0xff464521,
    ];
    for (const color of unlikable) {
      const hct = Hct.fromInt(color);
      expect(DislikeAnalyzer.isDisliked(hct)).toBe(true);
      const likable = DislikeAnalyzer.fixIfDisliked(hct);
      expect(DislikeAnalyzer.isDisliked(likable)).toBe(false);
    }
  });

  it("likes tone 67 colors", () => {
    const color = Hct.from(100.0, 50.0, 67.0);
    expect(DislikeAnalyzer.isDisliked(color)).toBe(false);
    expect(DislikeAnalyzer.fixIfDisliked(color).toInt()).toEqual(color.toInt());
  });
});
