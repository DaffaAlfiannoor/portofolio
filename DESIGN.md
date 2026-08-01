---
name: Elevated Precision
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#45464e'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#75777e'
  outline-variant: '#c6c6ce'
  surface-tint: '#525e7f'
  primary: '#182442'
  on-primary: '#ffffff'
  primary-container: '#2e3a59'
  on-primary-container: '#98a4c9'
  inverse-primary: '#bac6ec'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#6df5e1'
  on-secondary-container: '#006f64'
  tertiary: '#312300'
  on-tertiary: '#ffffff'
  tertiary-container: '#4a380c'
  on-tertiary-container: '#bca26c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#bac6ec'
  on-primary-fixed: '#0d1a38'
  on-primary-fixed-variant: '#3a4666'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#fddfa4'
  tertiary-fixed-dim: '#dfc38b'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#574417'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
---

## Brand & Style
The design system is engineered for a high-end personal portfolio that balances technical rigour with creative flair. The brand personality is authoritative yet approachable, aiming to evoke a sense of "quiet confidence" through meticulous alignment and intentional whitespace.

The visual style is **Minimalist with a Professional Modern twist**. It avoids unnecessary ornamentation, instead using scale, refined typography, and a sophisticated color palette to guide the user's attention. The interface should feel expansive, airy, and premium, reflecting the high standards of a senior creative professional.

## Colors
The palette is anchored by **Deep Slate Indigo** (#2E3A59), providing a foundation of stability and professional trust. This is contrasted by **Teal** (#14B8A6), used sparingly for high-impact calls to action and interactive accents.

The background uses a slightly off-white **Slate Gray tint** (#F8FAFC) to reduce screen glare and add a subtle layer of sophistication compared to pure white. Text is set in **Dark Charcoal** (#121212) to ensure AAA accessibility and crisp readability across all device types.

## Typography
This design system utilizes **Inter** exclusively to create a highly systematic, utilitarian, and clean typographic hierarchy. By varying weight and letter-spacing rather than typeface, we achieve a cohesive, modern look characteristic of top-tier SaaS and design portfolios.

- **Display scales** use heavy weights and negative letter-spacing for a bold, impactful entrance.
- **Body text** prioritizes legibility with a generous 1.6 line-height.
- **Labels** use uppercase styling and increased tracking to provide clear metadata markers and navigational cues.

## Layout & Spacing
The layout follows a **Fixed-Fluid hybrid grid**. On desktop, content is contained within a 1280px maximum width 12-column grid to maintain readability on ultra-wide monitors. On smaller screens, the grid transitions to a 4-column fluid model.

Spacing is governed by a strict 8px linear scale. Section vertical spacing is intentionally large (120px+) to create a "gallery" feel, ensuring that each project or portfolio piece receives the user's undivided attention. Margin and padding should be used aggressively to prevent visual clutter.

## Elevation & Depth
Depth is achieved through **Ambient Shadows** and **Tonal Layering**. Instead of heavy borders, the design system uses soft, multi-layered shadows with a low-opacity Indigo tint to make cards appear as if they are floating slightly above the background.

- **Level 0 (Base):** Background color (#F8FAFC).
- **Level 1 (Cards):** Pure white surface with a `0px 4px 20px rgba(46, 58, 89, 0.05)` shadow.
- **Level 2 (Interaction):** On hover, cards lift further with a `0px 12px 30px rgba(46, 58, 89, 0.1)` shadow.

This creates a tactile "physical" interface that responds to user movement without feeling heavy or dated.

## Shapes
The shape language is defined by **Balanced Roundedness**. A base radius of 8px (0.5rem) is applied to standard components like inputs and buttons, while larger containers like project cards use 16px (1rem) to feel more substantial and inviting.

This "Soft-Square" aesthetic bridges the gap between rigid professional corporate design and friendly, modern consumer interfaces.

## Components
### Buttons
- **Primary:** Solid Deep Indigo background, white text, 8px radius. Subtle lift on hover.
- **Secondary:** Transparent background with a 1.5px Teal border.
- **Ghost:** No background or border, Teal text. Used for low-priority actions.

### Cards
Portfolio cards should feature a large image area with a 1:1 or 4:3 aspect ratio. Text content within cards should be padded by at least 24px. Use a subtle 1px border (#E2E8F0) in addition to the Level 1 shadow for crisp definition.

### Chips/Tags
Used for "Skills" or "Tools." Small text, medium font weight, light gray background (#F1F5F9), and a pill-shaped radius.

### Input Fields
Clean, 1px Slate-300 border. On focus, the border transitions to Teal with a soft outer glow. Labels should always be visible above the input, never just as placeholders.

### Navigation
A sticky header with a backdrop-blur (12px) and 80% opacity background provides a "glass" effect that maintains context as the user scrolls through the portfolio.