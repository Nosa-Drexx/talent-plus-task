type categoryType = 'Design' | 'Development' | 'Marketing'

type CategoryOBJ = {
  id: string
  category: categoryType
  name: string
  time: string
  lesson: string
  lessonImage: string
  instructorImage: string
  instructor: string
  price: string
}

type CategoryArr = CategoryOBJ[]
