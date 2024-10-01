const ShoeCard = ({ imgURL, changeBigShoeImage, BigShoeImage }) => {
  const handleClick = () => {
    if (BigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        BigShoeImage === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover w-38 h-38 sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="Shoe Collection"
          width={122}
          height={98}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
