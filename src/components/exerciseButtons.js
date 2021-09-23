import { exercises } from "../displayController"
import { exerciseModal } from "."

const exerciseButtons = () => {
  const exercisesArr = exercises.data

  const chooseExerciseEls = document.querySelectorAll(
    ".exercise-choose-exercise"
  )
  const titleEls = document.querySelectorAll(".exercise-meditation-title")
  const descriptionEls = document.querySelectorAll(".exercise-description")

  for (let i = 0; i < exercisesArr.length; i++) {
    const { title, description, explanation, cycles } = exercisesArr[i]
    const steps = explanation.trim().split(". ")
    chooseExerciseEls[i].addEventListener("click", (e) => {
      e.preventDefault()

      // Check to make sure the description, title, exercise-choose-exercise, or svg arrow has been clicked
      const isDescription = e.target.innerHTML === description
      const isTitle = e.target.innerHTML === title
      const isExerciseButton = e.target.className === `space-between`
      const isSvgArrow =
        e.target.tagName === "svg" || e.target.tagName === `path`

      const isCorrectClick =
        isDescription || isTitle || isExerciseButton || isSvgArrow

      if (isCorrectClick) {
        const exerciseModalEl = document.querySelector(".exercise-modal")
        exerciseModalEl.classList.remove("hidden")
        exerciseModal(title, description, steps).createSteps()
      }
    })
    titleEls[i].innerHTML = title
    descriptionEls[i].innerHTML = description
  }
}

export default exerciseButtons
