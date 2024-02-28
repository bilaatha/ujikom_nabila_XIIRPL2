import { ConfigAxios, useNavigate } from '../export';

const NewAlbum = ({createAlbum, setAlbums}) => {
  const BuatAlbum = async(e) => {
    e.preventDefault();

    const response = await ConfigAxios.post('/album', new FormData(e.target))
    response.data.msg ? createAlbum() : ""
    console.log(response);

    const getAlbums = async () => {
      const response = await ConfigAxios.get('/album');
      setAlbums(response.data.data);
      // console.log(response.data.data);
    };

    getAlbums()
  }
  return (
    <div className="modal-bg">
        <form onSubmit={BuatAlbum} className="modal bg-violet-200">
            <h1 className="font-koulen text-xl">buat album baru</h1>
            <p className="text-xs font-inter text-secondary/70 w-1/2">Kelompokan foto mu sesuai momen</p>
            <input type="text" className="input bg-primary" placeholder="nama album" name="nama" id="nama" />
            <input type="text" className="input bg-primary" placeholder="deskripsi" name="deskripsi" id="deskripsi" />
            <div className="flex items-center gap-4">
                <button type='submit' className="btn-dark  bg-violet-300 text-dark-green">Buat!</button>
                <div className="btn-dark  bg-violet-300 text-dark-green" onClick={createAlbum}>Batal</div>
            </div>
        </form>
    </div>
  )
}

export default NewAlbum
