# Locating elements by a test id

The **getByTestId** locator is a Playwright method that targets elements based on a **data-testid** attribute embedded in the HTML.

#### data-testid attributes added to the login page

https://localhost:3000/login <br />

- [Email](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#L70) input field: `data-testid='email'`
- [Password](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#L79) input field: `data-testid='password'`
- [Sign in](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#L85) button: `data-testid='signUp'`
- [Sign up](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#L96) link: `data-testid='signUp'`

#### data-testid attributes added to the registration page

https://localhost:3000/register <br />

- [Email](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/RegisterForm.tsx?plain=1#L81) input field: `data-testid='email'`
- [Password](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/RegisterForm.tsx?plain=1#L90) input field: `data-testid='password'`
- [Create an Account](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/RegisterForm.tsx?plain=1#L96) button: `data-testid='createAccount'`
- [Sign in](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/RegisterForm.tsx?plain=1#L107) link: `data-testid='signIn'`

#### data-testid attributes added to the header

- [Logo](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L59): `data-testid='logo'`
- [Products](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L97) button: `testId='products'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L35) component
- [Orders](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L113) button: `testId='orders'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L35) component
- [Inventory](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L120) button: `testId='inventory'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L35) component
- [Logout](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L141) button: `data-testid='logout'`
- [Login](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L152) button `testId='login'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L35) component
- [Register](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L158) button: `testId='register'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L35) component
- [Cart](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Header.tsx?plain=1#L165) button: `data-testid='cart'`

#### data-testid attributes added to the sidebar (available on mobile)

- [Logo](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L59): `data-testid='logo'`
- [Products](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L92) button: `testId='products'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L35) component
- [Orders](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L102) button: `testId='orders'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L35) component
- [Inventory](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L111) button: `testId='inventory'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L35) component
- [Logout](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L134) button: `data-testid='logout'`
- [Login](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L147) button: `testId='login'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L35) component
- [Register](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L155) button: `testId='register'` - `data-testid` in the [CustomButton](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/CustomButton.tsx?plain=1#L35) component
- [Cart](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Sidebar.tsx?plain=1#L165) button: `data-testid='cart'`

#### data-testid attributes added to the home page

https://localhost:3000/ <br />

- [Go to store](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/Hero.tsx?plain=1#L65) button: `data-testid='catalog'`
- [Contact us](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/Hero.tsx?plain=1#L92) button: `data-testid='contact'`
- [All](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/FeaturedProducts.tsx?plain=1#L53) tab: `data-testid='all'`
- [New arrivals](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/FeaturedProducts.tsx?plain=1#L57) tab: `data-testid='newArrivals'`
- [Bestsellers](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/FeaturedProducts.tsx?plain=1#L62) tab: `data-testid='bestsellers'`
- [Top rated](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/FeaturedProducts.tsx?plain=1#L64) tab: `data-testid='topRated'`
- [Previous](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/MainCarousel.tsx?plain=1#L41) button on the carousel: `data-testid='previous'`
- [Next](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/MainCarousel.tsx?plain=1#L70) button on the carousel: `data-testid='next'`
- [Enter your email](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/CallToAction.tsx?plain=1#L84) input field: `data-testid='email'`
- [Subscribe](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/CallToAction.tsx?plain=1#L105) button: `data-testid='subscribe'`
- [Scroll to the top](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Layout.tsx?plain=1#L87) button at the bottom on the left: `data-testid='scrollToTop'`

#### data-testid attributes added to the products page

https://localhost:3000/catalog <br />

- [Search](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/catalog/Search.tsx?plain=1#L32) input field: `data-testid='search'`
- [Reset filters](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/catalog/Filters.tsx?plain=1#L72) button: `data-testid='reset'`
- [Add to cart](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/catalog/ProductCard.tsx?plain=1#L57) button: `data-testid='addToCart'`
- [View](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/catalog/ProductCard.tsx?plain=1#L64) button: `` data-testid={`view${product.id}`} ``

#### data-testid attributes added to the product details page

https://localhost:3000/catalog/10 <br />

- [Quantity in cart](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/catalog/ProductDetails.tsx?plain=1#L153) input field: `data-testid='quantity'`
- [Add to cart / Update quantity](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/catalog/ProductDetails.tsx?plain=1#L167) button: `data-testid={item ? 'update' : 'add'}`

#### data-testid attributes added to the cart page

https://localhost:3000/cart <br />

- [Decrease](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/cart/CartItem.tsx?plain=1#L68) button (minus sign): `data-testid='decrease'`
- [Increase](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/cart/CartItem.tsx?plain=1#L78) button (plus sign): `data-testid='increase'`
- [Remove](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/cart/CartItem.tsx?plain=1#L102) button (X sign): `data-testid='remove'`
- [Checkout](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/OrderSummary.tsx?plain=1#L77) button: `data-testid='checkout'`
- [Continue shopping](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/components/OrderSummary.tsx?plain=1#L86) button: `data-testid='continue'`

#### data-testid attributes added to the checkout page

https://localhost:3000/checkout <br />

https://localhost:3000/checkout/success <br />

#### data-testid attributes added to the order page

https://localhost:3000/orders <br />

https://localhost:3000/orders/3 <br />

#### data-testid attributes added to the inventory page

https://localhost:3000/Inventory <br />
