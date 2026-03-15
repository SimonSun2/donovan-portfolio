# Task 3.1: Animations & Interactions

**Assigned to**: WebDev  
**Priority**: P1  
**Estimated time**: 2-3 hours  
**Phase**: 3 - Polish & Enhancement  

---

## Goal

Add subtle, professional animations to enhance user experience without distracting from content.

---

## Requirements

### 1. Hero Section Fade-In (All Pages)
- Smooth fade-in animation on page load
- Stagger animation for hero elements (title → subtitle → CTA buttons)
- Duration: 300-500ms per element
- Easing: `ease-out`

### 2. Smooth Scroll Behavior
- Enable smooth scrolling for anchor links
- Apply to entire app (global CSS)
- Ensure scroll-behavior works across browsers

### 3. Project Cards Hover Effects
- Scale up slightly on hover (transform: scale(1.02-1.05))
- Add subtle shadow elevation
- Smooth transition (200-300ms)
- Apply to Projects page + Home page featured projects

### 4. Button Micro-Interactions
- Hover state: slight background color shift + scale
- Active state: scale down (0.98)
- Focus state: visible ring for accessibility
- Transition: 150-200ms

### 5. Page Transitions (Optional)
- Fade transition between route changes
- Keep it subtle and fast (200ms)

---

## Technical Constraints

1. **Performance**: Must run smoothly on mid-range devices
2. **Accessibility**: Respect `prefers-reduced-motion` media query
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```
3. **Bundle size**: Keep animation code minimal (<5KB)
4. **No external libraries**: Use CSS + React only (no Framer Motion, etc.)

---

## Deliverables

- [ ] Global CSS for smooth scroll + reduced motion
- [ ] Hero animations (Home, About, Projects, Skills, Contact)
- [ ] Project card hover effects
- [ ] Button micro-interactions (global button styles)
- [ ] Build verified: SUCCESS
- [ ] Files synced to MinIO

---

## Implementation Notes

- Use CSS transitions for simple effects (hover, focus)
- Use CSS keyframes for fade-in animations
- Consider creating a `useFadeIn` hook for reusable fade-in logic
- Test on mobile devices

---

## Completion Criteria

1. All animations implemented and working
2. Build successful (<1000ms)
3. No console errors
4. Tested with `prefers-reduced-motion` enabled
5. Git commit ready

---

**Start immediately. Report progress every 30-45 minutes.**
