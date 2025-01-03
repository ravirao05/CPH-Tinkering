const child_process = require('child_process');
const vscode = require('vscode');
const path = require('path');

/**
 * @param {string} file_p
 * @param {string} language
 * @returns {Promise<string>}
 */
function runCode(file_p, language, outputChannel) {
    const config = vscode.workspace.getConfiguration('cph.language');
    let runCommand;

    switch (language) {
        case 'Python':
            runCommand = config.get('python.run');
            break;
        case 'C++':
            runCommand = config.get('cpp.run');
            break;
        case 'JavaScript':
            runCommand = config.get('javascript.run');
            break;
        case 'Java':
            runCommand = config.get('java.run');
            break;
        default:
            return Promise.reject(new Error(' language not supported'));
    }

    const fileNameWithoutExt = path.basename(file_p, path.extname(file_p));

    if (runCommand) {
        const runCmd = runCommand.replace('$filename', file_p).replace('$fileNameWithoutExt', fileNameWithoutExt).replace('$fileNameWithoutExt', fileNameWithoutExt);
        
        return new Promise((resolve, reject) => {
            child_process.exec(runCmd, (error, stdout, stderr) => {
                if (error) {
                    outputChannel.appendLine(`Exec error: ${stderr}`);
                    reject(`Exec error: ${stderr}`);
                } else {
                    resolve(stdout);
                }
            });
        });
    }

    return Promise.reject(new Error('No valid comand configured.'));
}

module.exports = { runCode };