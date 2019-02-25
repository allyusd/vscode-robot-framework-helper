// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
		console.log('Congratulations, your extension "robot-framework-helper" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('rfhelper.replaceClipboardTextIncludeUnderscoreAndSpace', replaceClipboardTextIncludeUnderscoreAndSpace);

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

function replaceClipboardTextIncludeUnderscoreAndSpace() {
	vscode.env.clipboard.readText().then((text)=>{
		let before: string = text;
		if (text.includes(' '))	{
			text = text.replace(/ /g, '_');
		} else if (text.includes('_')) {
			text = text.replace(/_/g, ' ');
		}
		let after: string = text;
		vscode.env.clipboard.writeText(text);
		console.log('change: ' + before + ' => ' + after);
	});
}
