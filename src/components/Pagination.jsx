const Pagination = ({ page, handleNext, handlePrev }) => {
  return (
    <div className='my-20 join self-center '>
      <button
        disabled={page === 1}
        onClick={handlePrev}
        className='join-item btn btn-lg'
      >
        «
      </button>
      <button className='join-item btn btn-lg'>Page {page}</button>
      <button onClick={handleNext} className='join-item btn btn-lg'>
        »
      </button>
    </div>
  );
};

export default Pagination;
