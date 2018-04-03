const { json, send } = require('micro')
const { router, post } = require('microrouter')
const cors = require('micro-cors')()
const shippo = require('shippo')(process.env.SHIPPO_PRIVATE_KEY)

const moltinSecret = process.env.MOLTIN_WEBHOOK_SECRET

module.exports = cors(
  router(
    post('/', async (req, res) => {
      if ((await req.headers['x-moltin-secret-key']) != moltinSecret)
        return send(res, 401)

      const { from, to, parcels } = await json(req)

      try {
        const { rates } = await shippo.shipment.create({
          address_from: from,
          address_to: to,
          parcels: parcels,
          async: false
        })

        send(res, 200, rates)
      } catch (error) {
        send(res, 500, error)
      }
    })
  )
)
