let myPlaylist = document.getElementById('myPlaylist');
let newPlaylist = document.getElementById('newPlaylist');
let updatePlaylist = document.getElementById('updatePlaylist');



myPlaylist.addEventListener('click', ()=>{
  document.getElementById('myList').style.display='block';
  document.getElementById('newList').style.display='none';
  document.getElementById('updateList').style.display='none';
})
newPlaylist.addEventListener('click', ()=>{
  document.getElementById('myList').style.display='none';
  document.getElementById('newList').style.display='block';
  document.getElementById('updateList').style.display='none';
})
updatePlaylist.addEventListener('click', ()=>{
  document.getElementById('myList').style.display='none';
  document.getElementById('newList').style.display='none';
  document.getElementById('updateList').style.display='block';
})
