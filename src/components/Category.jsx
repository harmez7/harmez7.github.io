import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { actions as quizSettingsActions } from "../redux/reducers/quizSettingsSlice"
import categories from "../categories.json"
import SettingsTitle from "./SettingsTitle"
import { useEffect, useState } from "react"
import { FaAlignJustify, FaGrip } from "react-icons/fa6"
import { actions as quizDataActions } from "../redux/reducers/quizDateSlice"
import "../styleSheets/category/category.css"

const CategoryPage = ({ isCategorySet }) => {
  const [view, setView] = useState(true)
  const dispatch = useDispatch()

  const updateCategoryInStore = (key) => {
    dispatch(quizSettingsActions.setCategory(key))
  }

  const selectCategory = (key) => {
    updateCategoryInStore(key)
    isCategorySet(true)
  }

  const categoryElements = categories.map((category) => {
    return (
      <div
        onClick={() => selectCategory(category.key)}
        className="category-item"
        key={category.key}
      >
        <div className="category-item__text-bg">{category.value}</div>
      </div>
    )
  })

  useEffect(() => {
    dispatch(quizDataActions.reset())
  }, [])

  return (
    <div className="category-page">
      <SettingsTitle title={"Choose Category"} position={"sticky"} />
      <div className={`category-grid ${view ? "list" : "tile"}`}>
        {categoryElements}
      </div>
      <div
        className="categoryViewChangeButton"
        onClick={(e) => setView((current) => !current)}
        title="Change View"
      >
        {view ? <FaAlignJustify /> : <FaGrip />}
      </div>
    </div>
  )
}

CategoryPage.propTypes = {
  isCategorySet: PropTypes.func.isRequired,
}

export default CategoryPage
