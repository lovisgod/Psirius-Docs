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

};