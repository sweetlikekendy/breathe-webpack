const exerciseModal = (title, description, steps) => {
  const exerciseModalEl = document.querySelector(".exercise-modal")
  const titleEl = document.querySelector(".exercise-modal-content-title")
  const descriptionEl = document.querySelector(
    ".exercise-model-content-description"
  )

  const explanationEl = document.querySelector(
    ".exercise-modal-content-explanation"
  )

  const closeButtonEl = document.querySelector(".exercise-modal-close-button")

  titleEl.innerHTML = title
  descriptionEl.innerHTML = description

  console.log(title, description, steps)

  console.log(exerciseModalEl)

  exerciseModalEl.addEventListener("keydown", (e) => {
    console.log(e.code)
  })

  closeButtonEl.addEventListener("click", (e) => {
    e.preventDefault()
    exerciseModalEl.classList.add("hidden")
  })

  const createSteps = () => {
    resetSteps()

    const orderedListEl = document.createElement("ol")
    const listItemEls = []
    for (let step of steps) {
      const itemEl = document.createElement("li")
      itemEl.innerHTML = step
      listItemEls.push(itemEl)
    }

    for (let element of listItemEls) {
      orderedListEl.appendChild(element)
    }
    explanationEl.appendChild(orderedListEl)
  }

  const resetSteps = () => {
    explanationEl.innerHTML = ""
  }

  return { createSteps, resetSteps }
}

export default exerciseModal
