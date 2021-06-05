window.addEventListener("DOMContentLoaded", () => {

  const noteSchema = {
    text: {
      type: String,
      required: true
    },
    date: {
      type: Number,
      default: Date.now
    }
  };

  const notes = new BrowseDB("notes", noteSchema);
  const exeCute = document.getElementById("exeBtn");
  const result = document.querySelector(".result");
  exeCute.addEventListener("click", () => {
    const method = document.getElementById("method").value;
    const val = document.getElementById("val").value.trim();
    // console.log(method, val);
    switch(method) {
      case "create":
        // result.innerHTML = `<pre>${JSON.stringify(notes.create(JSON.parse(val)))}</pre>`;
        result.innerHTML = JSON.stringify(notes.create(JSON.parse(val)));
        break;
      case "find":
        result.innerHTML = JSON.stringify(notes.find(val.includes("{") ? JSON.parse(val) : null));
        break;
      case "findById":
        result.innerHTML = JSON.stringify(notes.findById(val));
        break;
      case "update":
        alert("Note available at the moment");
        break;
      case "updateById":
        alert("Note available at the moment");
        break;
      case "updateAll":
        result.innerHTML = JSON.stringify(notes.updateAll(JSON.parse(val)));
        break;
      case "delete":
        result.innerHTML = JSON.stringify(notes.delete(JSON.parse(val)));
        break;
      case "deleteById":
        result.innerHTML = JSON.stringify(notes.deleteById(val));
        break;
      case "deleteAll":
        result.innerHTML = JSON.stringify(notes.deleteAll());
        break;
      case "remove":
        result.innerHTML = JSON.stringify(notes.remove(JSON.parse(val)));
        break;
    }
  });

  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const close = document.querySelector(".close");
  burger.addEventListener("click", () => {
    nav.style.transform = "translateY(0px)";
  });
  close.addEventListener("click", () => {
    nav.style.transform = "translateY(-600px)";
  });
});