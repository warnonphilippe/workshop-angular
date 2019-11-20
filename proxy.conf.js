const PROXY_CONFIG = [
  {
      context: [
          "/login",
          "/oauth2",
          "/api",
          "/v2",
          "/services",
          "/swagger-ui",
          "/swagger-resources"
      ],
      target: "http://localhost:8080",
      secure: false
  }
]

module.exports = PROXY_CONFIG;
