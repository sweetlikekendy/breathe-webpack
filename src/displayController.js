import { exerciseButtons, exerciseModal } from "./components"

export const exercises = (() => {
  const data = [
    {
      title: "Calm Down",
      description: "4 - 6 Extended Exhale",
      explanation: "Inhale for 4 seconds. Exhale for 6 seconds.",
      cycles: [4, 6],
    },
    {
      title: "Clear the Mind",
      description: "4 - 4 Equal Breathing",
      explanation: "Inhale for 4 seconds. Exhale for 4 seconds.",
      cycles: [4, 4],
    },
    {
      title: "Relax Deeply",
      description: "4 - 7 - 8 Breathing",
      explanation:
        "Inhale for 4 seconds. Hold breath for 7 seconds. Exhale for 8 seconds.",
      cycles: [4, 7, 8],
    },
    {
      title: "Relieve Stress",
      description: "4 - 4 - 4 - 4 Box Breathing",
      explanation:
        "Inhale for 4 seconds. Hold breath for 4 seconds. Exhale for 4 seconds. Hold breath for 4 seconds.",
      cycles: [4, 4, 4, 4],
    },
  ]

  return { data }
})()

const displayController = () => {
  exerciseButtons()
  // const exerciseModal = () => {
  //   let isShowModal = false
  //   const body = document.body
  //   const divEl = document.createElement("div")
  //   const closeButtonEl = document.createElement("button")

  //   const showModal = () => {
  //     closeButtonEl.innerHTML = `Close`
  //     closeButtonEl.classList.add("exercise-modal-close-button")

  //     divEl.classList.add("exercise-modal")
  //     divEl.innerHTML = `<div>${title} ${description}</div>`

  //     divEl.appendChild(closeButtonEl)
  //     body.appendChild(divEl)
  //   }

  //   const hideModal = () => {
  //     divEl.classList.add("exercise-modal-hidden")
  //   }

  //   const getModalState = () => isShowModal
  //   const setModalState = (state) => (isShowModal = state)

  //   return { getModalState, setModalState }
  // }

  // const handleEscapeKeyDown = (e, element) => {
  //   console.log(e.key)
  //   if (e.key === `Escape`) hideModal(element)

  //   element.removeEventListener("keydown", (e) =>
  //     handleEscapeKeyDown(e, element)
  //   )
  // }

  return {}
}

export default displayController
