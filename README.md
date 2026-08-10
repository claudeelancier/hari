# hari

## Product card animations

Premium Instagram/Reels-style micro-interactions for the Laravel Blade product card.

### Files

- `resources/views/components/product-card.blade.php` — Blade component (logic preserved)
- `resources/css/product-card.css` — reusable animation stylesheet
- `public/css/product-card.css` — same CSS for direct public include
- `public/demo/product-card.html` — static visual preview

### Include CSS

**Vite / Laravel Mix** — in `resources/css/app.css`:

```css
@import './product-card.css';
```

**Or** in your layout:

```blade
<link rel="stylesheet" href="{{ asset('css/product-card.css') }}">
```

### Optional grid class

Wrap product loops with `product-grid` (or `products-grid`) for staggered entry delays when each card is rendered via `<x-product-card>`:

```blade
<div class="product-grid grid grid-cols-2 sm:grid-cols-4 gap-3">
    @foreach ($products as $product)
        <x-product-card :product="$product" />
    @endforeach
</div>
```
