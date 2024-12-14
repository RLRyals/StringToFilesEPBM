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

5. **Change Execution Policy Permanently (Optional)**:
    If you'd like to change it permanently for all sessions, use this command instead (not generally recommended unless necessary):
    ```powershell
    Set-ExecutionPolicy RemoteSigned
    ```

6 .**Run Application**
  – In VS Code's terminal ,execute :
  ```bash 
  node app .js 


  7 .Provide Input When Prompted :
– Enter/paste desired JSON structure as instructed then press Enter twice complete process .

Example JSON Format
json
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
Troubleshooting

