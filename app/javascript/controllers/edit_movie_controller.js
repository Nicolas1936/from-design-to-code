import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
  static targets = ["form", "infos", "card"]

  connect() {
    console.log("Welcom to the edit_movie controller!!!")

    // console.log("form", this.formTarget)
    // console.log("infos", this.infosTarget)

  }

  displayForm() {
    this.infosTarget.classList.add("d-none")
    this.formTarget.classList.remove("d-none")
  }

  update(event) {
    event.preventDefault()
    console.log("update")

    const url = this.formTarget.action

    console.log("url", url)

    fetch(url, {
      method: "PATCH",
      headers: { "Accept": "text/plain"},
      body: new FormData(this.formTarget)
    })
      .then(response => response.text())
      .then((data) => {
        this.cardTarget.outerHTML = data
      })

  }

}
