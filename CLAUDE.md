# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript project demonstrating hexagonal architecture through an animal voice recognition and counting application. The project showcases the refactoring journey from monolithic code to well-structured hexagonal architecture.

## Development Commands

### Running the Application

```bash
npx ts-node main.ts
```

### Testing

```bash
npm test  # Currently shows "Error: no test specified"
npx jest  # Run tests using Jest with ts-jest
```

### TypeScript Compilation

```bash
npx tsc  # Compile TypeScript files
npx tsc --noEmit  # Type checking only
```

## Architecture Overview

The codebase follows hexagonal architecture principles with clear separation of concerns:

### Domain Layer (Business Logic)

- `AnimalJudge`: Core domain logic for voice-to-animal recognition
- `RecordHolder`: Domain logic for managing count records
- `AnimalEvent`: Domain enum defining animal types (Dog, Cat, Unknown)
- `RecordType`: Domain type for count records

### Application Layer

- `main.ts`: Application composition root that wires dependencies

### Adapters Layer

- `VoiceInterface`: Input adapter for user interaction
- `RecordStorage`: Output adapter for JSON file persistence
- `VoiceResultHandler`: Output adapter for result processing

### Policy Layer

- `animalJudgePolicy.ts`: Configurable rules for animal voice recognition

## Key Patterns

1. **Dependency Injection**: `AnimalJudge` receives policy through constructor injection
2. **Policy Pattern**: Animal recognition rules are externalized in `animalJudgePolicy`
3. **Single Responsibility**: Each class has a focused responsibility
4. **Immutability**: `RecordHolder.increment()` returns new state rather than mutating

## File Structure

```bash
├── main.ts                    # Application entry point
├── animalJudge.ts            # Domain: Animal recognition logic
├── animalJudgePolicy.ts      # Policy: Recognition rules
├── recordHolder.ts           # Domain: Count management
├── voiceInterface.ts         # Adapter: User input/output
├── recordStorage.ts          # Adapter: File persistence
├── voiceResultHandler.ts     # Adapter: Result processing
└── storage/
    └── record.json          # Persistent count data
```

## Testing Strategy

- Jest is configured with ts-jest for TypeScript support
- Domain logic (AnimalJudge, RecordHolder) should be unit tested
- Adapters can be tested with mocks for external dependencies
- Policy objects enable easy testing of different recognition rules

## Data Flow

1. User input → `VoiceInterface`
2. Voice recognition → `AnimalJudge` (using `animalJudgePolicy`)
3. Count increment → `RecordHolder`
4. Result processing → `VoiceResultHandler`
5. Data persistence → `RecordStorage`
