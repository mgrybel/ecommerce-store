# E-commerce Store

This is an e-commerce store built using the **.NET Framework**, **React**, **Redux**, and **Material UI**. The application stores data in an **SQLite** database.

### Home page:

![plot](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/public/images/demo/e-commerce_store_home_page.png?raw=true)

### Product catalog:

![plot](https://github.com/mgrybel/ecommerce-store/blob/master/frontend/public/images/demo/e-commerce_store_products.png?raw=true)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Installation](#installation)
- [Running the application](#running-the-application)
- [Viewing the application](#viewing-the-application)
- [API documentation with Swagger](#api-documentation-with-swagger)
- [Contributing](#contributing)
- [Copyright and License](#copyright-and-license)

## Prerequisites

Install the following prerequisites:

1. [.NET 8.0](https://dotnet.microsoft.com/en-us/download)
2. [Node.js](https://nodejs.org/en/download)
3. [Visual Studio Code](https://code.visualstudio.com/download) with four extensions installed:

- [C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit)
- [NuGet Gallery](https://marketplace.visualstudio.com/items?itemName=patcx.vscode-nuget-gallery)
- [SQLite Viewer](https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

Other prerequisites:

1. A free [Stripe](https://dashboard.stripe.com/register) account
2. A free [Cloudinary](https://cloudinary.com/users/register_free) account

You can check the .NET Framework version using the following command:

```
dotnet --info
```

You can check the Node.js version using the following command:

```
node --version
```

## Setup

Download the project's code from this GitHub repository. Once you have downloaded and unzipped the project, open it in Visual Studio Code.<br /><br />

Before you install and start the application, you must first set up Cloudinary and Stripe, as well as backend and frontend environment variables for the project.

### Setting up Cloudinary

1. First, create a new, free Cloudinary account. Next, log in to Cloudinary.
2. On the Cloudinary Dashboard, in the **Product Environment** section, click **Go to API keys**.
3. Next, in Visual Studio Code, open the **backend/API/appsettings.json** file, and in the **Cloudinary** property, paste the values from the page **API Keys** in Cloudinary:

- set the value of the key **CloudName** to the value of the **Cloud name** from Cloudinary (copy and paste the value from Cloudinary, right next to the page title API Keys, on the light blue background)
- set the value of the key **ApiKey** to the value of the **API Key** from Cloudinary (copy and paste the value from Cloudinary)
- set the value of the key **ApiSecret** to the value of the value of the **API Secret** from Cloudinary (copy and paste the value from Cloudinary)

### Setting up Stripe

1. First, create a new, free Stripe account. Next, log in to Stripe.
2. On the Stripe dashboard, in the top left corner, select the **Create a new account** option.
3. In the modal window "Create a new account", set the name to **E-commerce Store** and the country of operation to the **United States**. Next, click the **Create** button.
4. On the next screen, click the **Go to Dashboard** button.
5. On the Stripe dashboard for the **E-commerce Store** sandbox, in the middle of the page on the right, there is a section called **API keys** with two keys: **Publishable key** and **Secret key**.
6. In Visual Studio Code, open the **backend/API/appsettings.Development.json** file and in the **StripeSettings** property:

- set the value of the key **PublishableKey** to the value of the **Publishable key** from the Stripe dashboard (copy and paste the value from the Stripe dashboard)
- set the value of the key **SecretKey** to the value of the **Secret key** from the Stripe dashboard (copy and paste the value from the Stripe dashboard)

7. Next, in Stripe, go to **Settings**, select **Payment methods**, and turn off all the payment methods except for **Cards** (this one should stay active).

### Setting up Stripe coupons

1. Log in to Stripe. On the Stripe dashboard, from the menu on the left, select **Product catalog**.
2. On the **Product catalog** page, select the **Coupons** tab and click the **Create test coupon** button.
3. For the new coupon, set the following values:

- Type: Percentage discount
- Percentage off: 10
- Duration: Forever
- Code: select the option "Use customer-facing code" and add code **FRIENDS10** in the Code input field

4. Next, click the **Create coupon** button.

### Stripe documentation

Here you can find Stripe [documentation](https://docs.stripe.com/testing) and learn more about testing Stripe integration and simulating payments.

### Setting up frontend environment variables

1. In Visual Studio Code, in the **frontend** directory, create a new file: **.env**

2. In this file, add the **VITE_API_URL** variable and set it as follows:

```
VITE_API_URL=https://localhost:5001/api
```

3. The second variable you need to add is **VITE_STRIPE_PK**, and you have to set it to the value of the **Publishable key** from the Stripe dashboard (it is the same value as in the **PublishableKey** in the **backend/API/appsettings.Development.json** file you've set up earlier):

```
VITE_STRIPE_PK=pk_test_your_publishable_key
```

## Installation

In Visual Studio Code, navigate to the menu on the top, click **Terminal**, and select **New Terminal**. Next, select **Split Terminal**.<br /><br />
As a result, you will have two Terminal windows side-by-side, and that will allow you to operate in parallel on the two Terminals and run commands for both the backend and frontend parts of the application at the same time.

### 1. Backend

In the first Terminal window, from the **root** directory, run the following command:

```
cd backend/API
```

First, you need to generate on your local machine a self-signed certificate that enables HTTPS use in local web application development. You can do that by running the following commands in the first Terminal window, from the **backend/api** directory:

```
dotnet dev-certs https --clean
```

```
dotnet dev-certs https --trust
```

After running these two commands, in the first Terminal window, you should see the message: "Successfully created and trusted a new HTTPS certificate."<br /><br />

Next, in the first Terminal window, from the **backend/api** directory, run the following command:

```
dotnet watch
```

### 2. Frontend

In the second Terminal window, from the **root** directory, run the following commands:

```
cd frontend
```

```
npm install
```

## Running the application

To run the application, you must have both the backend and frontend up and running.

### 1. Running the backend

To run the backend part of the application, in the first Terminal window, from the **backend/API** directory, run the following command:

```
dotnet watch
```

### 2. Running the frontend

To run the frontend part of the application, in the second Terminal window, from the **frontend** directory, run the following command:

```
npm run dev
```

## Viewing the application

Go to https://localhost:3000/ to view the application.<br /><br />

By default, there are created two user accounts:

1. **Admin**

- Email: admin@test.com
- Password: Pass12345!

2. **Customer**

- Email: bob@test.com
- Password: Pass12345!

## API documentation with Swagger

To get access to the Swagger UI, from the **backend/API** directory, run the following command:

```
dotnet watch
```

Next, go to https://localhost:5001/swagger to view the Swagger UI.

## Contributing

Contributions are accepted through GitHub [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

1. Fork the repository and make the change. Please remember to document your code and describe the change you wish to add to this project - what it is and why it is needed.
2. Submit a pull request to this repository.
3. We will review your pull request.
4. Once approved, your code will be added to this repository.

## Copyright and License

Copyright © 2025 mgrybel. Code released under the CC-BY-NC-SA 4.0 license.<br /><br />

"CC BY-NC-SA" stands for **Creative Commons Attribution-NonCommercial-ShareAlike**. It is one of the licenses provided by Creative Commons, and it comes with the following conditions:

1. **Attribution (BY)**: You must give appropriate credit to the creator, provide a link to the license, and indicate if changes were made. You can do so in any reasonable manner but not in a way that suggests the licensor endorses you or your use.

2. **NonCommercial (NC)**: You may not use the material for commercial purposes. This means you can’t profit from the work or use it as part of something that generates income.

3. **ShareAlike (SA)**: If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

### Summary

- Free to use, share, and adapt for **non-commercial purposes**.
- Must credit the original author.
- Must share adaptations under the same license.
