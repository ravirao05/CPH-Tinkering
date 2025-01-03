# LeetCode CPH Extension

## Overview

The LeetCode CPH extension for VS Code simplifies the process of solving LeetCode problems by automating the retrieval of test cases, running them against your code, and providing immediate feedback. This tool enhances productivity for developers working on competitive programming problems by offering an intuitive interface to manage test cases directly in the editor.

---

## Features

### 1. **Test Case Management**
- Automatically fetches test cases (input and output) from a LeetCode problem page.
- Saves the test cases in a structured format inside a `testCase` folder within your project directory.

### 2. **Run Test Cases**
- Executes your solution against the fetched test cases.
- Displays results and highlights any discrepancies between expected and actual outputs.

### 3. **User-Friendly Commands**
- Simple commands to fetch and run test cases, accessible via the Command Palette or keyboard shortcuts.

---

## Requirements

- **VS Code**: Version 1.60 or later
- **Node.js**: Version 12.x or later

---

## Installation

### Manual Installation

1. Clone or download the repository:
    ```sh
    git clone https://github.com/mranantshukla/Tiinkering-CPH-VS-Code
    cd cph-leetcode
    ```
2. Install the required dependencies:
    ```sh
    npm install
    ```
3. Open the project folder in VS Code.
4. Press `F5` to launch the extension in a new Extension Development Host window.

---

## Usage

### Fetching Test Cases

1. Open the LeetCode problem URL in your browser.
2. From the Command Palette (`Ctrl + Shift + P`), select the command `CPH: Fetch Test Cases`.
3. Enter the LeetCode problem URL in the input prompt.
4. The extension fetches the test cases and saves them in the `testCase` folder in your workspace.

### Running Test Cases

1. Once test cases are fetched, open your solution file in VS Code.
2. Run the command `CPH: Run Test Cases` from the Command Palette.
3. The extension will execute the test cases against your code and display the results.

### Test Case Folder Structure

- **Input Files**: Contain the input data for each test case (e.g., `input1.txt`, `input2.txt`).
- **Output Files**: Contain the expected output for each test case (e.g., `output1.txt`, `output2.txt`).

The `testCase` folder organizes these files by test case index for clarity.

---

## Commands

### Available Commands

- **`CPH: Fetch Test Cases`**: Prompts for a LeetCode problem URL, fetches test cases, and saves them.
- **`CPH: Run Test Cases`**: Runs the fetched test cases against your code and displays the results.

### Keybindings

| Command                | Windows/Linux          | macOS               |
|------------------------|------------------------|---------------------|
| Fetch Test Cases       | `Ctrl + Alt + F`      | `Cmd + Alt + F`     |
| Run Test Cases         | `Ctrl + Alt + R`      | `Cmd + Alt + R`     |

### Context Menu Access

Right-click in the editor window while editing a supported file (C++, Python, JavaScript) to access the `Fetch Test Cases` and `Run Test Cases` commands.

---

## Configuration

You can customize the extension to support different languages and build/run commands. Below are the default configurations:

```json
"cph.language.cpp.run": "g++ -o $fileNameWithoutExt $filename && .\\$fileNameWithoutExt",
"cph.language.python.run": "python $filename",
"cph.language.javascript.run": "node $filename"
```

### Adding Support for Additional Languages

You can extend the configuration to support other languages like Java:

```json
"cph.language.java.run": "javac $filename && java -cp $fileDir $fileNameWithoutExt"
```
