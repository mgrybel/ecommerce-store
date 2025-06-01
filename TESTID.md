# Locating elements by a test id

The **getByTestId** locator is a Playwright method that targets elements based on a **data-testid** attribute embedded in the HTML.

#### data-testid attributes added to the login page

https://localhost:3000/login <br />

- [Email](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#L71) input field: `data-testid='email'`
- [Password](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#L81) input field: `data-testid='password'`
- [Sign in](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#L88) button: `data-testid='signIn'`
- [Sign up](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#L100) link: `data-testid='signUp'`

#### data-testid attributes added to the registration page

https://localhost:3000/register <br />

- [Email](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/RegisterForm.tsx?plain=1#L82) input field: `data-testid='email'`
- [Password](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/RegisterForm.tsx?plain=1#L92) input field: `data-testid='password'`
- [Create an Account](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/RegisterForm.tsx?plain=1#L99) button: `data-testid='createAccount'`
- [Sign in](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/RegisterForm.tsx?plain=1#L111) link: `data-testid='signIn'`

#### data-testid attributes added to the header

- [Logo](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L63): `data-testid='logo'`
- [Products](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L103) button: `testId='products'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L37) component
- [Orders](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L120) button: `testId='orders'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L37) component
- [Inventory](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L128) button: `testId='inventory'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L37) component
- [Logout](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L150) button: `data-testid='logout'`
- [Login](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L162) button `testId='login'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L37) component
- [Register](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L169) button: `testId='register'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L37) component
- [Cart](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L177) button: `data-testid='cart'`

#### data-testid attributes added to the sidebar (available on mobile)

- [Logo](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L60): `data-testid='logo'`
- [Products](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L94) button: `testId='products'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L37) component
- [Orders](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L105) button: `testId='orders'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L37) component
- [Inventory](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L115) button: `testId='inventory'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L37) component
- [Logout](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L139) button: `data-testid='logout'`
- [Login](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L153) button: `testId='login'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L37) component
- [Register](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L162) button: `testId='register'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L37) component
- [Cart](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L173) button: `data-testid='cart'`

#### data-testid attributes added to the home page

https://localhost:3000/ <br />

- [Go to store](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/Hero.tsx?plain=1#L66) button: `data-testid='catalog'`
- [Contact us](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/Hero.tsx?plain=1#L94) button: `data-testid='contact'`
- [All](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/FeaturedProducts.tsx?plain=1#L53) tab: `data-testid='all'`
- [New arrivals](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/FeaturedProducts.tsx?plain=1#L58) tab: `data-testid='newArrivals'`
- [Bestsellers](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/FeaturedProducts.tsx?plain=1#L64) tab: `data-testid='bestsellers'`
- [Top rated](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/FeaturedProducts.tsx?plain=1#L70) tab: `data-testid='topRated'`
- [Previous](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/MainCarousel.tsx?plain=1#L42) button on the carousel: `data-testid='previous'`
- [Next](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/MainCarousel.tsx?plain=1#L72) button on the carousel: `data-testid='next'`
- [Enter your email](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/CallToAction.tsx?plain=1#L85) input field: `data-testid='email'`
- [Subscribe](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/CallToAction.tsx?plain=1#L107) button: `data-testid='subscribe'`
- [Scroll to the top](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Layout.tsx?plain=1#L88) button at the bottom on the left: `data-testid='scrollToTop'`

#### data-testid attributes added to the products page

https://localhost:3000/catalog <br />

- [Search](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/catalog/Search.tsx?plain=1#L33) input field: `data-testid='search'`
- [Reset filters](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/catalog/Filters.tsx?plain=1#L73) button: `data-testid='reset'`
- [Add to cart](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/catalog/ProductCard.tsx?plain=1#L58) button: `data-testid='addToCart'`
- [View](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/catalog/ProductCard.tsx?plain=1#L66) button: `` data-testid={`view${product.id}`} ``

#### data-testid attributes added to the product details page

https://localhost:3000/catalog/10 <br />

- [Quantity in cart](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/catalog/ProductDetails.tsx?plain=1#L154) input field: `data-testid='quantity'`
- [Add to cart / Update quantity](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/catalog/ProductDetails.tsx?plain=1#L169) button: `data-testid={item ? 'update' : 'add'}`

#### data-testid attributes added to the cart page

https://localhost:3000/cart <br />

- [Decrease](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/cart/CartItem.tsx?plain=1#L69) button (minus sign): `data-testid='decrease'`
- [Increase](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/cart/CartItem.tsx?plain=1#L80) button (plus sign): `data-testid='increase'`
- [Remove](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/cart/CartItem.tsx?plain=1#L105) button (X sign): `data-testid='remove'`
- [Checkout](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/OrderSummary.tsx?plain=1#L78) button: `data-testid='checkout'`
- [Continue shopping](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/OrderSummary.tsx?plain=1#L88) button: `data-testid='continue'`

#### data-testid attributes added to the checkout page

https://localhost:3000/checkout <br />

https://localhost:3000/checkout/success <br />

- [Back](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/checkout/CheckoutStepper.tsx?plain=1#L212) button: `data-testid='back'`
- [Next / Pay](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/checkout/CheckoutStepper.tsx?plain=1#L224) button: `data-testid={activeStep === steps.length - 1 ? 'pay' : 'next'}`
- [View your order](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/checkout/CheckoutSuccess.tsx?plain=1#L91) button: `data-testid='viewOrder'`

- [Continue shopping](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/checkout/CheckoutSuccess.tsx?plain=1#L101) button: `data-testid='continue'`

#### data-testid attributes added to the order page

https://localhost:3000/orders <br />

https://localhost:3000/orders/3 <br />

- [View](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/orders/OrdersPage.tsx?plain=1#L101) button: `data-testid='view'`
- [Back to orders](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/orders/OrderDetailsPage.tsx?plain=1#L75) button: `data-testid='back'`

#### data-testid attributes added to the inventory page

https://localhost:3000/Inventory <br />

- [Create](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/admin/InventoryPage.tsx?plain=1#L73) button: `data-testid='create'`
- [Edit](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/admin/InventoryPage.tsx?plain=1#L147) button: `data-testid={`edit${product.id}`}`
- [Delete](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/admin/InventoryPage.tsx?plain=1#L154) button: `data-testid={`delete${product.id}`}`
- [Cancel] (https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/admin/ProductForm.tsx?plain=1#L180) button: `data-testid='cancel'`
- [Submit](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/admin/ProductForm.tsx?plain=1#L190) button: `data-testid='submit'`
