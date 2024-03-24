import React from 'react'
import { NEWS_CATEGORIES } from '../../utils/constants/constants'
import CategoryWiseContent from './CategoryWiseContent'
const SubContent = () => {
  return (
    NEWS_CATEGORIES.map((category) => 
        <div>
            <CategoryWiseContent key={category.identifier} identifier={category.identifier} name={category.name} />
        </div>
    )
  )
}

export default SubContent