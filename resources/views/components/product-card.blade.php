@props(['product', 'pill' => false])

{{--
    Product card with premium micro-interactions.
    Styles: resources/css/product-card.css (include via Vite/@import or public/css).
    All cart / wishlist / deal / stock / rating / points logic is unchanged.
--}}
<div {{ $attributes->merge(['class' => 'product-card group relative bg-white']) }}>
    @auth
        <div
            x-data="{ wishlisted: {{ in_array($product->id, $wishlistedProductIds ?? []) ? 'true' : 'false' }}, loading: false }"
            class="absolute top-2.5 right-2.5 z-10"
        >
            <button
                type="button"
                aria-label="Toggle wishlist"
                :aria-pressed="wishlisted"
                @click="
                    if (loading) return;
                    loading = true;
                    fetch('{{ route('wishlist.toggle', $product) }}', {
                        method: 'POST',
                        headers: { 'X-CSRF-TOKEN': '{{ csrf_token() }}', 'Accept': 'application/json' },
                    }).then(r => r.json()).then(data => { wishlisted = data.added; }).catch(() => {}).finally(() => loading = false);
                "
                class="btn-scale w-7 h-7 rounded-full bg-white/95 shadow-sm ring-1 ring-black/5 flex items-center justify-center hover:bg-white disabled:opacity-60"
            >
                <svg
                    class="w-3.5 h-3.5 transition-colors"
                    :class="wishlisted ? 'fill-danger-500 stroke-danger-500' : 'fill-none stroke-inkmuted'"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
            </button>
        </div>
    @endauth

    <a href="{{ route('products.show', $product->slug) }}" class="block">
        {{-- object-contain (not cover) so the complete product image is always visible, never cropped;
             the container height stays fixed so every card in a row remains the same size. --}}
        <div class="product-card-image relative h-32 sm:h-36 bg-white overflow-hidden border rounded-[10px] group">
            <span class="product-card-shine" aria-hidden="true"></span>

            @if ($product->image)
                <img
                    src="{{ asset('public/storage/'.$product->image) }}"
                    class="w-full h-full object-contain"
                    alt="{{ $product->name }}"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                >
                <div class="w-full h-full hidden flex-col items-center justify-center gap-1 bg-brand-50/60 text-inkmuted relative z-[1]">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 6h16v12H4V6z"
                        />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 4l16 16" />
                    </svg>
                    <span class="text-[10px] font-medium">No Image Found</span>
                </div>
            @else
                <x-product-image-placeholder :name="$product->name" />
            @endif

            @if ($product->has_active_deal)
                <span
                    x-data="{ end: {{ $product->deal_ends_at->timestamp * 1000 }}, left: '' }"
                    x-init="setInterval(() => { const d = end - Date.now(); left = d > 0 ? new Date(d).toISOString().substr(11,8) : 'Ended'; }, 1000)"
                    class="product-card-timer absolute bottom-2 left-2 z-[3] bg-dark/90 text-brand-400 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm"
                    x-text="'⚡ ' + left"
                ></span>
            @endif

            @if ($product->stock_qty <= 0)
                <div class="product-card-oos absolute inset-0 z-[3] bg-white/70 flex items-center justify-center">
                    <span class="product-card-oos-badge bg-dark text-white text-[11px] font-bold px-3 py-1 rounded-full">
                        Out of Stock
                    </span>
                </div>
            @endif
        </div>
    </a>

    <div class="product-card-content pt-2 flex flex-col">
        <div class="flex items-center justify-between gap-1.5">
            <div class="flex items-baseline gap-1.5 min-w-0">
                <span class="font-display font-extrabold text-ink text-[15px] shrink-0 border-[0.5px] border-[#084121] rounded-[6px] shadow-[1.5px_1.5px_#084121] text-[#fefafa] inline-flex text-[15px] font-extrabold bg-[#329537] leading-6 pt-1 px-1.5 text-center">
                    ₹{{ number_format($product->effective_price, 0) }}
                </span>
                @if ($product->mrp > $product->effective_price)
                    <span class="text-[15px] text-inkmuted line-through truncate">
                        ₹{{ number_format($product->mrp, 0) }}
                    </span>
                @endif
            </div>
        </div>

        <div class="items-center flex">
            <div class="qaz">
                @if ($product->discount_percent > 0)
                    <span class="product-card-discount text-[#119711] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {{ $product->discount_percent }}% OFF
                    </span>
                @endif
            </div>
            <div class="bg-[repeating-linear-gradient(90deg,#d0d5dd,#d0d5dd_4px,transparent_0,transparent_8px)] flex-1 h-px min-w-[20px]"></div>
        </div>

        <a href="{{ route('products.show', $product->slug) }}" class="block">
            <div class="product-card-name text-sm font-semibold text-ink leading-snug line-clamp-2">
                {{ $product->name }}
            </div>
            <div class="text-xs text-inkmuted mt-1">{{ $product->unit }}</div>

            @if ($product->stock_qty <= 0)
                <div class="product-card-stock text-[11px] font-semibold text-danger-500 mt-1">
                    Out of Stock
                </div>
            @elseif ($product->stock_qty <= 5)
                <div class="product-card-stock text-[11px] font-semibold text-ink mt-1">
                    Only {{ $product->stock_qty }} left
                </div>
            @else
                <div class="product-card-stock text-[11px] font-medium text-brand-700 mt-1">
                    In Stock
                </div>
            @endif

            @if ($product->rating_count > 0)
                <div class="product-card-rating flex items-center gap-1 mt-1.5">
                    <span class="flex items-center gap-0.5 text-[10px] text-brand-800 font-bold bg-brand-50 rounded-full px-1.5 py-0.5">
                        <svg class="w-2.5 h-2.5 fill-brand-600" viewBox="0 0 20 20">
                            <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
                        </svg>
                        {{ number_format($product->avg_rating, 1) }}
                    </span>
                    <span class="text-[10px] text-inkmuted">({{ $product->rating_count }})</span>
                </div>
            @endif
        </a>

        <div class="bmg absolute bottom-[150px] justify-end flex w-full right-2">
            @unless ($pill)
                <div class="shrink-0 flex justify-end">
                    @if ($product->stock_qty <= 0)
                        <span
                            class="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center cursor-not-allowed"
                            aria-label="Out of stock"
                        >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                        </span>
                    @elseif (auth()->check())
                        <div x-data="{ loading: false, added: false }">
                            <button
                                type="button"
                                :disabled="loading"
                                aria-label="Add to cart"
                                @click="
                                    if (loading) return;
                                    loading = true;

                                    fetch('{{ route('cart.add') }}', {
                                        method: 'POST',
                                        headers: {
                                            'X-CSRF-TOKEN': '{{ csrf_token() }}',
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            product_id: {{ $product->id }}
                                        })
                                    })
                                    .then(response => response.json())
                                    .then(data => {
                                        if (data.success) {
                                            window.showToast && window.showToast(
                                                'success',
                                                data.message
                                            );

                                            window.updateCartBadge &&
                                            window.updateCartBadge(data.cartCount);

                                            $store.cart.add({
                                                id: {{ $product->id }},
                                                name: @js($product->name),
                                                price: {{ $product->effective_price }},
                                                image: '{{ $product->image ? asset('public/storage/'.$product->image) : '' }}',
                                            });

                                            added = true;
                                            setTimeout(() => (added = false), 1200);
                                        } else {
                                            window.showToast && window.showToast(
                                                'error',
                                                data.message
                                            );
                                        }
                                    })
                                    .catch(error => {
                                        console.error('Add to cart error:', error);

                                        window.showToast && window.showToast(
                                            'error',
                                            'Something went wrong. Please try again.'
                                        );
                                    })
                                    .finally(() => {
                                        loading = false;
                                    });
                                "
                                class="product-card-add btn-scale border-[0.5px] rounded-[6px] inline-flex items-center justify-center text-[15px] font-extrabold leading-6 pt-1 px-1.5 text-center transition-all duration-200 disabled:opacity-60"
                                :class="added
                                    ? 'border-[#329537] bg-[#329537] text-white shadow-[1.5px_1.5px_#084121] scale-105 is-added'
                                    : 'border-[#329537] shadow-[1.5px_1.5px_#329537] text-[#329537] bg-white'"
                                :data-added="added"
                            >
                                <template x-if="!added">
                                    <span>ADD</span>
                                </template>
                                <template x-if="added">
                                    <span class="flex items-center gap-1">
                                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                </template>
                            </button>
                        </div>
                    @else
                        <a
                            href="{{ route('login') }}"
                            class="product-card-add shadow-[2px_2px_#329537] btn-scale rounded-full text-brand-600 border border-brand-600 bg-white flex items-center justify-center shadow-sm hover:shadow-glow transition-all py-1 px-[19px] relative mb-2 mr-2 font-bold"
                            aria-label="Login to add to cart"
                        >
                            ADD
                        </a>
                    @endif
                </div>
            @endunless
        </div>

        @if ($pill && $product->stock_qty <= 0)
            <div class="mt-2.5">
                <span class="block text-center w-full rounded-full bg-gray-200 text-gray-500 text-xs font-bold py-2 cursor-not-allowed">
                    Out of Stock
                </span>
            </div>
        @elseif ($pill)
            {{-- Full-width pill "Add" button, used in the Flash Deals strip --}}
            <div class="mt-2.5">
                @auth
                    <div x-data="{ loading: false, added: false }">
                        <button
                            type="button"
                            :disabled="loading"
                            @click="
                                if (loading) return;
                                loading = true;
                                fetch('{{ route('cart.add') }}', {
                                    method: 'POST',
                                    headers: { 'X-CSRF-TOKEN': '{{ csrf_token() }}', 'Accept': 'application/json', 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ product_id: {{ $product->id }} }),
                                }).then(r => r.json()).then(data => {
                                    if (data.success) {
                                        window.showToast && window.showToast('success', data.message);
                                        window.updateCartBadge && window.updateCartBadge(data.cartCount);

                                        $store.cart.add({
                                            id: {{ $product->id }},
                                            name: @js($product->name),
                                            price: {{ $product->effective_price }},
                                            image: '{{ $product->image ? asset('public/storage/'.$product->image) : '' }}',
                                        });

                                        added = true;
                                        setTimeout(() => (added = false), 1200);
                                    } else {
                                        window.showToast && window.showToast('error', data.message);
                                    }
                                }).catch(() => {
                                    window.showToast && window.showToast('error', 'Something went wrong. Please try again.');
                                }).finally(() => loading = false);
                            "
                            class="product-card-pill btn-scale w-full rounded-full text-white text-xs font-bold py-2 shadow-sm hover:shadow-glow transition-all disabled:opacity-60"
                            :class="added ? 'bg-[#084121] is-added' : 'bg-brand-600 hover:bg-brand-700'"
                            :data-added="added"
                        >
                            <span x-show="!added">Add to Cart</span>
                            <span x-show="added" class="inline-flex items-center gap-1 justify-center">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                Added
                            </span>
                        </button>
                    </div>
                @else
                    <a
                        href="{{ route('login') }}"
                        class="product-card-pill btn-scale block text-center w-full rounded-full bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold py-2 shadow-sm hover:shadow-glow transition-all"
                    >
                        Add to Cart
                    </a>
                @endauth
            </div>
        @endif

        @if ($product->points_earned > 0)
            <div class="text-[11px] text-brand-700 font-semibold mt-2 flex items-center gap-1">
                <svg class="w-3 h-3 fill-brand-600" viewBox="0 0 20 20">
                    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
                </svg>
                Earn {{ $product->points_earned }} pts
            </div>
        @endif
    </div>
</div>
