import smooth from '../../assets/smooth.webp';

const ImageContainer = () => {
    return(
        <div className="col-span-5 row-span-7 rounded-3xl shadow-2xl overflow-hidden">
          <img
            src={smooth}
            alt="descrizione immagine"
            className="object-cover object-center w-full h-full"
          />
        </div>
    );
}

export default ImageContainer;