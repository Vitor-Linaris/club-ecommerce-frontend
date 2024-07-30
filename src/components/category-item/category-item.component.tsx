import { FunctionComponent } from 'react'

// Utilities
import Category from '../../types/category.types'

// Styles
import './category-item.styles.csss'

interface CategoryItemProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <div
      className="category-item-container"
      style={{ backgroundImage: category.imageUrl }}>
      <div className="ccategory-name">
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
    </div>
  )
}

export default CategoryItem
