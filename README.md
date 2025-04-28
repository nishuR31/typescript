### **1. Installation**
```bash
# Install TypeScript globally
npm install -g typescript

# Initialize a project (creates package.json)
npm init -y

# Create tsconfig.json (TypeScript config)
tsc --init
```

---

### **2. Basic Setup**
Create `tsconfig.json` (or use default):
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "strict": true,
    "outDir": "./dist"
  }
}
```

---

### **3. Create Your First File**
`hello.ts`:
```typescript
// Basic Types
let username: string = "Alice";
const age: number = 30;

// Function with type annotations
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Interface
interface User {
  id: number;
  email: string;
}

// Object using interface
const user: User = {
  id: 1,
  email: "alice@example.com"
};

console.log(greet(username));
console.log(user);
```

---

### **4. Compile & Run**
```bash
# Compile TS to JS
tsc

# Run compiled JS
node dist/hello.js
```

---

### **5. Key Fundamentals Cheat Sheet**

#### **A. Type Annotations**
```typescript
let isAdmin: boolean = true;
let scores: number[] = [95, 87];
```

#### **B. Type Inference**
```typescript
let price = 19.99;   // TS infers `number`
price = "free";      // 🚨 Error!
```

#### **C. Functions**
```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

#### **D. Interfaces**
```typescript
interface Book {
  title: string;
  pages: number;
  genre?: string;  // Optional
}
```

#### **E. Classes**
```typescript
class Animal {
  constructor(public name: string) {}
  
  move(distance: number): void {
    console.log(`${this.name} moved ${distance}m`);
  }
}
```

---

### **6. Quick Run (Without Compiling)**
Use `ts-node` for immediate execution:
```bash
npm install -g ts-node

# Run directly
ts-node hello.ts
```

---

### **7. Essential Commands**
| Command                   | Description                     |
|---------------------------|---------------------------------|
| `tsc`                     | Compile all TS files            |
| `tsc --watch`             | Auto-compile on changes         |
| `ts-node file.ts`         | Run TS file directly            |
| `npm install @types/node` | Add Node.js type definitions    |

---

### **8. Expected Output**
```
Hello, Alice!
{ id: 1, email: 'alice@example.com' }
```
