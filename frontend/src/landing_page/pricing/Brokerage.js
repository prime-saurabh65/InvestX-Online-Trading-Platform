import React from 'react'

const Brokerage = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-5">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

        {/* Card 1 */}
        <div>
          <img 
            src="media/images/intradayTrades.svg"  // replace manually 
            alt="Free Equity Delivery"
            className="mx-auto h-32"
          />
          <h2 className="text-xl font-semibold mt-6">Free equity delivery</h2>
          <p className="text-gray-600 mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div>
          <img 
            src="media/images/pricingEquity.svg" 
            alt="Intraday & F&O"
            className="mx-auto h-32"
          />
          <h2 className="text-xl font-semibold mt-6">Intraday and F&O trades</h2>
          <p className="text-gray-600 mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across 
            equity, currency, and commodity trades. Flat ₹ 20 on all option trades.
          </p>
        </div>

        {/* Card 3 */}
        <div>
          <img 
            src="media/images/intradayTrades.svg"
            alt="Free MF"
            className="mx-auto h-32"
          />
          <h2 className="text-xl font-semibold mt-6">Free direct MF</h2>
          <p className="text-gray-600 mt-3">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Brokerage;
