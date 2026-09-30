import { weddingConfig } from '../config/weddingConfig';

export function sendWhatsAppMessage(name: string, isAttending: boolean, guests: number) {
  const number = weddingConfig.whatsappNumber.replace(/[^0-9]/g, '');
  const message = isAttending 
    ? `ආයුබෝවන්, මම ${name}. මම සහ තවත් ${guests - 1} දෙනෙක් මංගල උත්සවයට සහභාගී වීමට සතුටින් බලාපොරොත්තු වෙමි.`
    : `ආයුබෝවන්, මම ${name}. කනගාටුවෙන් වුවත් මට මංගල උත්සවයට සහභාගී වීමට නොහැකි බව දන්වා සිටිමි.`;
    
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
