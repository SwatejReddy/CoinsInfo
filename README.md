## Background job to fetch and update the data: https://github.com/SwatejReddy/coinsInfoFetcher

# Crypto API Documentation

## Overview
This API provides access to cryptocurrency statistics and price deviation data for specified coins. The following endpoints are available:

1. **Get Cryptocurrency Stats**
2. **Get Cryptocurrency Price Deviation**

---

## 1. Get Cryptocurrency Stats

**Endpoint**:  
`GET http://ec2-54-84-71-183.compute-1.amazonaws.com:3000/api/v1/crypto/stats`

### Query Parameters

| Parameter | Type   | Required | Description                        |
|-----------|--------|----------|------------------------------------|
| `coin`    | string | Yes      | The cryptocurrency to retrieve stats for values: `bitcoin`, `ethereum`, `matic-network`. |

### Response

#### Success Response

**Status Code**: `200 OK`

```json
{
  "status": 200,
  "data": {
    "stats": {
      "price": 2409.46,
      "marketCap": 290408773714,
      "24hChange": -27.9958972450518
    }
  },
  "message": "Success",
  "success": true
}
```

#### Failure Response

**Status Code**: `500 Internal Server Error`

```json
{
    "status": 500,
    "data": null,
    "message": "Invalid coin",
    "success": false
}
```
#### Example Request

`GET http://ec2-54-84-71-183.compute-1.amazonaws.com:3000/api/v1/crypto/stats?coin=ethereum`

#### Example Response

```json
{
  "status": 200,
  "data": {
    "stats": {
      "price": 2409.46,
      "marketCap": 290408773714,
      "24hChange": -27.9958972450518
    }
  },
  "message": "Success",
  "success": true
}
```


## 2. Get Cryptocurrency Price Deviation

**Endpoint**:  
`GET http://ec2-54-84-71-183.compute-1.amazonaws.com:3000/api/v1/crypto/deviation`

### Query Parameters

| Parameter | Type   | Required | Description                        |
|-----------|--------|----------|------------------------------------|
| `coin`    | string | Yes      | The cryptocurrency to retrieve stats for values: `bitcoin`, `ethereum`, `matic-network`. |

### Response

#### Success Response

**Status Code**: `200 OK`

```json
{
  "status": 200,
  "data": {
    "deviation": 10.48
  },
  "message": "Success",
  "success": true
}
```

#### Failure Response

**Status Code**: `500 Internal Server Error`

```json
{
    "status": 500,
    "data": null,
    "message": "Invalid coin",
    "success": false
}
```
#### Example Request

`GET http://ec2-54-84-71-183.compute-1.amazonaws.com:3000/api/v1/crypto/deviation?coin=ethereum`

#### Example Response

```json
{
  "status": 200,
  "data": {
    "deviation": 10.48
  },
  "message": "Success",
  "success": true
}
```
