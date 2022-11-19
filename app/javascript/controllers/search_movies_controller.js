import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["form", "input", "list"]

  connect() {
    // console.log(this.formTarget)
    // console.log(this.inputTarget)
    // console.log(this.listTarget)
  }

  update(event) {
    // console.log("event : ", event)

    // console.log("formTarget", this.formTarget);
    // console.log("formTarget.action", this.formTarget.action);

    // console.log("inputTarget", this.inputTarget);
    // console.log("inputTarget.value", this.inputTarget.value)

    const path = this.formTarget.action;
    const query = this.inputTarget.value;

    const url = `${path}?query=${query}`;
    const headers = { headers: {"Accept": "text/plain"}}

    // console.log(url);

    fetch(url, headers)
      .then(response => response.text())
      .then((data) => {
        this.listTarget.outerHTML = data
      })

    // fetch(url, headers)
    //   .then()
    //   .then()


  }
}
