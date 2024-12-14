Certainly! Here's the updated README with the execution policy change instructions included:

---

# JSON-Based Directory and File Creator

This tool allows you to create a structured set of directories and files based on a JSON input. It's perfect for authors or anyone needing to quickly generate organized content structures.

## Features

- Create directories and files based on user-provided JSON.
- Automatically zips the created structure for easy sharing.
- Ensures unique directory names using timestamps.

## Prerequisites

Before using this tool, ensure you have the following installed:

- [Node.js](https://nodejs.org/): JavaScript runtime environment, which includes npm (Node Package Manager).
- [Visual Studio Code](https://code.visualstudio.com/): Recommended code editor (optional but helpful).

## Setup Instructions

1. **Clone or Download the Project**:
   - Clone this repository using Git:
     ```bash
     git clone https://github.com/RLRyals/Json2FilesAndFolders.git
     ```
   - Or download it as a ZIP file from GitHub, then extract it.

2. **Open in Visual Studio Code**:
   - Launch Visual Studio Code.
   - Go to `File > Open Folder...` and select the project folder.

3. **Ensure Node.js is Installed**:
   - Verify that Node.js is installed by running `node -v` in any terminal window (you should see a version number).
   - If not installed, download and install Node.js from [nodejs.org](https://nodejs.org/).

4. **Install Dependencies**:
   - Open the terminal in VS Code (`View > Terminal`).
   - Navigate to your project directory if needed.
   - Run this command to install all required packages listed in `package.json`:
     ```bash
     npm install
     ```

5. **Change Execution Policy (Windows Only)**:  
    If you're encountering permission issues when running scripts on Windows, you may need to change your PowerShell execution policy temporarily: 
    ```powershell
    Set-ExecutionPolicy RemoteSigned –Scope CurrentUser
    ```
    This allows locally created scripts to run without being signed by a trusted publisher.

6. **Run Application**: 
    In VS Code's terminal or any command line interface within your project directory, execute: 
    ```bash 
    node app.js 
    ```

7. **Provide Input When Prompted**:  
    Enter/paste your desired JSON structure when prompted by the application, then press Enter twice to complete the process.

### Example JSON Format

```json
{
  "prompts": {
    "001-prompt1.txt": "This is prompt1",
    "002-prompt2.txt": "This is prompt2"
  },
  "stages": {
    "001-stage1.json": "{\"title\": \"Brainstorm Premises\", \"description\": \"Generate several book premise ideas based on a genre and themes.\", \"prompts\": [\"001-brainstorm-premise\"], \"output\": \"premises.txt\", \"ai_profile\": \"4olatest.json\"}",
    "002-stage2.json": "{\"title\": \"Evaluate Premises\", \"description\": \"Choose strongest premise based engagement marketability.\", prompts : ['002-evaluate-premise'], output: selected_premise.txt ai_profile: '4olatest.json'}"
  },
  "content": {},
  "forms": {},
  "ai_profiles": {}
}
```

## Troubleshooting

If you encounter any issues while running this application:

- Ensure Node.js is properly installed with configured system path variables.
- Double-check syntax validity of provided JSON inputs prior submission process initiation.
  
Feel free reach out via Issues tab should further assistance be required!

---

### Key Adjustments Made:

1. Added detailed instructions for changing PowerShell execution policy specifically for Windows users who might face script permission issues.
   
Let me know if there's anything else you'd like adjusted!