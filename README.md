
# @materialx/material-color-utilities

<details>
  <summary><h3>Table of contents</h3></summary>

- [@materialx/material-color-utilities](#materialxmaterial-color-utilities)
  - [Installation](#installation)
  - [Usage](#usage)
    - [ARGB](#argb)
    - [HCT](#hct)
    - [Creating dynamic schemes](#creating-dynamic-schemes)
    - [Using dynamic colors](#using-dynamic-colors)
  - [About](#about)
    - [Theory behind MCU](#theory-behind-mcu)
    - [Capabilities Overview](#capabilities-overview)
    - [Learn about color science](#learn-about-color-science)
  - [License](#license)

</details>

Algorithms and utilities that power the Material Design 3 (M3) color system, including choosing theme colors from images and creating tones of colors; all in a new color space.

## Installation

```sh
npm install @materialx/material-color-utilities
# or
pnpm add @materialx/material-color-utilities
# or
yarn add @materialx/material-color-utilities
# or
bun add @materialx/material-color-utilities
```

## Usage

### ARGB

ARGB is a color format consisting of 4 components: alpha, red, green and blue.
Material Color Utilities operates solely on ARGB values, but there are some utilities which help converting between different color formats.

Converting between ARGB and hexadecimal color formats:

```typescript
import { argbFromHex, hexFromArgb } from "@materialx/material-color-utilities";

argbFromHex("#4285F4"); // Returns: `0xFF4285F4`
hexFromArgb(0xFF4285F4) // Returns: "#4285F4"
```

### HCT

Simple demonstration of HCT:
```typescript
import { Hct } from "@materialx/material-color-utilities";

const color = Hct.fromInt(0xFF4285F4);
console.log(`Hue: ${color.hue}`);
console.log(`Chrome: ${color.chroma}`);
console.log(`Tone: ${color.tone}`);
```

### Creating dynamic schemes

> [!NOTE]
>
> The `DynamicScheme` class has a default constructor, but most of its options are required.
> We recommend using the new `DynamicScheme.from` static method.
>
> When using `DynamicScheme.from`, `isDark` is the only required parameter (soon we could default it to `false` as well, although the probability of that happening is low).
>
> This method also has new `primaryPaletteKeyColor`, `secondaryPaletteKeyColor`, etc. options which allow supplying a custom `sourceColorHct` to the specified palette.

Creating a light color scheme:

```typescript
import { DynamicScheme, SpecVersion } from "@materialx/material-color-utilities";

const scheme = DynamicScheme.from({
  isDark: false,
  specVersion: SpecVersion.SPEC_2025
});
```

Creating a dark color scheme:

```typescript
import { DynamicScheme, SpecVersion } from "@materialx/material-color-utilities";

const scheme = DynamicScheme.from({
  isDark: true,
  specVersion: SpecVersion.SPEC_2025
});
```

Creating an "expressive" color scheme:

```typescript
import { DynamicScheme, Variant, SpecVersion } from "@materialx/material-color-utilities";

const scheme = DynamicScheme.from({
  isDark: false,
  variant: Variant.EXPRESSIVE,
  specVersion: SpecVersion.SPEC_2025
});
```

Creating high contrast color schemes:

> [!NOTE]
> Creating low contrast themes (i.e. `contrastLevel < 0`)
> is not longer possible with the introduction of the 2025 color spec.
> To create low contrast themes, `SpecVersion.SPEC_2021` must be used, altough it's not recommended.

```typescript
import { DynamicScheme, SpecVersion } from "@materialx/material-color-utilities";

const lightNormalContrast = DynamicScheme.from({
  isDark: false,
  contrastLevel: 0,
  specVersion: SpecVersion.SPEC_2025
});

const lightMediumContrast = DynamicScheme.from({
  isDark: false,
  contrastLevel: 0.5,
  specVersion: SpecVersion.SPEC_2025
});

const lightHighContrast = DynamicScheme.from({
  isDark: false,
  contrastLevel: 0.5,
  specVersion: SpecVersion.SPEC_2025
});

const darkNormalContrast = DynamicScheme.from({
  isDark: true,
  contrastLevel: 0,
  specVersion: SpecVersion.SPEC_2025
});

const darkMediumContrast = DynamicScheme.from({
  isDark: true,
  contrastLevel: 0.5,
  specVersion: SpecVersion.SPEC_2025
});

const darkHighContrast = DynamicScheme.from({
  isDark: true,
  contrastLevel: 0.5,
  specVersion: SpecVersion.SPEC_2025
});
```

Creating an "AMOLED" / "pure black" / "darker" color scheme:

```typescript
import { DynamicScheme, Variant, Platform, SpecVersion } from "@materialx/material-color-utilities";

const black = DynamicScheme.from({
  isDark: true, // `isDark: false` doesn't pair well with `Platform.WATCH`
  variant: Variant.EXPRESSIVE,
  platform: Platform.WATCH,
});

console.log(black.surface) // Always pure black (`0xFF000000`)
```

### Using dynamic colors

Get ARGB color values from a `DynamicScheme`:

```typescript
import { DynamicScheme, SpecVersion } from "@materialx/material-color-utilities";

const scheme = DynamicScheme.from({
  isDark: false,
  specVersion: SpecVersion.SPEC_2025
});

console.log(scheme.primary);
console.log(scheme.onPrimary);
console.log(scheme.secondaryContainer);
console.log(scheme.error);
console.log(scheme.tertiaryDim);
console.log(scheme.surfaceBright);
console.log(scheme.surfaceContainerLow);
```

Get an array of all dynamic colors:

```typescript
import { MaterialDynamicColors } from "@materialx/material-color-utilities";

const MATERIAL_DYNAMIC_COLORS = new MaterialDynamicColors();
const allDynamicColors = MATERIAL_DYNAMIC_COLORS.allDynamicColors;

for(const dynamicColor of allDynamicColors) {
  console.log(dynamicColor.name);
}
```

## About

### Theory behind MCU

Color is a powerful design tool and part of the Material system along with
styles like typography and shape. In products, colors and the way they are used
can be vast and varied. An app’s color scheme can express brand and style.
Semantic colors can communicate meaning. And color contrast control supports
visual accessibility.

In many design systems of the past, designers manually picked app colors to
support the necessary range of color applications and use cases. Material 3
introduces a dynamic color system, which does not rely on hand-picked colors.
Instead, it uses color algorithms to generate beautiful, accessible color
schemes based on dynamic inputs like a user’s wallpaper. This enables greater
flexibility, personalization, and expression, all while streamlining work for
designers and teams.

Material Color Ultilities (MCU) powers dynamic color with a set of color
libraries containing algorithms and utilities that make it easier for you to
develop color themes and schemes in your app.

<video autoplay muted loop src="https://user-images.githubusercontent.com/6655696/146014425-8e8e04bc-e646-4cc2-a3e7-97497a3e1b09.mp4" data-canonical-src="https://user-images.githubusercontent.com/6655696/146014425-8e8e04bc-e646-4cc2-a3e7-97497a3e1b09.mp4" class="d-block rounded-bottom-2 width-fit" style="max-width:640px;"></video>


### Capabilities Overview

<a href="https://github.com/material-foundation/material-color-utilities/raw/main/cheat_sheet.png">
    <img alt="library cheat sheet" src="https://github.com/material-foundation/material-color-utilities/raw/main/cheat_sheet.png" style="max-width:640px;" />
</a>

The library consists of various components, each having its own folder and
tests, designed to be as self-contained as possible. This enables seamless
integration of subsets into other libraries, like Material Design Components
and Android System UI. Some consumers do not require all components, for
example, MDC doesn’t need quantization, scoring, image extraction.

### Learn about color science

[The Science of Color & Design - Material Design](https://material.io/blog/science-of-color-design)


## License

```
Copyright 2021 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
