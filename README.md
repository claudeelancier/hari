# TETHER · Runaway Login

Premium dark login surface for **TETHER** — a glassmorphic card, cyan ambient light, and a docked CTA that runs from a fine pointer until both fields are valid.

## Run

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Interaction

- Empty or partial form: the **Log in** pill slides away from the cursor inside the dock.
- One valid field: the flee force eases off (“it is slowing down”).
- Valid email + 8-character password: the pill holds and is magnetically attracted.
- **Tab** and **Enter** always submit when the form is valid, including on touch.
- Click: compress → `Signing in…` → `✓ Logged in`.

Zero runtime dependencies. Respects `prefers-reduced-motion`.
