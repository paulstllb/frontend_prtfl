<script>
    let socket;
    let messages = [];
    let inputMessage = "";
  
    // Verbinde dich mit dem WebSocket-Server
    function connectWebSocket() {
      // Dynamisch die WebSocket-URL basierend auf der aktuellen Seite erstellen und Port 3000 verwenden
const wsProtocol = window.location.protocol === "https:" ? "wss://" : "ws://";
const wsUrl = `${wsProtocol}${window.location.hostname}:3000/ws/echo`;

const socket = new WebSocket(wsUrl);

      console.log(wsUrl);
  
      // Event listener für eingehende Nachrichten
      socket.addEventListener("message", (event) => {
        messages = [...messages, event.data];
      });
  
      // Event listener für Verbindungsöffnung
      socket.addEventListener("open", () => {
        console.log("Connected to WebSocket server");
      });
  
      // Event listener für Fehler
      socket.addEventListener("error", (event) => {
        console.error("WebSocket error:", event);
      });
      
      // Event listener für Verbindungsabbruch
      socket.addEventListener("close", () => {
        console.log("WebSocket connection closed");
      });
    }
  
    // Nachricht an den Server senden
    function sendMessage() {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(inputMessage);
        inputMessage = "";
      }
    }
  
    // Verbinde den WebSocket bei der Initialisierung der Komponente
    connectWebSocket();

    function echo() {
      console.log("echo");
      socket.send("echo");
    }
  </script>
  
  <style>
    .chat-container {
      width: 300px;
      margin: auto;
    }
  
    .messages {
      border: 1px solid #ccc;
      padding: 10px;
      height: 200px;
      overflow-y: scroll;
      margin-bottom: 10px;
    }
  
    .input-container {
      display: flex;
    }
  
    input {
      flex: 1;
      padding: 5px;
    }
  
    button {
      padding: 5px 10px;
    }
  </style>
  
  <div class="chat-container">
    <div class="messages">
      {#each messages as message}
        <div>{message}</div>
      {/each}
    </div>
  
    <div class="input-container">
      <input
        type="text"
        bind:value={inputMessage}
        placeholder="Type a message"
        on:keypress="{(e) => e.key === 'Enter' && sendMessage()}"
      />
      <button on:click={sendMessage}>Send</button>
      <button on:click={echo}>echo</button>
    </div>
  </div>
  