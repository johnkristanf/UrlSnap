
import axios from 'axios';

export const fetchCustomizableQrCode = async (backgroundColor: string, foregroundColor: string) => {
    
    try {
        const response = await axios.get(`http://localhost:5000/qrcode/customizable/${backgroundColor}/${foregroundColor}`,
        {
            responseType: 'blob' 
        });

        console.log('response', response.data)

        const imageUrl = URL.createObjectURL(response.data);

        console.log('Image URL:', imageUrl);

        return imageUrl;

    } catch (error) {
        console.error(error);
    }
}