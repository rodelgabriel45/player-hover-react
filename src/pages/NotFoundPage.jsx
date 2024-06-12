const NotFoundPage = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen '>
      <div className='p-4 h-[40rem] text-white max-w-7xl opacity-80 rounded-md mx-auto flex items-center justify-center flex-col gap-4 bg-[url(https://png.pngtree.com/thumb_back/fh260/background/20211025/pngtree-bottom-console-image_913604.png)] bg-center bg-cover bg-no-repeat'>
        <h1 className='text-2xl lg:text-4xl'>404 Page not found</h1>
        <p className='text-xl lg:text-2xl'>
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
