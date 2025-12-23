# AGENTS.md

You are an expert in JavaScript, Rspack, Rsbuild, Rslib, and library development. You write maintainable, performant, and accessible code.

## Commands

- `pnpm run build` - Build the library for production
- `pnpm run dev` - Turn on watch mode, watch for changes and rebuild the library

## Docs

- Rslib: https://rslib.rs/llms.txt
- Rsbuild: https://rsbuild.rs/llms.txt
- Rspack: https://rspack.rs/llms.txt

## Tools

### Vitest

- Run `pnpm run test` to test your code

### Biome

- Run `pnpm run lint` to lint your code
- Run `pnpm run format` to format your code

## API Documentation Standards

All exported API functions must include comprehensive JSDoc comments following this format:

```typescript
/**
 * @description Brief description of what the function does
 * @author (轻叶)
 * @param paramName - Parameter explanation (list all parameters from top to bottom)
 * @returns Brief description of return value with TS type annotation
 * @Date YYYY-MM-DD (Current date)
 * @example
 * // Single unified example
 * functionName(args) // result
 */
```

### Example

```typescript
/**
 * @description Creates a duplicate-free version of an array
 * @author (轻叶)
 * @param array - The array to inspect
 * @returns The new duplicate free array (T[])
 * @Date 2025-12-23
 * @example unique([1, 2, 2, 3]) // [1, 2, 3]
 */
function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}
```

## API Implementation & Testing Guidelines

1.  **Function Implementation**:
    -   Implement individual functions first (not exported directly).
    -   Group related functions into a utility object (e.g., `arrayUtils`).
    -   Export only the utility object.

    ```typescript
    // src/array/index.ts
    function unique(...) { ... }
    function chunk(...) { ... }

    export const arrayUtils = {
      unique,
      chunk,
    };
    ```

2.  **Testing Requirements**:
    -   Create a test file in the `tests` directory named `[module].test.ts` (e.g., `array.test.ts`).
    -   Import the utility object from the source.
    -   Write comprehensive test cases for **EVERY** API function in the utility object.

    ```typescript
    // tests/array.test.ts
    import { arrayUtils } from '../src/index';

    describe('array utils', () => {
      describe('unique', () => {
        it('should ...', () => {
          expect(arrayUtils.unique(...)).toEqual(...);
        });
      });
    });
    ```
