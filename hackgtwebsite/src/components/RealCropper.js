import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

<script src="https://unpkg.com/react-image-crop/dist/ReactCrop.min.js"/>;

function CropDemo({ src }) {
    const [crop, setCrop] = useState({ aspect: 16 / 9 });
    return <ReactCrop src={src} crop={crop} onChange={newCrop => setCrop(newCrop)} />;
}

<ReactCrop src="path/to/image.jpg" />;

let onChange;
onChange = crop => {
    this.setState({ crop });
};

let onImageLoaded;
onImageLoaded = image => {
    this.setState({ crop: { width: image.width, height: image.height } });
    return false; // Important when settings crop state in here.
};

crop: {
    unit: 'px', // default, can be 'px' or '%'
        x: 130,
        y: 50,
        width: 200,
        height: 200
}

<ReactCrop src="path/to/image.jpg" crop={this.state.crop} />

/**
 * @param {HTMLImageElement} image - Image File Object
 * @param {Object} crop - crop Object
 * @param {String} fileName - Name of the returned file in Promise
 */
function getCroppedImg(image, crop, fileName) {
    let canvas = document.createElement('canvas');
    let scaleX = image.naturalWidth / image.width;
    let scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height,
    );

    // As Base64 string
    // const base64Image = canvas.toDataURL('image/jpeg');

    // As a blob
    return new Promise((resolve, reject) => {
        canvas.toBlob(blob => {
            blob.name = fileName;
            resolve(blob);
        }, 'image/jpeg', 1);
    });
}

let async;
async
test() {
    const croppedImg = await getCroppedImg(image, crop, fileName);
}



