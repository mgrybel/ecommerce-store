# Locating elements by a test id

The **getByTestId** locator is a Playwright method that targets elements based on a **data-testid** attribute embedded in the HTML.

#### data-testid attributes added to the login page

https://localhost:3000/login <br />

- [Email](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#L70) input field: `data-testid='email'` <br />
- [Password](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#L79) input field: `data-testid='password'` <br />
- [Sign in](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#L85) button: `data-testid='signUp'` <br />
- [Sign up](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#L96) link: `data-testid='signUp'`

#### data-testid attributes added to the registration page

https://localhost:3000/register <br />

- [Email](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/RegisterForm.tsx?plain=1#L81) input field: `data-testid='email'` <br />
- [Password](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/RegisterForm.tsx?plain=1#L90) input field: `data-testid='password'` <br />
- [Create an Account](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/RegisterForm.tsx?plain=1#L96) button: `data-testid='createAccount'` <br />
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

- [Go to store](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/Hero.tsx?plain=1#65) button: data-testid='catalog'
- [Contact us](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/Hero.tsx?plain=1#92) button: data-testid='contact'
- [All](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/FeaturedProducts.tsx?plain=1#53) tab: data-testid='all'
- [New arrivals](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/FeaturedProducts.tsx?plain=1#57) tab: data-testid='newArrivals'
- [Bestsellers](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/FeaturedProducts.tsx?plain=1#62) tab: data-testid='bestsellers'
- [Top rated](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/FeaturedProducts.tsx?plain=1#64) tab: data-testid='topRated'
- [Previous](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/MainCarousel.tsx?plain=1#41) button on the carousel: data-testid='previous'
- [Next](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/MainCarousel.tsx?plain=1#70) button on the carousel: data-testid='next'
- [Enter your email](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/CallToAction.tsx?plain=1#84) input field: data-testid='email'
- [Subscribe](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/home/sections/CallToAction.tsx?plain=1#105) button: data-testid='subscribe'
- [Scroll to the top](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/layout/Layout.tsx?plain=1#L87) button at the bottom on the left: data-testid='scrollToTop'

#### data-testid attributes added to the product page

https://localhost:3000/catalog <br />

https://localhost:3000/catalog/10 <br />

#### data-testid attributes added to the cart page

https://localhost:3000/cart <br />

#### data-testid attributes added to the checkout page

https://localhost:3000/checkout <br />

https://localhost:3000/checkout/success <br />

#### data-testid attributes added to the order page

https://localhost:3000/orders <br />

https://localhost:3000/orders/3 <br />

#### data-testid attributes added to the inventory page

https://localhost:3000/Inventory <br />
