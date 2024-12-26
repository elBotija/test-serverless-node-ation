#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${YELLOW}Running test scenarios...\033[0m"

# Scenario 1: All Pass
echo -e "${GREEN}Scenario 1: All tests and lint should pass\033[0m"
echo -e "Running: npm run lint src/calculator.js"
npm run lint src/calculator.js
echo -e "Running: npm run test-ci"
npm run test-ci

# Scenario 2: Lint Failures
echo -e "${YELLOW}Scenario 2: Lint should fail\033[0m"
echo -e "Running: npm run lint src/badLint.js"
npm run lint src/badLint.js || true
echo -e "Running: npm run lint-ci"
npm run lint-ci

# Scenario 3: Test Failures
echo -e "${RED}Scenario 3: Tests should fail\033[0m"
echo -e "Running: npm run test-ci"
NODE_OPTIONS=--experimental-vm-modules jest src/__tests__/willFail.test.js --coverage --reporters=default --reporters=jest-junit || true
