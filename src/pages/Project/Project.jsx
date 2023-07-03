
const Project = () => {
    return (

        <>

            <h2 className='text-4xl font-bold text-ternary-dark dark:text-ternary-light mt-4 '><span className='ml-2'> 🎗 Projects  </span></h2> <br />

            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Project;