//we declared two variables to check if we are in source code mode or text mode 
let sourceCodeMode = false;
let editMode = true;

//this method makes the text field edittale
function enableEditMode (){
    richTextField.document.designMode = 'On';
    
}

//this method execute different command on the document in the textfiled area
const execCmd = (command) => {
    richTextField.document.execCommand(command,false,null);
}

//this methods helps with selection of formating block

const execCommandWithArg = (command, arg) => {
    richTextField.document.execCommand(command, false, arg); 
}

//this method toogles between source and text mode 

const toogleSource = () => {
    if (sourceCodeMode) {
        richTextField.document.getElementsByTagName('body')[0]
        .innerHTML = richTextField.document.getElementsByTagName('body')[0].textContent;
        sourceCodeMode = false;
    } 
    else {
        richTextField.document.getElementsByTagName('body')[0]
        .textContent = richTextField.document.getElementsByTagName('body')[0].innerHTML;
        sourceCodeMode = true;
    }
};


const toogleEdit = () => {
    if (editMode) {
        richTextField.document.designMode = 'Off';
        editMode = false;
    }
    else {
        richTextField.document.designMode = 'On';
        editMode = true;
    }

};
