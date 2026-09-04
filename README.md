# InvestX --- Online Trading Platform

InvestX is a full-stack stock trading simulation platform built with
React, Spring Boot, MongoDB, and JWT-based authentication.

The application provides a brokerage-style experience where users can
register, log in securely, manage virtual funds, place simulated
BUY/SELL orders, track holdings and positions, and view order history.

> **Note:** InvestX is an educational simulation project. It does not
> connect to a real stock exchange, execute real trades, or handle real
> money.

## Features

### Authentication & Security

-   User registration and login
-   BCrypt password hashing
-   JWT-based authentication
-   Spring Security
-   Protected REST APIs
-   User-specific data access

### Trading

-   Stock watchlist
-   Stock prices and daily movement
-   BUY order interface
-   SELL order support
-   Quantity and price validation
-   Automatic order-value calculation
-   Virtual funds adjustment
-   Holdings updates
-   Order history

### Portfolio & Funds

-   Holdings tracking
-   Average-cost tracking
-   Positions
-   Virtual cash balance
-   Deposits and withdrawals
-   Available and used margin
-   Dashboard summary

## Technology Stack

### Frontend

-   React 19
-   React Router
-   Axios
-   Material UI
-   Chart.js
-   react-chartjs-2
-   Tailwind CSS

### Backend

-   Java 21
-   Spring Boot
-   Spring Web
-   Spring Data MongoDB
-   Spring Security
-   JWT
-   Bean Validation
-   Lombok
-   Maven

### Database

-   MongoDB

## Architecture

``` text
React Public Website / Trading Dashboard
                    |
                 Axios
                    |
              HTTP + JWT
                    |
                    v
          Spring Security / JWT
                    |
                    v
              Controllers
                    |
                    v
               Services
                    |
                    v
              Repositories
                    |
                    v
                 MongoDB
```

The backend follows a layered architecture:

``` text
Controller → Service → Repository → MongoDB
```

Controllers handle HTTP requests, services contain business logic, and
repositories handle persistence.

## Project Structure

``` text
InvestX-Online-Trading-Platform/
│
├── backend/
│   ├── src/main/java/com/investx/backend/
│   │   ├── config/
│   │   ├── controller/
│   │   ├── dto/
│   │   ├── exception/
│   │   ├── model/
│   │   ├── repository/
│   │   ├── security/
│   │   └── service/
│   ├── src/main/resources/
│   └── pom.xml
│
├── dashboard/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   └── data/
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   └── landing_page/
│   └── package.json
│
└── README.md
```

## Authentication Flow

### Registration

``` text
User
  |
  v
POST /api/auth/register
  |
  v
AuthController
  |
  v
AuthService
  |
  v
BCrypt password hashing
  |
  v
MongoDB
  |
  v
JWT generated
  |
  v
Frontend
```

### Login

``` text
Email + Password
       |
       v
POST /api/auth/login
       |
       v
Credential verification
       |
       v
JWT generated
       |
       v
Frontend receives token
```

For protected requests, the frontend sends:

``` http
Authorization: Bearer <JWT>
```

The JWT authentication filter validates the token and identifies the
authenticated user.

## Trading Workflow

A BUY order follows this flow:

``` text
User selects stock
       |
       v
Clicks BUY
       |
       v
Enters quantity
       |
       v
Stock price is loaded
       |
       v
POST /api/orders
       |
       v
JWT authentication
       |
       v
OrderController
       |
       v
OrderService
       |
       +------> FundsService
       |
       +------> HoldingService
       |
       v
OrderRepository
       |
       v
MongoDB
```

Example:

``` text
Stock: WIPRO
Quantity: 10
Price: ₹577.75

Order Value = 10 × ₹577.75
            = ₹5,777.50
```

The system deducts the order value from virtual funds, updates the
holding, and stores the order.

## BUY Logic

``` text
BUY
 |
 ├── Validate order
 ├── Calculate quantity × price
 ├── Check available funds
 ├── Deduct funds
 ├── Create/update holding
 └── Save order
```

## SELL Logic

``` text
SELL
 |
 ├── Find user's holding
 ├── Validate available quantity
 ├── Reduce holding
 ├── Add sale value to funds
 └── Save order
```

For example:

``` text
Holding: WIPRO = 10 shares

SELL 5 shares @ ₹600

Sale value = 5 × ₹600
           = ₹3,000

Remaining holding = 5 shares
Funds increase by = ₹3,000
```

## Orders vs Holdings

**Orders** represent transaction history.

Example:

``` text
Instrument   Qty   Price/Share   Total       Type
WIPRO        10    ₹577.75       ₹5,777.50   BUY
TCS           2    ₹3,194.80     ₹6,389.60   BUY
WIPRO         5    ₹600.00       ₹3,000.00   SELL
```

**Holdings** represent what the user currently owns.

If the user bought 10 WIPRO shares and sold 5, the current holding is:

``` text
WIPRO
Quantity: 5
```

## Funds Management

Each user has a virtual funds account containing:

``` text
Available Cash
Available Margin
Used Margin
Opening Balance
Updated At
```

Example initial state:

``` text
Opening Balance   ₹100,000
Available Cash    ₹100,000
Used Margin       ₹0
Available Margin  ₹100,000
```

BUY and SELL operations update the simulated balance.

## Database Design

### Users

``` text
users
--------------------------------
id
name
email
password
createdAt
```

### Orders

``` text
orders
--------------------------------
id
userId
name
qty
price
mode
createdAt
```

### Holdings

``` text
holdings
--------------------------------
id
userId
name
qty
avg
price
net
day
```

### Positions

``` text
positions
--------------------------------
id
userId
product
name
qty
avg
price
net
day
isLoss
```

### Funds

``` text
funds
--------------------------------
id
userId
availableMargin
usedMargin
availableCash
openingBalance
updatedAt
```

## REST API

### Authentication

  Method   Endpoint               Description
  -------- ---------------------- ---------------------
  POST     `/api/auth/register`   Register a new user
  POST     `/api/auth/login`      Authenticate user

### Orders

  Method   Endpoint        Description
  -------- --------------- ---------------------------------
  POST     `/api/orders`   Place BUY/SELL order
  GET      `/api/orders`   Get authenticated user's orders

### Portfolio

  Method   Endpoint           Description
  -------- ------------------ ----------------------
  GET      `/api/holdings`    Get current holdings
  GET      `/api/positions`   Get positions

### Funds

  Method   Endpoint                Description
  -------- ----------------------- ------------------------
  GET      `/api/funds`            Get funds information
  POST     `/api/funds/deposit`    Deposit virtual funds
  POST     `/api/funds/withdraw`   Withdraw virtual funds

### Dashboard

  Method   Endpoint                   Description
  -------- -------------------------- -----------------------
  GET      `/api/dashboard/summary`   Get dashboard summary

## Example Order Request

``` http
POST /api/orders
Authorization: Bearer <JWT>
Content-Type: application/json
```

``` json
{
  "name": "WIPRO",
  "qty": 10,
  "price": 577.75,
  "mode": "BUY"
}
```

Supported modes:

``` text
BUY
SELL
```

## Frontend Applications

The repository contains two React applications.

### Public Website

Located in:

``` text
frontend/
```

Provides:

-   Landing page
-   About
-   Products
-   Pricing
-   Support
-   Signup
-   Login

Runs on:

``` text
http://localhost:3000
```

### Trading Dashboard

Located in:

``` text
dashboard/
```

Provides:

-   Dashboard
-   Watchlist
-   Orders
-   Holdings
-   Positions
-   Funds
-   Apps
-   BUY/SELL trading interface

Runs on:

``` text
http://localhost:3001
```

## Local Setup

### Prerequisites

Install:

-   Java 21
-   Maven
-   Node.js
-   npm
-   MongoDB
-   Git

### 1. Clone

``` bash
git clone https://github.com/prime-saurabh65/InvestX-Online-Trading-Platform.git
cd InvestX-Online-Trading-Platform
```

### 2. Start MongoDB

The backend uses:

``` text
mongodb://localhost:27017/investx
```

### 3. Start Backend

``` bash
cd backend
mvn spring-boot:run
```

Backend:

``` text
http://localhost:8080
```

### 4. Start Public Frontend

Open another terminal:

``` bash
cd frontend
npm install
npm start
```

Frontend:

``` text
http://localhost:3000
```

### 5. Start Trading Dashboard

Open another terminal:

``` bash
cd dashboard
npm install
PORT=3001 npm start
```

Dashboard:

``` text
http://localhost:3001
```

## Application Ports

  Application              Port
  --------------------- -------
  Public Frontend          3000
  Trading Dashboard        3001
  Spring Boot Backend      8080
  MongoDB                 27017

## Testing

A recommended end-to-end test flow:

``` text
1. Register
2. Login
3. Open dashboard
4. Check virtual funds
5. Select a stock
6. Click BUY
7. Enter quantity
8. Verify price
9. Place order
10. Verify funds
11. Verify holdings
12. Verify order history
13. Place SELL order
14. Verify holdings and funds again
```

API testing can be performed with Postman.

Protected endpoints require:

``` http
Authorization: Bearer <JWT>
```

## Security

The application demonstrates:

-   BCrypt password hashing
-   JWT authentication
-   Spring Security
-   Stateless authentication
-   Protected REST endpoints
-   User-specific database queries
-   CORS configuration

For production deployment, secrets such as the JWT signing key should be
supplied through environment variables or a secure secret-management
system.

Production deployment should also use HTTPS and a secure
authentication/token strategy.

## Current Limitations

InvestX is a simulation rather than a production brokerage platform.

### Mock Market Data

Stock prices are currently sample/static values.

There is no integration with:

-   NSE
-   BSE
-   Real-time market feeds
-   External brokerage APIs

### Simulated Execution

Orders are processed internally by the Spring Boot backend. No real
exchange order is created.

### Production Financial Consistency

A production trading platform would require strong transactional
guarantees across:

``` text
Orders
Funds
Holdings
```

to prevent inconsistent state when failures occur during order
processing.

### Advanced Order Types

The current application focuses on basic BUY/SELL simulation.

## Future Improvements

### Real-Time Market Data

-   Integrate a market-data provider
-   WebSocket-based price updates
-   Real-time watchlist updates

### Advanced Orders

-   Market orders
-   Limit orders
-   Stop-loss orders
-   Stop-limit orders

### Portfolio Analytics

-   Performance charts
-   Profit/loss analytics
-   Asset allocation
-   Historical returns
-   Sector allocation

### Authentication

-   HttpOnly secure cookies
-   Refresh tokens
-   HTTPS-only deployment
-   Improved session management

### Backend Reliability

-   Database transactions
-   Stronger validation
-   Idempotent order processing
-   Concurrency handling

### Testing

-   Unit tests
-   Integration tests
-   Controller tests
-   Security tests
-   Frontend component tests
-   End-to-end tests

### Deployment

-   Docker
-   Cloud MongoDB
-   Cloud backend
-   Production frontend
-   CI/CD pipeline

## Engineering Concepts Demonstrated

### Backend

-   REST API development
-   Spring Boot
-   Layered architecture
-   Dependency injection
-   Spring Security
-   JWT authentication
-   BCrypt password hashing
-   DTOs
-   Validation
-   MongoDB persistence
-   Repository pattern
-   Service-layer business logic
-   Exception handling

### Frontend

-   React components
-   React Router
-   React Context
-   State management
-   Axios
-   API integration
-   Form handling
-   Authentication flow
-   Dashboard development

### Full Stack

-   Frontend/backend integration
-   JWT authorization
-   CORS
-   User-specific data
-   Database-backed business workflows
-   Portfolio and order management

## Project Status

### Implemented

-   [x] Public landing website
-   [x] User registration
-   [x] User login
-   [x] BCrypt password hashing
-   [x] JWT authentication
-   [x] Spring Security
-   [x] MongoDB integration
-   [x] Trading dashboard
-   [x] Watchlist
-   [x] BUY order workflow
-   [x] SELL order backend workflow
-   [x] Virtual funds
-   [x] Holdings
-   [x] Positions
-   [x] Order persistence
-   [x] Order history
-   [x] Dashboard summary
-   [x] Protected APIs
-   [x] CORS configuration

### Planned

-   [ ] Real-time market data
-   [ ] WebSocket integration
-   [ ] Advanced order types
-   [ ] Portfolio analytics
-   [ ] Production-grade authentication
-   [ ] Comprehensive automated testing
-   [ ] Dockerization
-   [ ] Cloud deployment
-   [ ] CI/CD

## Author

**Saurabh Shivam**

GitHub:\
https://github.com/prime-saurabh65

Repository:\
https://github.com/prime-saurabh65/InvestX-Online-Trading-Platform

## Disclaimer

InvestX is an educational stock-trading simulation project.

It does not provide financial advice, execute real trades, connect to
stock exchanges, or manage real money.

All prices, funds, holdings, and transactions are simulated.
