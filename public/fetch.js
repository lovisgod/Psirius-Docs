let my_note_id = '0';

const saveNote = () => {
    postNote();
};


const postNote = () => {
     let title = document.getElementById('title').textContent;
     //since iframe is just like another page on the page i can access the body
     //of the iframe. 
     let content = richTextField.document.getElementsByTagName('body')[0].innerHTML;
     let username = 'ayo455';
     console.log(title);
     console.log(content);
     if (my_note_id == '0') {
     fetch('http://localhost:7000/api/v1/save_note', {
      method : 'POST',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-type':'application/json'
      },
      body: JSON.stringify({username:username, title: title, content:content})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  } else {
    fetch ('http://localhost:7000/api/v1/update_note', {
      method : 'PUT',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-type':'application/json'
      },
      body:JSON.stringify({content:content,id:my_note_id,username:username})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  }

};


// Get the modal
const modal = document.getElementById('listModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// When the user clicks the button, open the modal 
const getNotes = () => {
  modal.style.display = "block";
  fetch('http://127.0.0.1:7000/api/v1/list_notes/ayo455')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    //here we create a variable called output and set it to equal an h2
    let output = '<h2>Note List</h2>';
    //here we loop through the data from the response and set params user as identifier
    data.notes.forEach(note => {
      //then we append the data to the output also the ${} sign is used for appending when
      //using backtick for string concat
      output += `
       <div>
       <h3 class="card card-title" id="${note.note_id}">${note.title}</h3>
       </div>
      `
    });
    document.getElementById('modal-body').innerHTML = output;
    });
};

const getFullNote = (e) => {
  //the e.targer get the current item we are clicking on.
  let id = e.target.id;
  
    console.log("My ID: "+id);
    fetch('http://127.0.0.1:7000/api/v1/list_notes/ayo455')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    //here we loop through the data from the response and set params user as identifier
    data.notes.forEach(note => {
        if (note.note_id == id){
          richTextField.document.getElementsByTagName('body')[0].innerHTML = note.content;
            document.getElementById('title').innerHTML = note.title;
            modal.style.display = "none";
            my_note_id = id;
        }else {
          //do nothing
        }
    });
   
    })
    .catch((err) => console.log(err));


};
 
const noteObject = document.getElementsByClassName('card');
for (var i = 0 ; i < noteObject.length; i++) {
  noteObject[i].addEventListener('click', getFullNote);
} 