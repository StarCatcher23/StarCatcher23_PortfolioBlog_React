const ModalThumbnailGrid = ({ items }) => {
  return (
    <div className="modal-thumbnail-grid">
      {items.map((item) => (
        <img key={item.id} src={item.image} alt="" className="modal-thumb" />
      ))}
    </div>
  );
};

export default ModalThumbnailGrid;
