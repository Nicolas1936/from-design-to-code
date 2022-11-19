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
    const path = this.formTarget.action;
    const query = this.inputTarget.value;

    const url = `${path}?query=${query}`;
    const headers = { headers: {"Accept": "text/plain"}}

    fetch(url, headers)
      .then(response => response.text())
      .then((data) => {
        this.listTarget.outerHTML = data
      })

  }
}
