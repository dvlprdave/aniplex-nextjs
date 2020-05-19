const Categories = ({ categories }) => {
  
  const CategoryTitles = categories.data.map(category => 
    <li className='pr-6 pb-2'>{category.attributes.title}</li>
  )

  return (
    <div className='mt-12'>
      <h2 className='md:text-xl pb-2 font-bold'>Categories</h2>
      <ul className='flex flex-wrap space-between content-between'>
        {CategoryTitles}
      </ul>
    </div>
  )
}

export default Categories