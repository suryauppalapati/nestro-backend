import { AsyncLocalStorage } from "async_hooks";
import LocalStorage from "@/types/localStorage.type";

/**
 * The `asyncLocalStorage` instance is used to manage asynchronous context storage.
 * It allows storing and retrieving data that is specific to the current asynchronous execution context.
 * This is particularly useful for tracking request-specific data, such as correlation IDs,
 */
const asyncLocalStorage = new AsyncLocalStorage<LocalStorage>();

export default asyncLocalStorage;
