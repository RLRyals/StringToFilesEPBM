# JSON-Based Directory and File Creator

This tool allows you to create a structured set of directories and files based on a JSON input. It's perfect for authors or anyone needing to quickly generate organized content structures.

## Features

- Create directories and files based on user-provided JSON.
- Automatically zips the created structure for easy sharing.
- Ensures unique directory names using timestamps.

## Prerequisites

Before using this tool, ensure you have the following installed:

- [Node.js](https://nodejs.org/): JavaScript runtime environment.
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

3. **Install Dependencies**:
   - Open the terminal in VS Code (`View > Terminal`).
   - Navigate to your project directory if needed.
   - Run the following command to install required packages:
     ```bash
     npm install prompt-sync archiver
     ```

4. **Run the Application**:
   - In VS Code's terminal, execute:
     ```bash
     node app.js
     ```

5. **Provide Input When Prompted**:
    Enter your desired directory/file structure as valid JSON when prompted by script . Press Enter twice after completing input .

    Example JSON format :
    ```json
    {
    "prompts": {
      "001-prompt1.txt": "This is prompt1",
      "002-prompt2.txt": "This is prompt2"
    },
    "stages": {
      "001-stage1.json": "{\"title\": \"Brainstorm Premises\", \"description\": \"Generate several book premise ideas based on a genre and themes.\", \"prompts\": [\"001-brainstorm-premise\"], \"output\": \"premises.txt\", \"ai_profile\": \"4olatest.json\"}",
      "002-stage2.json": "{\"title\": \"Evaluate Premises\", \"description\": \"Choose the strongest premise based on engagement and marketability.\", \"prompts\": [\"002-evaluate-premise\"], \"output\": \"selected_premise.txt\", \"ai_profile\": \"4olatest.json\"}"
    },
    "content": {},
    "forms": {},
    "ai_profiles": {}
    }
    ```

6 .Access Your Files :
– Once execution completes successfully ,navigate into newly created folder within Documents directory where generated ZIP archive also available !

## Troubleshooting

If you encounter any issues while running this application :

– Ensure Node.js properly installed configured system path variables .
– Double-check syntax validity provided `JSON` inputs prior submission process initiation .

Feel free reach out via Issues tab should further assistance required along way !
