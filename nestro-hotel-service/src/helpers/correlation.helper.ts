import asyncLocalStorage from "@/config/localStorage";

// Retrieves the correlation ID from the current async context, or returns a default if not found
const getCorrelationId = () => {
  const asyncStore = asyncLocalStorage.getStore();
  return asyncStore?.correlationId ?? "no-correlation-id-found";
};

export default getCorrelationId;
