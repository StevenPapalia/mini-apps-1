document.getElementById("button").onclick = function sendJSONandGetCSV() {
  // grab data
  var text = document.getElementById("textfield").value;

  // send data to server
  var xhr = new XMLHttpRequest();

  xhr.open("POST", '../converter', true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.send(JSON.stringify(text));

  xhr.onload = function() {
    if (xhr.status !== 200) { // analyze HTTP status of the response
      alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
      alert(`Done, got ${xhr.response.length}`); // responseText is the server
    }
  };

  xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      console.log(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      console.log(`Received ${event.loaded} bytes`); // no Content-Length
    }

  };

  xhr.onerror = function() {
    console.log("Request failed");
  };

  xhr.timeout = 10000; // timeout in ms, 10 seconds



};

