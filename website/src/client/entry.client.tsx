import { hydrateRoot } from "react-dom/client";

import { startTransition, StrictMode } from "react";

import { HydratedRouter } from "react-router/dom";

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <HydratedRouter />
      </StrictMode>,
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  window.setTimeout(hydrate, 1);
}
