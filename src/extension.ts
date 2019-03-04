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
	let disposable = vscode.commands.registerCommand('rfhelper.copySelectTextAndSwitchRFOrPyCase', copySelectTextAndSwitchRFOrPyCase);

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

function copySelectTextAndSwitchRFOrPyCase() {
	var editor = vscode.window.activeTextEditor;
	if (!editor) {
		console.log('No open text editor');
		return;
	}

	var selection = editor.selection;
	var text = editor.document.getText(selection);

	if (text === "") {
		console.log('empty text');
		return;
	}

	if (isLower(text.charAt(0))) {
		text = changeTextToRFCase(text);
	} else {
		text = changeTextToPyCase(text);
	}

	vscode.env.clipboard.writeText(text);
}

function changeTextToRFCase(text: string) {
	let before: string = text;
	let list: string[];

	text = text.replace(/_/g, ' ');

	list = text.split(' ');
	list.forEach(function(item, index) {
		list[index] = capitalizeFirstLetter(item);
	});
	text = list.join(' ');

	let after: string = text;
	console.log('change: ' + before + ' => ' + after);
	return text;
}

function changeTextToPyCase(text: string) {
	let before: string = text;
	let list: string[];

	text = text.replace(/ /g, '_').toLowerCase();

	let after: string = text;
	console.log('change: ' + before + ' => ' + after);
	return text;
}

function capitalizeFirstLetter(text: string) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

function isLower(text: string) {
	return text === text.toLowerCase()
}