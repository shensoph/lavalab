import { createContext, useCallback, useRef } from 'react';

const DURATION_MS = 700;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/** Genie-style: slight arc upward then into cart, with scale down */
function runGenieAnimation(cartRef, flyData, onComplete) {
  const { sourceRect, imageSrc } = flyData;
  const cartEl = cartRef.current;
  if (!cartEl || !sourceRect || !imageSrc) {
    onComplete?.();
    return;
  }

  const cartRect = cartEl.getBoundingClientRect();
  const fly = document.createElement('div');
  fly.className = 'genie-fly';
  fly.setAttribute('aria-hidden', 'true');

  const img = document.createElement('img');
  const src = typeof imageSrc === 'string' ? imageSrc : (imageSrc?.default ?? imageSrc);
  img.src = typeof src === 'string' ? src : '';
  img.alt = '';
  img.className = 'genie-fly-img';
  fly.appendChild(img);

  const startCenterX = sourceRect.left + sourceRect.width / 2;
  const startCenterY = sourceRect.top + sourceRect.height / 2;
  const endCenterX = cartRect.left + cartRect.width / 2;
  const endCenterY = cartRect.top + cartRect.height / 2;

  fly.style.cssText = `
    position: fixed;
    left: ${sourceRect.left}px;
    top: ${sourceRect.top}px;
    width: ${sourceRect.width}px;
    height: ${sourceRect.height}px;
    z-index: 9999;
    pointer-events: none;
    transform-origin: center center;
  `;

  document.body.appendChild(fly);

  const start = performance.now();

  const step = (now) => {
    const elapsed = now - start;
    const t = Math.min(elapsed / DURATION_MS, 1);
    const eased = easeInOutCubic(t);

    // Slight arc: lift a bit in the middle (genie curve)
    const arc = Math.sin(Math.PI * eased);
    const arcOffset = -35 * arc;

    const centerX = startCenterX + (endCenterX - startCenterX) * eased;
    const centerY = startCenterY + (endCenterY - startCenterY) * eased + arcOffset;

    const scale = 1 - 0.9 * eased;
    const w = sourceRect.width * scale;
    const h = sourceRect.height * scale;

    fly.style.left = `${centerX - w / 2}px`;
    fly.style.top = `${centerY - h / 2}px`;
    fly.style.width = `${w}px`;
    fly.style.height = `${h}px`;
    fly.style.opacity = 1 - 0.4 * eased;

    if (t < 1) {
      requestAnimationFrame(step);
    } else {
      fly.remove();
      onComplete?.();
    }
  };

  requestAnimationFrame(step);
}

export const CartAnimationContext = createContext(null);

export function CartAnimationProvider({ children }) {
  const cartRef = useRef(null);

  const runAnimation = useCallback(
    (flyData, onComplete) => runGenieAnimation(cartRef, flyData, onComplete),
    []
  );

  const value = { cartRef, runGenieAnimation: runAnimation };

  return (
    <CartAnimationContext.Provider value={value}>
      {children}
    </CartAnimationContext.Provider>
  );
}
