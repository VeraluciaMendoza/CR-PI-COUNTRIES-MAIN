import { useState } from "react"

const UploadImage = () => {
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePicture = async (event) => {
    const files = event.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "test_image");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dajr4ycxq/image/upload",
      {
        method: "POST",
        body: data
      }
    )
    const file = await res.json();
    console.log(res, 'res')
    setImage(file.secure_url);
    console.log(file.secure_url, 'url  ')
    setLoading(false);
  }

  return (
    <div>
      <h1>Cargando Imagen</h1>
      <form>
          <input
            type="file"
            name="file"
            placeholder="Sube una imagen aqui..."
            onChange={handlePicture}
            accept="image/*"
          />
      </form>
    </div>
  )
}

export default UploadImage;