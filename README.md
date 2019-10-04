`graphql-gateway` is a very quick example of a gateway providing a single GraphQL endpoint, interally supported by an ExpressJS server.

Each GraphQL resolver is configured to either:
- answer directly (say, if it's neither implemented by api 1 or api 2)
- redirect to api 1 or api 2, depending on which API implements what we want to "front" in the gateway.

Since this is a quick example, it demonstrates only the most basic scenario: forwaring the request. But one can imagine more complex scenario, typical of the "gateway" microservice architecture pattern.