---
sidebar_position: 1
---

# Introduction

---

Hasty.db is a fast, and easy to use tool that can be used to interface with sqlite3, an incredibly fast, efficient, and complex database functional database.

## Installation
---
From the console run `npm install hasty.db`.

## Importing
---
Once installed, you can import Hasty into your project with `require()`:

```js title="index.js"
const Hasty = require("hasty.db");
```

Or with `import` if you're using TypeScript:

```js title="index.ts"
import Hasty from "hasty.db";
```

## What is Hasty?

---

> Hasty.db is an intuitive tool to help create complex database structures with ease. From basic first-time projects to medium scale application, Hasty is there for you all the way.

## Example usage

---

> Here we import Hasty as layed out above and create some stats for Hasty

```js title="index.js"
// Import hasty
const Hasty = require("hasty.db");
const Database = Hasty();

// Create Hasty's stats
Database.set("hasty", {
  health: 100,
  armour: 20,
  items: [],
});

// Give Hasty a potion with >> Dot Notation <<
Database.push("hasty.items", "Potion of Vigor");

// Add some health to Hasty
Database.add("health", 15);

console.log(Database.get("hasty"));
```

Produces the output

```json
{
  "health": 100,
  "armour": 20,
  "items": ["Potion of Vigor"]
}
```
