const dev = window.location.hostname === "localhost";

export const API_URI = dev
  ? 'https://lunch-hunt-node-lghwxlvnvn.now.sh'
  : process.env.REACT_APP_API_URI;
