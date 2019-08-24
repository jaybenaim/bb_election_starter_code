document.addEventListener("DOMContentLoaded", function() {
  const rootButton = document.querySelector(".root");
  const refresh = document.querySelector("#refresh");

  rootButton.addEventListener("click", () => {
    requestRoot();
  });

  refresh.addEventListener("click", event => {
    refreshPage();
    requestRoot();
  });
});

const refreshPage = () => {
  const li = document.querySelectorAll("li");
  const forms = document.querySelectorAll("form");

  event.preventDefault();
  li.forEach(l => {
    l.remove();
  });
  forms.forEach(form => {
    form.remove();
  });
};

async function requestRoot() {
  const ul = document.querySelector("#data");

  try {
    let rootRequest = await axios.get("https://bb-election-api.herokuapp.com/");
    rootRequest = rootRequest.data.candidates;

    for (let i = 0; i < rootRequest.length; i++) {
      const li = document.createElement("li");
      const form = document.createElement("form");
      const hiddenInput = document.createElement("input");
      const submitButton = document.createElement("input");
      ul.append(li);
      ul.append(form);
      form.append(hiddenInput);
      form.append(submitButton);

      li.textContent = `Name: ${rootRequest[i].name} | Votes: ${rootRequest[i].votes} `;

      form.setAttribute("class", "form");
      form.setAttribute("action", "https://bb-election-api.herokuapp.com/vote");
      form.setAttribute("method", "POST");

      hiddenInput.setAttribute("type", "hidden");
      hiddenInput.setAttribute("name", "name");
      hiddenInput.setAttribute("value", rootRequest[i].name);
      submitButton.setAttribute("id", "submit-button");
      submitButton.setAttribute("type", "submit");
    }
    handleSubmit();
  } catch (error) {
    console.log(error);
  }
}

const handleSubmit = () => {
  let forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      name = event.target.querySelector("input[type=hidden]").value;
      axios
        .post(
          form.action,
          {
            name: name
          },
          { headers: { "X-Requested-With": "XMLHttpRequest" } }
        )
        .then(response => {
          console.log(response.data);
          let submitButton = form.querySelector("#submit-button");
          submitButton.setAttribute("disabled", "True");
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
};
