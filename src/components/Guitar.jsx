
const Guitar = () => {
    return (
        <div className="col-md-6 col-lg-4 my-4 row align-tiems-center">
            <div className="col-4">
                <img className="img-fluid" src="./public/img/guitarra_01.jpg" alt="imagen guitarra" />

            </div>

            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">Lukather</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptate ratione aut provident. Officiis fugit veritatis nulla ab ex explicabo sint, voluptas culpa? Porro obcaecati repellendus soluta aliquid libero eaque.</p>
                <p className="fw-black text-primary fs-3">299$</p>

                <button 
                type="button" 
                className="btn btn-dark">Añadir al carrito</button>
            </div>

        </div>
    )
}

export default Guitar