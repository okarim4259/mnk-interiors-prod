if (process.env.NODE_ENV !== "production") {
  process.env.NODE_ENV = "development";
}

export const properties = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT || 5000
};

export const YELP_CONFIG = {
  API_BASE_URL: "https://api.yelp.com/v3",
  CLIENT_ID: "Rf9rXNtZ4P1FbaUGMP8FVA",
  API_KEY:
    "Aguz_WHICiTvtBfYpVy3VODcsoEhL_7jobv0xfqjIPtunwoRkkgVAw2nxtaI30rokQDo5t2qmvLa7oYfDc-RuZWJviD8JvibqpsA8tQMkDE1e0WigFhs7UJvQIlrXHYx"
};
