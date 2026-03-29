const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chatbox');
const chatBody = document.getElementById('chat-body');
const chatInput = document.getElementById('chat-input');

chatToggle.addEventListener('click', () => {
  chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
  chatBox.style.flexDirection = 'column';
});

chatInput.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    const msg = chatInput.value.trim();
    if(msg === "") return;
    appendMessage(msg, "user");
    chatInput.value = "";
    setTimeout(() => respond(msg), 500);
  }
});

function appendMessage(msg, sender){
  const div = document.createElement('div');
  div.textContent = msg;
  div.style.padding = "6px 10px";
  div.style.margin = "5px";
  div.style.borderRadius = "8px";
  div.style.maxWidth = "80%";
  if(sender === "user"){
    div.style.background = "#c5a046";
    div.style.color = "#fff";
    div.style.alignSelf = "flex-end";
  } else {
    div.style.background = "#fff";
    div.style.color = "#333";
    div.style.alignSelf = "flex-start";
  }
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function respond(msg){
  msg = msg.toLowerCase();
  let reply = "Thanks for reaching out! We'll get back to you soon.";

  if(msg.includes("program") || msg.includes("offer")){
    reply = "We offer Youth, Family, and Strength fitness programs.";
  } 
  else if(msg.includes("join") || msg.includes("membership")){
    reply = "You can join by visiting the ‘Programs’ page and contacting us directly!";
  } 
  else if(msg.includes("hours")){
    reply = "We are open Monday-Saturday, 6am to 9pm.";
  } 
  else if(msg.includes("location")){
    reply = "We are located in Abuja, Nigeria.";
  }

  appendMessage(reply, "bot");
}