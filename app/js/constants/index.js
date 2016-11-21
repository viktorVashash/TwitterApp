const ACTION_TYPES = {
  REDIRECT: 'REDIRECT',
  TWEET: 'TWEET'
};

const URLS = {
  REQUEST_TOKEN_URL: 'https://api.twitter.com/oauth/request_token',
  AUTHENTICATE_URL: 'https://api.twitter.com/oauth/authenticate?',
  VERIFIER_URL: 'https://api.twitter.com/oauth/access_token?oauth_verifier=',
  CREDENTIALS_URL: 'https://api.twitter.com/1.1/account/verify_credentials.json',
  TWEET_URL: 'https://api.twitter.com/1.1/statuses/update.json?status='
};

const KEYS = {
  CONSUMER_KEY: 'YOUR_CONSUMER_KEY',
  CONSUMER_SECRET: 'YOUR_CONSUMER_KEY_SECRET',
  ACCESS_TOKEN_KEY: 'YOUR__TOKEN',
  ACCESS_TOKEN_SECRET: 'YOUR_TOKEN_SECRET'
}

export {
  ACTION_TYPES,
  URLS,
  KEYS
};
