
import axios from 'axios';

export const deleteQrCode = (qrCode_id: string) => {
    return axios.delete(`http://localhost:5000/qrcode/${qrCode_id}`);
}