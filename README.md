# Haris-Zon - Amazon Clone

Haris-Zon is an e-commerce platform featuring a user-friendly home page, checkout page, Firebase Authentication, Stripe payment processing, and a detailed Order History page.

 - ***The voice in the videos below is not mine (AI-generated)***

## Home Page
The home page functions as a product catalog, displaying an inventory of available items, each uniquely identified by an ID. Key details such as title, price, customer rating, and an associated image. Each product contains an "add to cart" button which when pressed dynamicaly updates the total number of items in the cart.

https://github.com/haris-sujethan/Haris-Zon/assets/96924701/6991a833-a8ec-4192-8316-56f749395fce

## Checkout Page
Upon transitioning to the Checkout page, users encounter a concise summary of their cart items. Here, an efficient "remove from basket" button facilitates real-time adjustments to the total cart price.

https://github.com/haris-sujethan/Haris-Zon/assets/96924701/e8234669-ab7b-4ad3-9b1a-ec235f3c2ab8

## Payment Processing
The payment page plays a central role in our platform, offering users a comprehensive overview of their information and cart contents before proceeding with payment. Integration with Stripe payment processing ensures secure and convenient transactions. 

https://github.com/haris-sujethan/Haris-Zon/assets/96924701/1ba14b06-02cb-4429-a3a2-010c57226ee3

## Order History
For users interested in tracking their shopping history, our platform incorporates a detailed Order History page powered by the Firestore database. This functionality empowers users to review past orders, displaying specific information such as purchased items, quantities, total costs, and timestamps.

https://github.com/haris-sujethan/Haris-Zon/assets/96924701/2f607227-1cca-43c2-8c89-a44a012e4cf4

## Dependencies:
 - npm i -g firebase-tools
 - npm i @stripe/react-stripe-js
 - npm i @stripe/stripe-js

Utilizing Stripe necessitates an account. In your Stripe account, navigate to the developers' page, where you'll find your keys under the "API Keys" section.

Stripe provides two keys: a publishable key for the front end (which doesn't need to be hidden) and a secret key for the backend (which needs to be kept confidential).

Firebase Connection:
After setting up your firebase project, inside your settings, extract the configuration details, paste within firebase.js
