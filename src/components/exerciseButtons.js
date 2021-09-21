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
      const exerciseModalEl = document.querySelector(".exercise-modal")
      const titleEl = e.target.querySelector(".exercise-meditation-title")
      exerciseModalEl.classList.remove("hidden")
      if (title === titleEl.innerHTML) {
        exerciseModal(title, description, steps).createSteps()
      }
    })
    titleEls[i].innerHTML = title
    descriptionEls[i].innerHTML = description
  }
}

export default exerciseButtons
