/**
 * 🌌 Cosmic Rain Theme - TypeScript Test File
 *
 * @author Me
 * @version 1.0.0
 * @example
 * // To test open with Cosmic Rain theme activated
 */

// import React, { useState, useEffect, useCallback } from "react";
// import * as fs from "fs";
// import { EventEmitter } from "events";
// export { Component } from "./component";
export default class DefaultExport {}

interface EventEmitter {
  emit(event: string, ...args: any[]): boolean;
  on(event: string, listener: (...args: any[]) => void): this;
}

interface User {
  id: number;
  name: string;
  email?: string;
  isActive: boolean;
  metadata: Record<string, any>;
}

type Status = "active" | "inactive" | "pending";
type UserRole = "admin" | "user" | "guest";

enum UserPermission {
  READ = "read",
  WRITE = "write",
  DELETE = "delete",
  ADMIN = "admin",
}

abstract class BaseEntity {
  protected readonly id: number;
  private _createdAt: Date;
  public static instanceCount: number = 0;

  constructor(id: number) {
    this.id = id;
    this._createdAt = new Date();
    BaseEntity.instanceCount++;
  }

  abstract validate(): boolean;

  public getId(): number {
    return this.id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
}

class UserManager extends BaseEntity {
  private users: User[] = [];
  readonly maxUsers: number = 1000;

  constructor(id: number) {
    super(id);
  }

  validate(): boolean {
    return this.users.length <= this.maxUsers;
  }

  async createUser(userData: Partial<User>): Promise<User> {
    const newUser: User = {
      id: Math.random(),
      name: userData.name || "Unknown",
      email: userData.email,
      isActive: userData.isActive ?? true,
      metadata: userData.metadata || {},
    };

    this.users.push(newUser);
    return newUser;
  }

  findUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  *getAllUsers(): Generator<User, void, unknown> {
    for (const user of this.users) {
      yield user;
    }
  }
}

function calculateTotal(items: number[]): number {
  return items.reduce((sum, item) => sum + item, 0);
}

const asyncFunction = async (param: string): Promise<string> => {
  try {
    const result = await fetch(`/api/data/${param}`);
    return result.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error(`Failed to fetch data for ${param}`);
  }
};

function identity<T>(arg: T): T {
  return arg;
}

const processUser = ({ name, email, ...rest }: User) => ({
  displayName: name.toUpperCase(),
  contactEmail: email || "noreply@example.com",
  ...rest,
});

const API_URL = "https://api.example.com";
const MAX_RETRIES = 3;
let currentUser: User | undefined = undefined;
var globalCounter = 0;

const pi = 3.14159;
const isDebugMode = true;
const isProduction = false;
const undefinedValue = undefined;
const nullValue = null;

const config = {
  apiUrl: API_URL,
  retries: MAX_RETRIES,
  timeout: 5000,
  features: {
    darkMode: true,
    notifications: false,
  },
};

const colors = ["red", "green", "blue"];
const numbers = [1, 2, 3, 4, 5];
const mixed: (string | number)[] = ["hello", 42, "world", 99];

const multilineTemplate = `
  This is a multiline
  template string with ${API_URL}
  and other ${MAX_RETRIES} variables.
`;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

function demonstrateOperators() {
  let a = 10;
  let b = 5;

  console.log(a + b, a - b, a * b, a / b, a % b);

  console.log(a > b, a < b, a >= b, a <= b, a === b, a !== b);

  console.log(a && b, a || b, !a);

  console.log(a & b, a | b, a ^ b, ~a, a << 1, a >> 1);

  const result = a > b ? "greater" : "less or equal";

  const value = nullValue ?? "default value";

  const userEmail = currentUser?.email?.toLowerCase();
}

function controlFlowExamples() {
  if (isDebugMode) {
    console.log("Debug mode is enabled");
  } else if (isProduction) {
    console.log("Production mode");
  } else {
    console.log("Development mode");
  }

  switch (currentUser?.id) {
    case 1:
      console.log("Admin user");
      break;
    case 2:
      console.log("Regular user");
      break;
    default:
      console.log("Unknown user");
  }

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }

  for (const color of colors) {
    console.log(color);
  }

  for (const key in config) {
    console.log(key, config[key as keyof typeof config]);
  }

  let counter = 0;
  while (counter < 5) {
    counter++;
  }

  do {
    console.log("This runs at least once");
  } while (false);
}

async function errorHandlingExample() {
  try {
    const data = await asyncFunction("test");
    console.log(data);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error("Unknown error occurred");
    }
  } finally {
    console.log("Cleanup completed");
  }
}

namespace Utils {
  export function formatDate(date: Date): string {
    return date.toISOString().split("T")[0];
  }

  export const constants = {
    MAX_SIZE: 1024,
    MIN_SIZE: 10,
  };
}

interface Repository<T> {
  find(id: string): Promise<T | null>;
  save(entity: T): Promise<T>;
  delete(id: string): Promise<void>;
}

@Decorator()
class UserRepository implements Repository<User> {
  async find(id: string): Promise<User | null> {
    return null;
  }

  async save(entity: User): Promise<User> {
    return entity;
  }

  async delete(id: string): Promise<void> {}
}

type NonNullable<T> = T extends null | undefined ? never : T;
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};

type StringOrNumber = string | number;
type UserWithTimestamp = User & { timestamp: Date };

function Decorator(): (
  target: typeof UserRepository,
  context: ClassDecoratorContext<typeof UserRepository>
) => void | typeof UserRepository {
  throw new Error("Function not implemented.");
}
