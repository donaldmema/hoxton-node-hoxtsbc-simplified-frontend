import { Transaction, User } from "./types";

const port = 3005;
const baseUrl = `http://localhost:${port}`;

function request(url: string, options: RequestInit = {}) {
  options.headers = options.headers || {};

  //@ts-ignore
  options.headers.Authorization = localStorage.token;

  return fetch(url, options).then((res) => res.json());
}

function post(url: string, data: object) {
  return request(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export function signup(data: object) {
  return post(`${baseUrl}/sign-up`, data);
}

export function login(data: object) {
  return post(`${baseUrl}/login`, data);
}

export function getTransactions() {
  return request(`${baseUrl}/transactions`);
  // return fetch(`${baseUrl}/transactions`).then((res) => res.json());
}

export function createTransaction(transactionData: Transaction) {
  return post(`${baseUrl}/transactions`, transactionData);
}
