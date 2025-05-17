# Locating elements by a test id

The **getByTestId** locator is a Playwright method that targets elements based on a **data-testid** attribute embedded in the HTML.

## data-testid attributes added to the login page

https://localhost:3000/login <br />

- [Email](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#L70) input field: `data-testid='email'` <br />
- [Password](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#L79) input field: `data-testid='password'` <br />
- [Sign in](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#85) button: `data-testid='signUp'` <br />
- [Sign up](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/LoginForm.tsx?plain=1#L96) link: `data-testid='signUp'`

## data-testid attributes added to the registration page

https://localhost:3000/register <br />

- [Email](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/RegisterForm.tsx?plain=1#L81) input field: `data-testid='email'` <br />
- [Password](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/RegisterForm.tsx?plain=1#L90) input field: `data-testid='password'` <br />
- [Create an Account](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/RegisterForm.tsx?plain=1#L96) button: `data-testid='createAccount'` <br />
- [Sign in](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/src/features/account/RegisterForm.tsx?plain=1#L107) link: `data-testid='signIn'`

## data-testid attributes added to header and sidebar

https://localhost:3000/ <br />

## data-testid attributes added to the home page

https://localhost:3000/ <br />

## data-testid attributes added to the product page

https://localhost:3000/catalog <br />

https://localhost:3000/catalog/10 <br />

## data-testid attributes added to the cart page

https://localhost:3000/cart <br />

## data-testid attributes added to the checkout page

https://localhost:3000/checkout <br />

https://localhost:3000/checkout/success <br />

## data-testid attributes added to the order page

https://localhost:3000/orders <br />

https://localhost:3000/orders/3 <br />

## data-testid attributes added to the inventory page

https://localhost:3000/Inventory <br />
