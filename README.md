# moltin-shippo-rates

> ⚡️ Get shipping rates for orders by Shippo

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/notrab/moltin-shippo-integration&env=SHIPPO_PRIVATE_KEY&env=MOLTIN_WEBHOOK_SECRET)

Asynchronous microservice that returns shipping rates from [Shippo](https://goshippo.com) for given `from` and `to` addresses. Built with [Micro](https://github.com/zeit/micro) 🤩

## 🛠 Setup

Both a moltin _and_ Shippo account are needed for this to function.

Create a `.env` at the project root with the following credentials.

```dosini
MOLTIN_WEBHOOK_SECRET=
SHIPPO_PRIVATE_KEY=
```

`npm install`

`npm run dev`

## ⛽️ Usage

Once you have the function deployed, take a note of the immutable `now.sh` url.

You can use this URL to make requests, providing you send along `X-MOLTIN-SECRET-KEY` in the request header.

Send a request to `http://localhost:3000` that includes the following payload

```json
{
  "from": {
    "name": "...",
    "company": "...",
    "street1": "...",
    "city": "...",
    "state": "...",
    "zip": "...",
    "country": "...",
    "phone": "...",
    "email": "..."
  },
  "to": {
    "name": "...",
    "company": "...",
    "street1": "...",
    "city": "...",
    "state": "...",
    "zip": "...",
    "country": "...",
    "phone": "...",
    "email": "..."
  },
  "parcels": [
    {
      "length": "5",
      "width": "5",
      "height": "5",
      "distance_unit": "in",
      "weight": "2",
      "mass_unit": "lb"
    }
  ]
}
```

## 🚀 Deploy

You can easily deploy this function to [now](https://now.sh).
