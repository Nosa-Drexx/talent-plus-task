import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

type StateType = {
  categories: CategoryArr
}

export const useCategoryStore = defineStore('categoryStore', {
  state: (): StateType => ({
    categories: [
      {
        id: nanoid(),
        category: 'Design',
        name: 'Introduction to user research in UX Design',
        time: '23hrs 50mins',
        lessonImage: 'src/views/LandingPage/images/research.png',
        lesson: '15 Lessons',
        instructorImage: 'src/views/LandingPage/images/leonard.png',
        instructor: 'Leonard Victor',
        price: '$15.00'
      },
      {
        id: nanoid(),
        category: 'Marketing',
        name: 'Introduction to new marketing audience',
        time: '22hrs 30mins',
        lessonImage: 'src/views/LandingPage/images/audience.png',
        lesson: '22 Lessons',
        instructorImage: 'src/views/LandingPage/images/jeffery.png',
        instructor: 'Jeffrey Williams ',
        price: '$32.00'
      },
      {
        id: nanoid(),
        category: 'Development',
        name: 'Introduction to HTML, CSS, and Bootstrap',
        time: '45hrs 50mins',
        lessonImage: 'src/views/LandingPage/images/html.png',
        lesson: '55 Lessons',
        instructorImage: 'src/views/LandingPage/images/claretta.png',
        instructor: 'Claretta Mason',
        price: '$55.00'
      },
      {
        id: nanoid(),
        category: 'Development',
        name: 'Introduction to Javascript, Git and Github',
        time: '30hrs 50mins',
        lessonImage: 'src/views/LandingPage/images/javascript.png',
        lesson: '22 Lessons',
        instructorImage: 'src/views/LandingPage/images/jessica.png',
        instructor: 'Jessica Duke',
        price: '$45.00'
      },
      {
        id: nanoid(),
        category: 'Marketing',
        name: 'Introduction to outroom marketing analysis',
        time: '33hrs 50mins',
        lessonImage: 'src/views/LandingPage/images/outroom.png',
        lesson: '26 Lessons',
        instructorImage: 'src/views/LandingPage/images/samuel.png',
        instructor: 'Samuel Jacobs',
        price: '$25.00'
      },
      {
        id: nanoid(),
        category: 'Marketing',
        name: 'Introduction to live marking analysis',
        time: '10hrs 50mins',
        lessonImage: 'src/views/LandingPage/images/livemarketing.png',
        lesson: '32 Lessons',
        instructorImage: 'src/views/LandingPage/images/adam.png',
        instructor: 'Adam Smith',
        price: '$25.00'
      }
    ]
  })
})
