import logger from "./logger.js";

const middleware=(getDefaultMiddleware)=>
  getDefaultMiddleware().concat(logger);

export default middleware;
