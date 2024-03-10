function WorkItems({ item }) {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img' />
      <div>
        <h3 className="work__title">{item.title}</h3>
        <a href={item.website} target='blank' className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  )
}

export default WorkItems 